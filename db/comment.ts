import { IComments } from "../type/comment";
import { connectionDB } from "./dbConnection";


export const getCommentsByProductId = async (productId: string): Promise<IComments[]> => {
  const query = `SELECT * FROM comments WHERE product_id = ${productId}`;
  return await connectionDB(query);
};

export const addComment = async (commentId: string, productId: string, userId: string, date: Date, comment: string): Promise<IComments> => {
  const query = `INSERT INTO comments (comment_id, product_id, user_id, date_insert, comment) VALUES (${commentId}, ${productId}, ${userId}, ${date}, ${comment})`;
  return await connectionDB(query);
};

export const updateComment = async (commentId: string, comment: string): Promise<IComments> => {
  const query = `UPDATE comments SET comment = '${comment}' WHERE comment_id = '${commentId}'`
  return await connectionDB(query);
};

export const deleteComment = (commentId: string): void => {
  const query = `DELETE FROM comments WHERE comment_id = '${commentId}'`;
  connectionDB(query);
};
