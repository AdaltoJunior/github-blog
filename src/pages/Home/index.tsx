import { Profile } from '../../components/Profile'
import { PostCard } from '../../components/PostCard'

import {
  HomeContainer,
  PostContainer,
  SearchContainer,
  SearchCounter,
  SearchHeader,
  SearchHeading,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <SearchContainer>
        <SearchHeader>
          <SearchHeading>Publicações</SearchHeading>
          <SearchCounter>6 publicações</SearchCounter>
        </SearchHeader>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>

      <PostContainer>
        {Array.from({ length: 6 }).map((_, index) => (
          <PostCard key={index} />
        ))}
      </PostContainer>
    </HomeContainer>
  )
}
