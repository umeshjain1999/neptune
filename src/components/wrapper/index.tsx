import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { theme } from 'src/styles/globalStyles'
import { WrapperProps } from './types'

const WrapperStyle = styled.div`
  padding:1rem;
  background-color:${props => props.theme.colors.neutral[50]};
border-radius: 0.5rem;
color: ${props => props.theme.colors.black};
margin: 1rem;
box-shadow: ${props => props.theme.boxShadow[0]};
`
const Wrapper = ({ children }: WrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <WrapperStyle>{children}</WrapperStyle>
    </ThemeProvider>
  )
}

export default Wrapper