import styled from 'styled-components'

export const Container = styled.div`
  svg {
    width: 1.875rem;
    height: 1.875rem;
    animation: spin 1s linear infinite;
    color: ${({ theme }) => theme.colors.accent};
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
