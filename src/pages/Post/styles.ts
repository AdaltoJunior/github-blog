import styled from 'styled-components'
import { Container } from '../../components/Container'

export const PostContainer = styled(Container).attrs({
  as: 'main',
})`
  margin-top: -5.5rem;
`

export const PostInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.profile};
  padding: 2rem;
  border-radius: 10px;
`

export const PostInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
`

export const PostInfoHeading = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 2rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme }) => theme.colors.label};
  }

  span {
    color: ${({ theme }) => theme.colors.span};
    white-space: nowrap;
  }
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
`
