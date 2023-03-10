import { Container, Content, Header, Heading, Link, Time } from './styles'

export function PostCard() {
  return (
    <Container>
      <Header>
        <Heading>JavaScript data types and data structures</Heading>
        <Time>Há 1 dia</Time>
      </Header>
      <Content>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </Content>
      <Link to="/post">Abrir postagem</Link>
    </Container>
  )
}
