import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { Link } from '../../components/Link'
import { Loading } from '../../components/Loading'
import { Container } from '../../components/Container'

import {
  Info,
  InfoContainer,
  PostContainer,
  PostContent,
  PostInfo,
  PostInfoHeader,
  PostInfoHeading,
} from './styles'

import { api } from '../../services/api'
import { PostDTO } from '../../dtos/PostDTO'

export function Post() {
  const [post, setPost] = useState<PostDTO>({} as PostDTO)
  const [isLoading, setIsLoading] = useState(true)

  const { issueNumber } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/repos/AdaltoJunior/github-blog/issues/${issueNumber}`,
        )
        setPost(response.data)
      } catch (error) {
        navigate('/')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [issueNumber, navigate])

  if (isLoading) {
    return (
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBlock: '3.75rem',
        }}
      >
        <Loading />
      </Container>
    )
  }

  return (
    <PostContainer>
      <PostInfo>
        <PostInfoHeader>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </Link>
          <Link to={post.html_url} target="_blank">
            <span>Ver no Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </PostInfoHeader>
        <PostInfoHeading>{post.title}</PostInfoHeading>
        <InfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <span>{post.user.login}</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faCalendar} />
            <span>
              {formatDistanceToNow(new Date(post.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faComment} />
            <span>{post.comments} comentários</span>
          </Info>
        </InfoContainer>
      </PostInfo>

      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
