import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.article`
  padding: 2rem;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.post};
  position: relative;

  transition: border-color 0.15s;

  &:hover,
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.label};
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0 1rem;
  margin-bottom: 1.25rem;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export const Time = styled.time`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.span};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding-top: 0.25rem;
`

export const Content = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Link = styled(RouterLink)`
  position: absolute;
  inset: 0;
  opacity: 0;
`
