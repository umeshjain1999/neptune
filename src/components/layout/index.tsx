import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import { ReactNode } from "react"
import { theme } from "src/styles/globalStyles"
import Sidebar from "./Sidebar"
interface LayoutProps {
  children?: ReactNode | string,
}

const sidebarWidth = '70px'
const topbarHeight = '50px'

const LayoutSection = styled.section`
`
const LayoutContentWrrapper = styled.div`
position: relative;
margin-left: ${sidebarWidth};
height: 100vh;
display: flex;
flex-direction: column;
`
const LayoutTopbar = styled.header`
position: fixed;
z-index: 9998;
right: 0;
left: ${sidebarWidth};
height: ${topbarHeight};
color: ${props => props.theme.colors.neutral[50]};
background-color: ${props => props.theme.colors.neutral[50]};
padding: 0.5rem;
box-shadow: ${props => props.theme.boxShadow[0]};
display: flex;
align-items: center;
justify-content: flex - end;
`
const LayoutContent = styled.div`
margin-top: ${topbarHeight};
`

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutSection>
        <Sidebar sidebarWidth={sidebarWidth} />
        <LayoutContentWrrapper>
          <LayoutTopbar>Profile</LayoutTopbar>
          <LayoutContent>
            {children}
          </LayoutContent>
        </LayoutContentWrrapper>
      </LayoutSection>
    </ThemeProvider>
  )
}

export default Layout