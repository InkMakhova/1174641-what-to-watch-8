type User = {
  id: number,
  name: string,
}

type Review = {
  id: number,
  user: User,
  rating: number,
  comment: string,
  date: string,
}

export type FilmReview = {
  filmId: number,
  reviews: Review[],
}
