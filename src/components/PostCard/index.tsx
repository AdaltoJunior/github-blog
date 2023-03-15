import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { PostDTO } from '../../dtos/PostDTO'

import { Container, Content, Header, Heading, Link, Time } from './styles'

interface PostCardProps {
  post: PostDTO
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Container>
      <Header>
        <Heading>{post.title}</Heading>
        <Time>
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </Time>
      </Header>
      <Content>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </Content>
      <Link to={`/post/${post.number}`}>Abrir postagem</Link>
    </Container>
  )
}
