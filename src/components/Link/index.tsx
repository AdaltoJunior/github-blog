import { ReactNode } from 'react'
import { LinkProps as RouterLinkProps } from 'react-router-dom'
import { LinkContainer } from './styles'

interface LinkProps extends RouterLinkProps {
  children: ReactNode
}

export function Link({ children, ...props }: LinkProps) {
  return <LinkContainer {...props}>{children}</LinkContainer>
}
