import styled from 'styled-components'

export const ProfileContainer = styled.div`
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.profile};
  overflow: hidden;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem 2rem;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    text-align: initial;
    flex-direction: row;
    align-items: initial;
  }
`

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 9.25rem;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Bio = styled.div``

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0 1rem;
  margin-bottom: 0.5rem;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: row;
  }
`

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    -webkit-line-clamp: 1;
  }
`

export const Text = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    -webkit-line-clamp: 2;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  margin-top: 1.5rem;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    justify-content: initial;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    flex-shrink: 0;
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme }) => theme.colors.label};
  }

  span {
    color: ${({ theme }) => theme.colors.subtitle};
    white-space: nowrap;
  }
`
