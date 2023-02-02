export interface IQueryComment {
  productId: string;
  userId: string;
  comment: string;
}

export interface IComments {
  commentId: string,
  productId: string,
  userId: string,
  date: Date,
  comment: string
}