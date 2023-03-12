import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { api } from '../../services/api'

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

interface UserDTO {
  avatar_url: string
  bio: string
  followers: number
  login: string
  name: string
  html_url: string
}

export function Profile() {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  async function fetchUser() {
    try {
      const response = await api.get('/users/AdaltoJunior')
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <ProfileContainer>
      <Avatar>
        <img src={user.avatar_url} alt={`Imagem de perfil de ${user.name}`} />
      </Avatar>
      <Bio>
        <Header>
          <Heading>{user.name}</Heading>
          <Link to={user.html_url} target="blank">
            <span>Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </Header>
        <Text>{user.bio}</Text>
        <InfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user.followers} seguidores</span>
          </Info>
        </InfoContainer>
      </Bio>
    </ProfileContainer>
  )
}
