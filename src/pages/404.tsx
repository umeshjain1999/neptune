//REF : https://error404.fun/ https://www.manypixels.co/gallery
import type { NextPage } from 'next'
import Link from 'next/link'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { theme } from 'src/styles/globalStyles'
import { Button } from 'src/components'
const NotFound: NextPage = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 50px);
    @media screen and (max-width:680px) {
      svg{
        width: 300px;
        height: 200px;
      }
    }
  `
  const Text = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1rem 0;
    color: ${props => props.theme.colors.primary[700]};
    @media screen and (max-width:680px) {
      font-size: 1rem;
    }
  `
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <NotFoundSVG />
        <Text>Whoops, You are lost in space!</Text>
        <Button as='link' href='/'>
          Home 🛸
        </Button>
      </Wrapper>
    </ThemeProvider>
  )
}

export default NotFound


const NotFoundSVG = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 300"
    width={406}
    height={306}
    className="illustration styles_illustrationTablet__1DWOa"
    role="img"
    {...props}
  >
    <g data-name="#53_astronaut">
      <path
        d="M151.81 258.51a2.08 2.08 0 0 0-.13.3c-1.25 3.05-1.26 6.86-1 10.09.66 7.83 2.6 15.27 11.25 17.14a18.84 18.84 0 0 0 10.83-.61 12.43 12.43 0 0 0 7.41-7.62 19.77 19.77 0 0 0 .65-5.27q.19-6.56 0-13.11a10.4 10.4 0 0 0-.6-3.76 7.08 7.08 0 0 0-5.14-3.83 17.42 17.42 0 0 0-6.63.19 72.54 72.54 0 0 0-11.05 2.84c-2.28.78-4.54 1.46-5.59 3.64Z"
        fill="#231f20"
      />
      <path
        d="M166.58 287a22.38 22.38 0 0 1-4.73-.52c-9.12-2-11-10-11.65-17.58-.37-4.36 0-7.73 1-10.32 0-.11.09-.22.14-.33 1.09-2.25 3.35-3 5.54-3.77l.33-.12a73.47 73.47 0 0 1 11.12-2.86 18.18 18.18 0 0 1 6.82-.19 7.51 7.51 0 0 1 5.5 4.13 11 11 0 0 1 .64 3.93c.15 4.37.16 8.79 0 13.15a20.49 20.49 0 0 1-.67 5.4 12.88 12.88 0 0 1-7.71 7.93 17.27 17.27 0 0 1-6.33 1.15Zm-14.32-28.32-.12.28c-1 2.43-1.3 5.66-.95 9.86.65 7.59 2.41 14.87 10.87 16.69a18.26 18.26 0 0 0 10.53-.58 11.9 11.9 0 0 0 7.13-7.3 19.16 19.16 0 0 0 .62-5.14c.13-4.34.12-8.74 0-13.08a9.62 9.62 0 0 0-.56-3.58 6.61 6.61 0 0 0-4.79-3.55 17.47 17.47 0 0 0-6.44.2 73 73 0 0 0-11 2.82l-.33.12c-2.08.71-4.05 1.38-5 3.26Z"
        fill="#231f20"
      />
      <rect
        x={180.14}
        y={42.86}
        width={80.14}
        height={112.88}
        rx={9.34}
        transform="rotate(13.23 220.25 99.337)"
        fill="#161D6F"
      />
      <path
        d="M153.13 74.87s-5.26 23.08-1.69 31.91 33.78-3.57 33.78-3.57-20.83 46.55-30.59 72.08 0 71.33 0 71.33-8.64 22.9-2.63 28.9 24.68 8.64 27.31-1.12 2.91-29 2.91-29-2.82-34.44 6.57-51 18.82-33 18.82-33l4.64 12.85s-20.46 84.38-14.07 87.38 52.18-15 47.3-28.53-16.48-5.25-16.48-5.25 29.63-33.42 28.89-49.93-15.75-40.17-15.75-40.17l6.76-23.65s38.66 42 54.43 20.27l-7.13-25.53s-7.51 8.26-16.52-1.13S271 77.31 238 68.67s-84.87 6.2-84.87 6.2Z"
        fill="#fff"
      />
      <path
        d="M167.72 281.38c-6 0-12.72-2.15-16.07-5.5-6-6 1.68-27.21 2.46-29.3-.59-2.86-9.38-46.81 0-71.47 8.82-23.05 26.88-63.73 30.11-71-4.81 1.88-23.13 8.62-30.49 5.52A4.92 4.92 0 0 1 151 107c-3.58-8.86 1.45-31.26 1.67-32.2a.49.49 0 0 1 .35-.37c.52-.15 52.32-14.77 85.1-6.2 24.07 6.29 30.54 19 35.74 29.29 2 3.93 3.71 7.33 6.17 9.89 2.8 2.91 5.71 4.36 8.67 4.33a10.81 10.81 0 0 0 7.12-3.19.46.46 0 0 1 .48-.15.49.49 0 0 1 .37.35l7.13 25.52a.5.5 0 0 1-.08.43 14.68 14.68 0 0 1-11.45 6.43c-7.59.44-17.28-3.91-28.77-13a145.36 145.36 0 0 1-14.38-13.06l-6.45 22.6c1.42 2.29 15 24.55 15.71 40.22.64 14.32-20.69 40.54-27.2 48.18a11.54 11.54 0 0 1 8-.82c3 .94 5.31 3.53 6.81 7.68 1.25 3.48-.47 7.4-5.13 11.64-11.71 10.67-38 19.82-42.86 17.51-1.18-.55-4.34-2 4.37-45.36 4.09-20.31 8.94-40.53 9.4-42.44l-4.22-11.7c-2.12 3.71-10.22 17.91-18.29 32.1-9.2 16.2-6.53 50.32-6.5 50.67s-.31 19.47-2.93 29.18c-.83 3.08-3.25 5.24-7 6.24a19.6 19.6 0 0 1-5.11.61Zm17.5-178.67a.48.48 0 0 1 .36.15.51.51 0 0 1 .1.55c-.21.47-20.94 46.83-30.59 72.06s-.07 70.59 0 71a.44.44 0 0 1 0 .28c-.08.23-8.45 22.67-2.74 28.38 4.07 4.07 13.89 6.32 20.2 4.64 2.35-.63 5.35-2.1 6.28-5.54 2.58-9.59 2.89-28.7 2.89-28.89a173.63 173.63 0 0 1-.23-19.3c.43-9.79 2-23.27 6.87-31.89 9.38-16.52 18.81-33 18.81-33a.51.51 0 0 1 .48-.25.53.53 0 0 1 .43.33l4.64 12.85a.57.57 0 0 1 0 .29c-7.88 32.47-18.73 84.75-14.35 86.81 4.12 1.94 29.86-6.51 41.76-17.34 4.33-4 6-7.5 4.86-10.57-1.39-3.84-3.46-6.22-6.16-7.07-4.58-1.44-9.55 2-9.6 2.05a.49.49 0 0 1-.66-.73c.29-.34 29.48-33.45 28.76-49.58s-15.5-39.69-15.65-39.94a.47.47 0 0 1-.06-.4l6.76-23.6a.51.51 0 0 1 .36-.35.5.5 0 0 1 .48.15c.25.27 25.39 27.36 43 26.34a13.69 13.69 0 0 0 10.57-5.83l-6.85-24.5a11.44 11.44 0 0 1-7.21 2.93h-.14c-3.2 0-6.31-1.56-9.27-4.64-2.56-2.66-4.4-6.29-6.34-10.13-5.11-10.07-11.46-22.6-35.1-28.78-31.27-8.17-80.11 5-84.29 6.11-.59 2.69-4.91 23.28-1.65 31.33a3.89 3.89 0 0 0 2.27 2.13c7.94 3.35 30.64-5.88 30.86-6a.46.46 0 0 1 .15-.05Z"
        fill="#231f20"
      />
      <path
        d="M288.13 128a15.84 15.84 0 0 0 2.29 7 8.65 8.65 0 0 0 6 4 6 6 0 0 0 6.14-3.23 8.71 8.71 0 0 0 .61-2.85 35.51 35.51 0 0 0-1.88-14.92 14.65 14.65 0 0 0-2.7-5c-7.71-8.59-11.04 9.93-10.46 15Z"
        fill="#231f20"
      />
      <path
        d="M297.14 139.49a6.51 6.51 0 0 1-.77 0 9.19 9.19 0 0 1-6.37-4.19 16.12 16.12 0 0 1-2.36-7.22c-.47-4.08 1.32-15.47 5.74-17.45 1.75-.78 3.62-.07 5.58 2.13a15.34 15.34 0 0 1 2.8 5.14 36.13 36.13 0 0 1 1.91 15 9.61 9.61 0 0 1-.65 3 6.43 6.43 0 0 1-5.88 3.59Zm-2.38-28.2a2.35 2.35 0 0 0-1 .21c-3.8 1.7-5.61 12.54-5.17 16.43a15.25 15.25 0 0 0 2.21 6.78 8.21 8.21 0 0 0 5.65 3.75 5.48 5.48 0 0 0 5.63-3 8.29 8.29 0 0 0 .57-2.68 35.19 35.19 0 0 0-1.86-14.64 14.25 14.25 0 0 0-2.6-4.81c-1.19-1.33-2.37-2.04-3.43-2.04ZM166.87 90.35c3.85-.62 7-3.39 9.39-6.5a9.54 9.54 0 0 0 2.28-5.22 5.72 5.72 0 0 0-4.08-5.52 11.16 11.16 0 0 0-5.16.25c-4.86 1-10.07 1.4-14.6 3.55-4.82 2.28-2 6.53 1 9.44 2.81 2.65 7.23 4.65 11.17 4Z"
        fill="#231f20"
      />
      <path
        d="M165.34 91a15.36 15.36 0 0 1-10-4.26c-1.92-1.84-4.12-4.55-3.72-7a4.44 4.44 0 0 1 2.84-3.21 40.93 40.93 0 0 1 10.77-2.87c1.3-.22 2.65-.45 3.94-.72a11.62 11.62 0 0 1 5.39-.24 6.16 6.16 0 0 1 4.44 6 9.92 9.92 0 0 1-2.38 5.51c-2 2.66-5.34 6-9.7 6.7a10.81 10.81 0 0 1-1.58.09Zm1.53-.62Zm5.85-17a16.4 16.4 0 0 0-3.32.46c-1.31.27-2.66.5-4 .73-3.56.61-7.25 1.23-10.51 2.77a3.57 3.57 0 0 0-2.28 2.48c-.35 2.17 2 4.79 3.43 6.16 2.49 2.39 6.78 4.51 10.73 3.87 4-.65 7.16-3.79 9.07-6.31a9.16 9.16 0 0 0 2.16-4.93 5.21 5.21 0 0 0-3.71-5 6.29 6.29 0 0 0-1.57-.22Z"
        fill="#231f20"
      />
      <path
        d="M174.52 79c.68-.5 14.27-4.13 14.27-9.77S176 67.17 176 67.17 178.47 46 175.46 45s-5.82 8.07-5.63 17c0 0 .19-14.49-3.38-13.86s-3 17.14-3 17.14-1.13-15.39-5.82-13-2.44 14.08-2.44 14.08-.75-12.58-3.57-9S151.44 76 152.94 79s12.95 6.38 21.58 0Z"
        fill="#fff"
      />
      <path
        d="M163.19 83.11a21 21 0 0 1-4.83-.55c-2.94-.7-5.19-2-5.87-3.34-1.58-3.16-4.28-18.29-1.26-22.12.68-.86 1.3-.9 1.69-.77.55.17 1 .82 1.36 1.71.28-2.62 1.13-5.1 3.12-6.14a2.32 2.32 0 0 1 2.31 0c1.61.9 2.64 3.83 3.28 6.74.23-4.89 1-10.55 3.38-11a1.7 1.7 0 0 1 1.46.42c1.11.94 1.73 3.44 2.08 6.08.74-4.39 2.12-8 3.76-9.2a2 2 0 0 1 1.94-.41c3 .94 1.63 16.2 1 22 2.19-.54 8.75-1.91 11.45.15a3.07 3.07 0 0 1 1.24 2.57c0 5-9.24 8.28-13.18 9.68-.58.21-1.17.42-1.3.49a19.34 19.34 0 0 1-11.63 3.69Zm-10.61-25.84c-.13 0-.34.17-.57.45-2.68 3.4-.06 18.18 1.37 21 .45.89 2.23 2.11 5.21 2.82a19.29 19.29 0 0 0 15.64-3 9 9 0 0 1 1.55-.61c3.42-1.22 12.51-4.46 12.51-8.75a2.08 2.08 0 0 0-.84-1.78c-2.81-2.13-11.21.17-11.29.2a.5.5 0 0 1-.63-.54c1.15-10 1.4-21.11-.22-21.61a1.11 1.11 0 0 0-1.05.25c-1.9 1.43-3.82 7.54-3.93 14.71v1.55a.51.51 0 0 1-.5.5.51.51 0 0 1-.5-.49V60.5c-.06-3.73-.51-10.32-2.14-11.72a.78.78 0 0 0-.65-.19c-2.17.38-2.82 10-2.59 16.64a.5.5 0 0 1-1 0c-.22-3-1.33-11.25-3.72-12.58a1.35 1.35 0 0 0-1.37 0c-2.45 1.28-2.83 5.43-2.69 8.81.31 1.91.46 3.84.52 4.8a.5.5 0 0 1-.44.52.48.48 0 0 1-.55-.4 35.55 35.55 0 0 1-.53-4.77c-.39-2.39-.95-4.28-1.54-4.46Z"
        fill="#231f20"
      />
      <path
        d="M292.87 117.93c.29-.79-.2-14.85 5.19-16.49s5.69 11.61 5.69 11.61 19.58-8.52 21.35-5.92-6 7.92-14.61 10.34c0 0 13.81-4.4 14.25-.81s-15.53 7.87-15.53 7.87 15.05-3.41 14.08 1.79-12.75 6.44-12.75 6.44 12.25-2.95 9.66.79-17.73 5.59-21 5-9.92-10.5-6.33-20.62Z"
        fill="#fff"
      />
      <path
        d="M300.85 139.18a11.59 11.59 0 0 1-1.77-.11c-1.5-.26-3.38-2-4.91-4.64-1.12-1.91-4.56-8.76-1.77-16.66 0-.14.06-.77.09-1.38.19-4.18.65-14 5.42-15.43a3.08 3.08 0 0 1 2.83.43c2.75 2 3.35 8.67 3.48 10.91 5.32-2.29 19.51-8.06 21.29-5.45a2.07 2.07 0 0 1 .18 2c-.7 1.92-3.73 4.29-7.71 6.28 2.62-.44 5.2-.57 6.42.21a1.73 1.73 0 0 1 .83 1.28c.29 2.39-4.89 4.78-9.5 6.42 3-.23 6.07-.1 7.4 1.18a2.31 2.31 0 0 1 .65 2.21c-.41 2.21-2.53 3.74-5 4.78a2.71 2.71 0 0 1 2 .8c.23.34.38.94-.25 1.84-2.36 3.49-14.4 5.33-19.68 5.33ZM299 101.79a2.55 2.55 0 0 0-.75.12c-4.1 1.25-4.55 10.89-4.71 14.52a7.62 7.62 0 0 1-.15 1.66c-2.66 7.5.62 14 1.69 15.83 1.55 2.65 3.24 4 4.22 4.17 3.15.53 18.06-1.27 20.54-4.83.22-.33.32-.6.24-.71-.35-.51-2.31-.5-4.72-.18a35.67 35.67 0 0 1-4.72.88.49.49 0 0 1-.54-.41.5.5 0 0 1 .37-.57c.94-.22 2.82-.64 4.75-.9 3.26-.85 7.13-2.43 7.63-5.14a1.34 1.34 0 0 0-.36-1.32c-2-1.9-10.14-.57-13.12.1a.49.49 0 0 1-.59-.36.49.49 0 0 1 .35-.6c6.46-1.73 15.43-5.15 15.16-7.33a.78.78 0 0 0-.37-.56c-1.82-1.16-8.25.33-11.84 1.36l-1.4.43a.5.5 0 0 1-.29-1l1.48-.44c6.84-2.2 12.12-5.83 12.93-8.06a1.13 1.13 0 0 0-.06-1.08c-.95-1.39-11.51 2.08-20.74 6.09a.5.5 0 0 1-.7-.44c0-.09-.24-8.8-3.1-10.86a2 2 0 0 0-1.2-.37Zm-6.07 16.14Zm0 0Zm-48.84 12.84s-13.84 3.08-21.84-1.38l-2.82 8s17.18 5.35 26 1.27Z"
        fill="#231f20"
      />
      <path
        d="M236.72 140.73a67.29 67.29 0 0 1-17.44-2.84.51.51 0 0 1-.29-.25.53.53 0 0 1 0-.39l2.82-8a.48.48 0 0 1 .29-.3.51.51 0 0 1 .42 0c7.74 4.31 21.36 1.35 21.49 1.32a.52.52 0 0 1 .39.07.52.52 0 0 1 .21.33l1.39 7.93a.51.51 0 0 1-.28.54 21.88 21.88 0 0 1-9 1.59Zm-16.64-3.64c2.82.81 17 4.6 24.84 1.3l-1.23-7c-2.56.51-13.84 2.44-21.16-1.25Zm-10.64-11.36s-23.65-8.42-29.28-13.09l-5.07 9s24.63 11 32.1 11.45Z"
        fill="#231f20"
      />
      <path
        d="M207.19 133.55c-7.47-.42-31.27-11-32.28-11.49a.57.57 0 0 1-.27-.3.51.51 0 0 1 0-.4l5.07-9a.51.51 0 0 1 .34-.25.5.5 0 0 1 .41.11c5.51 4.56 28.9 12.92 29.13 13a.48.48 0 0 1 .31.61l-2.25 7.32a.49.49 0 0 1-.46.4Zm-31.4-12.18c3.47 1.53 23.94 10.47 31 11.16l2-6.49c-3.29-1.19-22.61-8.24-28.52-12.65Zm-21.16 125.75a.52.52 0 0 1-.44-.26.51.51 0 0 1 .19-.68c.1-.05 10.13-5.62 18.45 0a.5.5 0 0 1 .14.69.52.52 0 0 1-.7.13c-7.82-5.31-17.3 0-17.4 0a.51.51 0 0 1-.24.12Zm47.2-5.45a.5.5 0 0 1-.33-.13.5.5 0 0 1 0-.7c7.34-8.18 26.56-13.26 27.37-13.48a.51.51 0 0 1 .61.36.5.5 0 0 1-.36.61c-.19 0-19.74 5.22-26.87 13.18a.51.51 0 0 1-.42.16Zm-3.65 19.96s-3.67-9 5.63-15 34.88-19.75 39.82-17.25c4.16 2.11 5 6.62 3.61 10.83a23.39 23.39 0 0 1-7.58 10.29c-6.65 5.45-15.27 9.45-23.44 12-3.73 1.13-15.75 4.79-18.04-.87Z"
        fill="#231f20"
      />
      <path
        d="M204.63 265.19c-3.69 0-6-1.13-6.92-3.37-.15-.39-3.66-9.49 5.83-15.62 9-5.82 35-19.95 40.32-17.27 4 2 5.52 6.52 3.86 11.42a23.94 23.94 0 0 1-7.72 10.52c-6 4.93-14.39 9.22-23.6 12.08a41.92 41.92 0 0 1-11.77 2.24Zm-6-3.74c1 2.41 4.8 4.47 17.43.55 9.1-2.83 17.36-7.05 23.27-11.9a22.89 22.89 0 0 0 7.44-10.1c1.5-4.42.18-8.42-3.36-10.22-4.34-2.2-28.27 10.06-39.33 17.22-8.8 5.72-5.59 14.08-5.44 14.45Z"
        fill="#231f20"
      />
      <path
        d="M202.29 66.37s6.76-7.82 7.15-6.86S249.53 71 250.29 70.37s3.92 8.4 3.92 8.4-28.59 13.44-51.92-12.4Z"
        fill="#fff"
      />
      <path
        d="M236.42 82.7c-10.12 0-23-3.25-34.5-16a.49.49 0 0 1 0-.65c4.2-4.86 6.73-7.25 7.51-7.11a.61.61 0 0 1 .41.25c2.16 1.32 37.44 10.71 40.23 10.71a.64.64 0 0 1 .45 0c1 .27 2.79 4.9 4.12 8.74a.49.49 0 0 1-.25.62 46.93 46.93 0 0 1-17.97 3.44ZM203 66.36C224.19 89.54 250 80 253.58 78.5c-1.17-3.33-2.66-7-3.26-7.63-.54.06-2.16-.18-8.32-1.68-.31-.07-29.37-7.35-32.72-9.25-.78.36-3.72 3.43-6.28 6.42Zm6-6.66a.38.38 0 0 0 .24.21.65.65 0 0 1-.24-.21Zm-39.42 42.09a.5.5 0 0 1-.35-.85c4.72-4.64 7-9.7 6.71-15a15.26 15.26 0 0 0-1.84-6.65.5.5 0 0 1 .85-.53c.07.11 6.8 11.29-5 22.92a.46.46 0 0 1-.37.11Z"
        fill="#231f20"
      />
      <path d="M176 67.17s-6.86-1.41-10.8 6.19" fill="#fff" />
      <path
        d="M165.23 73.86a.68.68 0 0 1-.23 0 .5.5 0 0 1-.21-.67c4.07-7.85 11.26-6.47 11.34-6.46a.5.5 0 0 1-.2 1c-.27-.06-6.54-1.23-10.26 5.93a.49.49 0 0 1-.44.2Z"
        fill="#231f20"
      />
      <path d="M303.75 113.05s4.23 5.11-3.09 11.84" fill="#fff" />
      <path
        d="M300.66 125.39a.5.5 0 0 1-.36-.16.5.5 0 0 1 0-.71c6.89-6.33 3.08-11.11 3-11.16a.49.49 0 1 1 .76-.63c.05 0 4.45 5.56-3.13 12.53a.55.55 0 0 1-.27.13Zm-75.23 2.1-17.63-4.64-4.08 10.84 17.59 5.63 4.12-11.83z"
        fill="#231f20"
      />
      <path
        d="M221.32 139.82a.45.45 0 0 1-.16 0l-17.59-5.63a.5.5 0 0 1-.32-.65l4.08-10.84a.5.5 0 0 1 .6-.3l17.63 4.6a.49.49 0 0 1 .31.24.56.56 0 0 1 0 .4l-4.11 11.83a.51.51 0 0 1-.44.35Zm-16.95-6.45L221 138.7l3.78-10.87-16.67-4.39Z"
        fill="#231f20"
      />
      <path d="M200.62 156.84s6.57 8.28 17.08 4.63" fill="#fff" />
      <path
        d="M212.45 162.89a16.82 16.82 0 0 1-12.22-5.74.49.49 0 0 1 .08-.7.49.49 0 0 1 .69.08 15 15 0 0 0 16.53 4.47.51.51 0 0 1 .64.31.5.5 0 0 1-.31.63 16.52 16.52 0 0 1-5.41.95Z"
        fill="#231f20"
      />
      <path
        d="M169.09 198.7a19.68 19.68 0 0 1-9.49-2.14 12.17 12.17 0 0 1-5.43-5.31.5.5 0 0 1 .92-.39c.2.46 5.23 11.32 25.69 4.79a.5.5 0 1 1 .3.95 39.71 39.71 0 0 1-11.99 2.1ZM248 185.92a.46.46 0 0 1-.33-.13c-15-13.61-29.05-2.7-29.64-2.23a.5.5 0 0 1-.63-.78c.16-.12 15.29-11.93 30.94 2.27a.5.5 0 0 1 0 .71.49.49 0 0 1-.34.16Z"
        fill="#d1d3d4"
      />
      <path d="M279.64 107.71s-8.1-2.25-12.76 8.26" fill="#fff" />
      <path
        d="M266.88 116.47a.52.52 0 0 1-.21 0 .5.5 0 0 1-.25-.66c4.79-10.78 13.27-8.56 13.35-8.54a.51.51 0 0 1 .35.62.5.5 0 0 1-.61.34c-.32-.08-7.75-2-12.18 8a.49.49 0 0 1-.45.24Z"
        fill="#231f20"
      />
      <path d="M176 106.49s13.7-4.35 19.33-7.19" fill="#fff" />
      <path
        d="M176 107a.5.5 0 0 1-.15-1c.13 0 13.72-4.36 19.25-7.16a.5.5 0 0 1 .67.22.49.49 0 0 1-.22.67c-5.6 2.83-18.84 7.05-19.4 7.22a.4.4 0 0 1-.15.05Z"
        fill="#231f20"
      />
      <path fill="#fff" d="m245.48 124.89 8.73-29.75" />
      <path
        d="M245.48 125.39h-.14a.5.5 0 0 1-.34-.62L253.73 95a.5.5 0 1 1 1 .28L246 125a.51.51 0 0 1-.52.39Z"
        fill="#231f20"
      />
      <path
        d="M262.12 54.58q-.08.62-.18 1.2a12.9 12.9 0 0 1-2.28 5.6c-1.16 1.5-3.57 3.48-5.65 3-1.79-.39-2.18-2.55-2.56-4.06a19.49 19.49 0 0 1 3.26-15.76c1.82-2.54 4.51-3.18 6.09 0 1.42 2.8 1.7 6.76 1.32 10.02Z"
        fill="#fff"
      />
      <path
        d="M254.64 65a3.16 3.16 0 0 1-.74-.08c-2-.42-2.46-2.52-2.84-4.06l-.09-.36a19.88 19.88 0 0 1 3.33-16.2c1.15-1.6 2.58-2.46 4-2.36.85.07 2.05.53 3 2.39a19 19 0 0 1 1.36 10.31q-.08.63-.18 1.23a13.27 13.27 0 0 1-2.38 5.81c-.98 1.22-3.19 3.32-5.46 3.32Zm3.4-22a4 4 0 0 0-2.92 2 18.89 18.89 0 0 0-3.19 15.35l.1.37c.34 1.42.74 3 2.09 3.32 1.85.4 4.13-1.53 5.14-2.84a12.35 12.35 0 0 0 2.19-5.39q.1-.57.18-1.17a18.13 18.13 0 0 0-1.27-9.74 2.86 2.86 0 0 0-2.18-1.84Zm4.08 11.65Z"
        fill="#231f20"
      />
      <path
        d="M257.59 60.85A26.15 26.15 0 1 1 259.7 47a26 26 0 0 1-2.11 13.85Z"
        fill="#fff"
      />
      <path
        d="M233.78 76.75a26.59 26.59 0 0 1-18.17-46 26.59 26.59 0 0 1 43.6 11.52 28.17 28.17 0 0 1 1 4.64A26.63 26.63 0 0 1 237 76.55a27.52 27.52 0 0 1-3.22.2Zm.05-52.19a25.59 25.59 0 0 0-17.54 6.94 25.69 25.69 0 0 0-7.73 14.44 25.59 25.59 0 0 0 48.58 14.71 25.43 25.43 0 0 0 2.07-13.6 27.13 27.13 0 0 0-.95-4.47 25.59 25.59 0 0 0-24.43-18.02Z"
        fill="#231f20"
      />
      <path
        d="M227.14 56.64 223.57 66s1 6.76 7.44 7.09a13 13 0 0 0 10.21-4.43l5.22-17.41s-3.69-3.79.63-13.31c0 0-9.3 1.2-17.83-2.67 0 0-4.37 10.09-5.1 15.09s3 6.28 3 6.28Z"
        fill="#fff"
      />
      <path
        d="M231.66 73.61H231c-6.78-.35-7.91-7.46-7.92-7.53a.46.46 0 0 1 0-.26l3.41-8.91c-1.07-.59-3.48-2.4-2.86-6.63.73-5 5-14.8 5.14-15.22a.51.51 0 0 1 .28-.28.51.51 0 0 1 .4 0c8.31 3.77 17.46 2.64 17.55 2.62a.55.55 0 0 1 .49.21.51.51 0 0 1 0 .52c-4.1 9-.76 12.71-.73 12.74a.51.51 0 0 1 .12.51l-5.17 17.42a.56.56 0 0 1-.09.17 13.4 13.4 0 0 1-9.96 4.64Zm-7.56-7.56c.17.92 1.41 6.23 6.93 6.52a12.52 12.52 0 0 0 9.72-4.17l5.12-17c-.74-1-3-4.86.38-12.83a37.3 37.3 0 0 1-16.74-2.59c-.87 2.06-4.24 10.23-4.86 14.48-.66 4.49 2.53 5.69 2.66 5.73a.55.55 0 0 1 .3.28.5.5 0 0 1 0 .4Z"
        fill="#231f20"
      />
      <path d="M236 43.66s-4.44 4.56-3.81 5.62 3 .9 3 .9" fill="#fff" />
      <path
        d="M234.8 50.69c-.79 0-2.47-.12-3.08-1.16-.71-1.21 2.14-4.41 3.9-6.22a.49.49 0 0 1 .7 0 .5.5 0 0 1 0 .71c-2.1 2.16-3.85 4.51-3.73 5 .34.58 1.84.68 2.53.64a.49.49 0 0 1 .53.46.5.5 0 0 1-.47.53Zm-.14 4.53a5 5 0 0 1-1.23-.14 7.74 7.74 0 0 1-4.53-3.6.48.48 0 0 1 .19-.67.49.49 0 0 1 .68.19 6.86 6.86 0 0 0 3.89 3.11 5.73 5.73 0 0 0 4.63-1.23.5.5 0 0 1 .7.12.49.49 0 0 1-.12.69 7.27 7.27 0 0 1-4.21 1.53Z"
        fill="#231f20"
      />
      <ellipse
        cx={240.15}
        cy={43.62}
        rx={1.45}
        ry={0.61}
        transform="rotate(-77.21 240.154 43.621)"
        fill="#231f20"
      />
      <ellipse
        cx={232.3}
        cy={41.3}
        rx={1.45}
        ry={0.61}
        transform="rotate(-77.21 232.305 41.302)"
        fill="#231f20"
      />
      <path d="M248.75 44.89c.26-3.35.13-6.94-2.3-9.54-3.18-3.35-10.45-6.42-14.86-3.73a8.63 8.63 0 0 0-1.44 1.11 16.27 16.27 0 0 0-2 2.38 31.24 31.24 0 0 0-4.73 10.14c-1.06 4-2.31 8.45-.41 12.48a10.44 10.44 0 0 0 6.07 5.1c1.2.45 2.44.52 3.62.91a25.11 25.11 0 0 0 4.9 1.61c2.12.29 3.77.23 5.24-1.56a11.23 11.23 0 0 0 1.78-3.54c1.72-5.08 3.71-9.94 4.13-15.36Zm-23.87 5.9a13.59 13.59 0 0 1 1.33-5.69l2.16-5.48a4.83 4.83 0 0 1 1-1.79c1.07-1 2.52-.22 3.73.08a38.7 38.7 0 0 1 6.2 2c1.07.47 3.11 1.18 3.56 2.41 1 2.57-.44 5.59-1.09 8.07a17 17 0 0 1-4.56 8.07c-2 1.85-5.31.78-7.33-.43a11 11 0 0 1-4.46-4.88 7.39 7.39 0 0 1-.54-2.36Z" />
      <path
        d="M257.59 60.85a26.08 26.08 0 0 1-49.52-15c1.5 3.51 10.81 14.83 27.08 17.93 11.45 2.22 16.53-.72 22.44-2.93Z"
        fill="#fff"
      />
      <path
        d="M233.75 76.75a26.58 26.58 0 0 1-26.17-31 .5.5 0 0 1 .95-.11c1.56 3.64 10.78 14.59 26.72 17.63 9.95 1.89 14.86 0 20.07-2.1.7-.28 1.39-.55 2.1-.81a.47.47 0 0 1 .53.12.49.49 0 0 1 .09.55 26.37 26.37 0 0 1-21 15.49 27.89 27.89 0 0 1-3.29.23Zm-25.4-29.31a25.19 25.19 0 0 0 .05 5.82 25.63 25.63 0 0 0 28.51 22.3 25.35 25.35 0 0 0 19.69-13.8l-.91.36c-5.11 2-10.4 4.11-20.63 2.16-14.66-2.8-23.82-12.22-26.71-16.84Z"
        fill="#231f20"
      />
      <path
        d="M258.73 42.43c-4.73-3.92-11.55-8.55-18.65-9.92A87.42 87.42 0 0 0 216 31.13a26.09 26.09 0 0 1 42.78 11.3Z"
        fill="#fff"
      />
      <path
        d="M258.73 42.93a.56.56 0 0 1-.32-.11c-4.49-3.73-11.33-8.45-18.41-9.82a86.54 86.54 0 0 0-24-1.37.51.51 0 0 1-.5-.29.5.5 0 0 1 .11-.57 26.59 26.59 0 0 1 43.6 11.52.51.51 0 0 1-.2.56.57.57 0 0 1-.28.08ZM223 30.33A91.64 91.64 0 0 1 240.17 32c6.62 1.28 13 5.36 17.52 8.93a25.57 25.57 0 0 0-27-16.2 25.3 25.3 0 0 0-13.31 5.77c1.84-.11 3.7-.17 5.62-.17Z"
        fill="#231f20"
      />
      <path
        d="M214.28 41.5c.35-1 .65-2.08.9-3.14.36-1.56 1.55-5.23.37-6.63-.81-1-1.86-.53-2.63.28-3.5 3.69-5.07 8.38-6.11 13.26-.26 1.18-.71 4.41.91 4.93 1.95.64 4.11-3.14 4.78-4.45a32.32 32.32 0 0 0 1.78-4.25Z"
        fill="#fff"
      />
      <path
        d="M208.18 50.78a1.81 1.81 0 0 1-.61-.1c-2.11-.68-1.49-4.39-1.25-5.51 1-4.43 2.43-9.49 6.24-13.5a2.76 2.76 0 0 1 2-1 1.91 1.91 0 0 1 1.39.73c1.18 1.4.42 4.35-.08 6.31-.07.28-.14.53-.19.75a32.19 32.19 0 0 1-.91 3.19 32.69 32.69 0 0 1-1.83 4.35c-.77 1.49-2.68 4.78-4.76 4.78Zm6.3-19.1a1.85 1.85 0 0 0-1.2.67c-3.64 3.84-5.07 8.74-6 13-.4 1.88-.39 4.05.58 4.36 1.22.4 3-1.83 4.18-4.21a32.09 32.09 0 0 0 1.76-4.18 29.67 29.67 0 0 0 .88-3.1c.06-.22.12-.48.2-.77.39-1.54 1.13-4.41.28-5.42a.89.89 0 0 0-.67-.37Z"
        fill="#231f20"
      />
      <path
        d="M203.72 110.06s-13.45 26.22-26.1 28.63-19.24-6.58-15.11-11.83 11.67-5.32 11.64-5.32.94-.13.94-1.66v-2.28s-13.24 1.1-16.79 8.42c-3.68 7.58 3.42 16.74 14.72 16.75 22 0 34.69-31.6 34.69-31.6"
        fill="#161D6F"
      />
      <path
        fill="#fff"
        d="m207.63 84.28-7.43 26.07 36.27 10.12 7.7-27.29-36.54-8.9z"
      />
      <path
        d="M236.47 121h-.13l-36.27-10.12a.47.47 0 0 1-.3-.23.51.51 0 0 1-.05-.38l7.44-26.08a.49.49 0 0 1 .59-.35l36.54 8.9a.53.53 0 0 1 .31.24.46.46 0 0 1 .05.38L237 120.6a.49.49 0 0 1-.53.4Zm-35.65-11 35.31 9.84 7.42-26.31L208 84.87Z"
        fill="#231f20"
      />
      <circle cx={215.29} cy={97.65} r={6.37} fill="#161D6F" />
      <circle cx={234.25} cy={100.83} r={3.19} fill="#161D6F" />
      <path
        d="M232.46 114.41h-.14l-17.16-4.64a.51.51 0 0 1-.35-.62.5.5 0 0 1 .61-.35l17.17 4.65a.5.5 0 0 1-.13 1Z"
        fill="#d1d3d4"
      />
      <path
        d="M254.21 128.17s2.45-.75 2.4 1.22-3.81 16.05-3.81 16.05H248Zm-55.82-90.7s.6-2.68 1.81-2.68 7.51 1.34 7.51 1.34l-1.16 3.59Z"
        fill="#161D6F"
      />
      <path
        d="M223 138.87a.4.4 0 0 1-.15 0 .49.49 0 0 1-.33-.62l2.46-7.66a.49.49 0 0 1 .62-.32.5.5 0 0 1 .32.63l-2.45 7.65a.5.5 0 0 1-.47.32Zm-19.63-6.53a.46.46 0 0 1-.19 0 .5.5 0 0 1-.27-.65l3-7.24a.51.51 0 0 1 .65-.27.49.49 0 0 1 .27.65l-3 7.24a.5.5 0 0 1-.46.27Z"
        fill="#fff"
      />
      <circle cx={88.58} cy={145.44} r={35.99} fill="#fff" />
      <path
        d="M88.6 181.94a36.49 36.49 0 0 1-10.66-71.4 36.5 36.5 0 0 1 45.55 24.26 36.5 36.5 0 0 1-34.89 47.14Zm0-72a35.5 35.5 0 1 0 10.3 69.46 35.48 35.48 0 0 0 23.6-44.3 35.56 35.56 0 0 0-33.9-25.16Z"
        fill="#d1d3d4"
      />
      <path
        d="M56.22 169.56c-11.92 0-19.48-2.78-21-7.84-1.76-5.75 4.58-13.38 17.38-20.95a.5.5 0 0 1 .51.87c-12.19 7.2-18.52 14.6-16.94 19.79s11 7.8 25.1 7a142.88 142.88 0 0 0 32.45-6.2 142.8 142.8 0 0 0 30.38-13c12.18-7.2 18.51-14.6 16.93-19.79s-11-7.8-25.1-7a.48.48 0 0 1-.52-.47.5.5 0 0 1 .47-.53c14.84-.86 24.35 1.94 26.11 7.69s-4.59 13.38-17.38 20.94a143.33 143.33 0 0 1-30.6 13 143.74 143.74 0 0 1-32.68 6.25c-1.79.19-3.49.24-5.11.24Zm7.85-43.37a.51.51 0 0 1-.31-.11.5.5 0 0 1-.08-.7 17.76 17.76 0 0 1 3.56-3.38.51.51 0 0 1 .7.11.5.5 0 0 1-.12.7 17.14 17.14 0 0 0-3.36 3.19.49.49 0 0 1-.39.19Zm.06 8.03h-.12a.5.5 0 0 1-.36-.61 11.26 11.26 0 0 1 1.89-3.89.52.52 0 0 1 .71-.1.5.5 0 0 1 .09.7 10.22 10.22 0 0 0-1.72 3.54.5.5 0 0 1-.49.36Zm-5.68 4.16a.44.44 0 0 1-.16 0 .51.51 0 0 1-.31-.64l.9-2.64a.5.5 0 0 1 .95.33l-.9 2.64a.52.52 0 0 1-.48.31Z"
        fill="#d1d3d4"
      />
      <circle cx={314.82} cy={203.96} r={26.75} fill="#fff" />
      <path
        d="M314.82 231.21A27.25 27.25 0 1 1 342.06 204a27.28 27.28 0 0 1-27.24 27.21Zm0-53.5A26.25 26.25 0 1 0 341.06 204a26.28 26.28 0 0 0-26.24-26.29Z"
        fill="#d1d3d4"
      />
      <path
        d="M336.71 204.12a.53.53 0 0 1-.24-.06.5.5 0 0 1-.2-.68 4.68 4.68 0 0 0 .34-3.5.5.5 0 1 1 1-.3 5.64 5.64 0 0 1-.42 4.28.51.51 0 0 1-.48.26Zm-.31 6.98h-.16a.49.49 0 0 1-.31-.63 11.28 11.28 0 0 0 .58-3.05.49.49 0 0 1 .53-.47.49.49 0 0 1 .47.52 12.5 12.5 0 0 1-.63 3.32.5.5 0 0 1-.48.31Zm-5.4 2.82a.48.48 0 0 1-.26-.07.5.5 0 0 1-.17-.68 19.54 19.54 0 0 0 1.52-3.16.49.49 0 0 1 .64-.29.5.5 0 0 1 .3.64 20.29 20.29 0 0 1-1.6 3.32.49.49 0 0 1-.43.24ZM107.61 79l1.69 6.75 6.76 1.69-6.76 1.7-1.69 6.75-1.7-6.75-6.75-1.7 6.75-1.69 1.7-6.75zm167.71 142.18 1.34 5.33 5.33 1.34-5.33 1.33-1.34 5.33-1.33-5.33-5.33-1.33 5.33-1.34 1.33-5.33zm26.32-154.11.66 2.66 2.67.67-2.67.67-.66 2.66-.67-2.66-2.67-.67 2.67-.67.67-2.66zM78.91 203.44l.66 2.67 2.67.67-2.67.66-.66 2.67-.67-2.67-2.67-.66 2.67-.67.67-2.67zM67.53 60.06l.67 2.67 2.66.67-2.66.66-.67 2.67-.67-2.67-2.66-.66 2.66-.67.67-2.67zm67.5 6.82.78 3.12 3.11.78-3.11.78-.78 3.12-.79-3.12-3.11-.78 3.11-.78.79-3.12zm150.85 95.52.79 3.11 3.11.79-3.11.78-.79 3.11-.78-3.11-3.11-.78 3.11-.79.78-3.11z"
        fill="#d1d3d4"
      />
      <circle cx={116.06} cy={219.06} r={11.65} fill="#fff" />
      <path
        d="M116.06 231.21a12.15 12.15 0 1 1 12.14-12.15 12.16 12.16 0 0 1-12.14 12.15Zm0-23.29a11.15 11.15 0 1 0 11.14 11.14 11.16 11.16 0 0 0-11.14-11.14Z"
        fill="#d1d3d4"
      />
    </g>
  </svg>
);