export type User = {
  id: number,
  name: string,
}

export type FilmReview = {
  id: number,
  user: User,
  rating: number,
  comment: string,
  date: string,
}
