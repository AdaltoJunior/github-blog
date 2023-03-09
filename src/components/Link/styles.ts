import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const LinkContainer = styled(RouterLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  text-transform: uppercase;

  padding: 0.25rem 0;
  border-bottom: 1px solid transparent;

  transition: border-color 0.15s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  span {
    line-height: 1;
  }

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`
