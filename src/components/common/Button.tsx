/* libs */
import styled from '@emotion/styled'
import { Icon } from "src/components"
import Link from "next/link"
import React, { ReactNode } from "react"

/* type starts */
interface BaseProps {
  isIconOnLeft?: boolean
  icon?: string
  children: ReactNode
  disabled?: boolean
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button'
    type?: "submit" | "reset" | "button"
  }
type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as?: 'link'
    href: string
  }

type ButtonProps = | ButtonAsButton | ButtonAsLink
/* type ends */

const Button = (props: ButtonProps) => {

  const ButtonStyle = styled.button`
    font-size: 1rem;
    font-weight: 500;
    border-radius: 0.5rem;
    padding: .3rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:0.25rem;
    box-shadow: ${props => props.theme.boxShadow[0]};
    color: ${props => props.theme.colors.neutral[50]};
    transition: ${props => props.theme.transition[0]};
    /* disabled logic */
    background-color: ${props.disabled ? props => props.theme.colors.primary[300] : props => props.theme.colors.primary[600]};
    pointer-events: ${props.disabled ? 'none' : 'normal'};
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
    &:hover,&:focus,&:focus-within{
      background-color: ${props => props.theme.colors.primary[700]};
    }
  `
  const ButtonLinkStyle = styled.a`
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  padding: .3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  box-shadow: ${props => props.theme.boxShadow[0]};
  color: ${props => props.theme.colors.neutral[50]};
  transition: ${props => props.theme.transition[0]};
  /* disabled logic */
  background-color: ${props.disabled ? props => props.theme.colors.primary[300] : props => props.theme.colors.primary[600]};
  pointer-events: ${props.disabled ? 'none' : 'normal'};
  cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
      &:hover,&:focus,&:focus-within{
    background-color: ${props => props.theme.colors.primary[700]};
  }
  `

  if (props.as === 'link') {
    const { href = '/', isIconOnLeft = false, icon, children, as, ...rest } = props as ButtonAsLink
    return (
      <Link href={href}>
        <ButtonLinkStyle {...rest}>
          {icon && isIconOnLeft && <Icon icon={icon} w='23px' h='23px' />}
          <span>{children}</span>
          {icon && !isIconOnLeft && <Icon icon={icon} w='23px' h='23px' />}
        </ButtonLinkStyle>
      </Link>
    )
  } else {
    const { isIconOnLeft = false, icon, children, as, ...rest } = props as ButtonAsButton
    return (
      <ButtonStyle {...rest}>
        {icon && isIconOnLeft && <Icon icon={icon} w='23px' h='23px' />}
        <span>{children}</span>
        {icon && !isIconOnLeft && <Icon icon={icon} w='23px' h='23px' />}
      </ButtonStyle>
    )
  }

}

export default Button