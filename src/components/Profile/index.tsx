import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { Link } from '../Link'

import {
  ProfileContainer,
  Avatar,
  Bio,
  Header,
  InfoContainer,
  Info,
  Heading,
  Text,
} from './styles'

import avatarImg from '../../assets/avatar.png'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar>
        <img src={avatarImg} alt="Imagem de perfil de Cameron Williamson" />
      </Avatar>
      <Bio>
        <Header>
          <Heading>Cameron Williamson</Heading>
          <Link to="/">
            <span>Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </Header>
        <Text>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Text>
        <InfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </Info>
        </InfoContainer>
      </Bio>
    </ProfileContainer>
  )
}
