import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { Link } from '../../components/Link'

import {
  Info,
  InfoContainer,
  PostContainer,
  PostContent,
  PostInfo,
  PostInfoHeader,
  PostInfoHeading,
} from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostInfo>
        <PostInfoHeader>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </Link>
          <Link to="/">
            <span>Ver no Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </PostInfoHeader>
        <PostInfoHeading>
          JavaScript data types and data structures
        </PostInfoHeading>
        <InfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faCalendar} />
            <span>Há 1 dia</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </Info>
        </InfoContainer>
      </PostInfo>

      <PostContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, in
        earum. Porro magnam voluptate vel, esse quam quisquam doloremque at
        veniam quidem, eveniet odio quia illo ipsum eligendi perferendis
        laudantium.
      </PostContent>
    </PostContainer>
  )
}
