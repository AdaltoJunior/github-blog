import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

import {
  Info,
  InfoContainer,
  PostContainer,
  PostContent,
  PostInfo,
  PostInfoHeader,
  PostInfoHeading,
} from './styles'

import { PostDTO } from '../../dtos/PostDTO'
import { api } from '../../services/api'

export function Post() {
  const [post, setPost] = useState<PostDTO | null>(null)
  const { issueNumber } = useParams()

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get(
          `/repos/AdaltoJunior/github-blog/issues/${issueNumber}`,
        )
        setPost(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchPost()
  }, [issueNumber])

  if (!post) return

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
