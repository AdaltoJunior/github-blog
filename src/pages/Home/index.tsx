import { ChangeEvent, useEffect, useState } from 'react'

import { api } from '../../services/api'
import { PostDTO } from '../../dtos/PostDTO'

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
  const [posts, setPosts] = useState<PostDTO[]>([])
  const [searchValue, setSearchValue] = useState('')

  async function fetchPosts(query = '') {
    try {
      const response = await api.get('/search/issues', {
        params: {
          q: `${query}repo:AdaltoJunior/github-blog`,
        },
      })
      setPosts(response.data.items)
    } catch (error) {
      console.log(error)
    }
  }

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <HomeContainer>
      <Profile />

      <SearchContainer>
        <SearchHeader>
          <SearchHeading>Publicações</SearchHeading>
          <SearchCounter>
            {posts.length} {posts.length < 2 ? 'publicação' : 'publicações'}
          </SearchCounter>
        </SearchHeader>
        <input
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Buscar conteúdo"
        />
      </SearchContainer>

      <PostContainer>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostContainer>
    </HomeContainer>
  )
}
