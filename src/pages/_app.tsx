/* libs */
import { useEffect } from 'react'
import { Global } from '@emotion/react'
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
/* types */
import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
/* styles and themes */
import '../../styles/globals.css'
import { globalStyles } from '../styles/globalStyles'
/* components */
import { Layout } from 'src/components'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: string) => {
      document.body.style.overflow = 'hidden';
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
      document.body.style.overflow = 'auto';
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])


  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </>
    )
  }

  return (
    <Layout>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
