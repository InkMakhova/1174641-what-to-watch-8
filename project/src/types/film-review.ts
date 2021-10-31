export type User = {
  id: number,
  name: string,
}

export type UserReview = {
  id: number,
  user: User,
  rating: number,
  comment: string,
  date: string,
}

export type FilmReview = {
  filmId: number,
  reviews: UserReview[],
}
