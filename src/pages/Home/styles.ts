import styled from 'styled-components'
import { Container } from '../../components/Container'

export const HomeContainer = styled(Container).attrs({
  as: 'main',
})`
  margin-top: -5.5rem;
  padding-bottom: 5rem;
`

export const SearchContainer = styled.div`
  margin-top: 4.5rem;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.input};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.label};
    }

    &:focus {
      outline: 0;
      border-color: ${({ theme }) => theme.colors.accent};
    }
  }
`

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
`

export const SearchHeading = styled.h2`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
`

export const SearchCounter = styled.span`
  color: ${({ theme }) => theme.colors.span};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

export const PostContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
