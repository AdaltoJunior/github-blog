export interface PostDTO {
  id: number
  body: string
  title: string
  number: number
  comments: number
  html_url: string
  created_at: string

  user: {
    login: string
  }
}
