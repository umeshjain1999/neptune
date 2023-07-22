/* libs */
import Link from 'next/link'
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
/* components */
import { Icon, Logo } from 'src/components'
/* styles */
import { animationWobble } from 'src/styles/animation';

const Sidebar = ({ sidebarWidth }: { sidebarWidth: string }) => {
  const { pathname } = useRouter()
  const sidebarArr = [
    {
      title: 'contacts',
      icon: 'contact',
      link: '/contacts',
    },
    {
      title: 'companies',
      icon: 'building',
      link: '/companies',
    },
    {
      title: 'deals',
      icon: 'money',
      link: '/deals',
    },
  ]
  const LayoutSidebar = styled.nav`
    position: fixed;
    top: 0;
    z-index: 9999;
    min-height: 100vh;
    width: ${sidebarWidth};
    background-color: ${props => props.theme.colors.primary[700]};
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    a:not(:first-of-type) {
      display: inline-block;
      width: 100%;
      height: 100%;
      padding: .5rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${props => props.theme.colors.neutral[50]};
      transition: ${props => props.theme.transition[0]};
      &:hover{
        background-color: rgba(0, 0, 0, 0.3);
        color: ${props => props.theme.colors.secondary[100]};
        svg {
          ${animationWobble()}
        }
      }
    }
    a.active{
      background-color: rgba(0, 0, 0, 0.3);
      color: ${props => props.theme.colors.secondary[100]};
    }
`
  return (
    <LayoutSidebar>
      <Logo />
      {sidebarArr && sidebarArr.map((data, index) => {
        return (
          <Link href={data?.link} key={index}>
            <a
              title={data?.title}
              className={`${pathname === data?.link ? 'active' : ''} `}>
              <Icon icon={data?.icon} />
            </a>
          </Link>
        )
      })}
    </LayoutSidebar >
  )
}

export default Sidebar