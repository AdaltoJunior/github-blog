import { StyledHeader } from './styles'
import logoImg from '../../assets/logo.png'

export function Header() {
  return (
    <StyledHeader>
      <a href="/">
        <img src={logoImg} alt="Github Blog" />
      </a>
    </StyledHeader>
  )
}
