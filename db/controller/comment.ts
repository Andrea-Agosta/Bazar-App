import { v4 as uuidv4 } from 'uuid';
import { addComment, deleteComment, getCommentsByProductId, updateComment } from "../comment";
import { IComments, IQueryComment } from "../../type/comment";
import { Request } from 'express';
import { getUserById } from './user';
import { getProductById } from './product';

const uuidRegex: RegExp = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

export const getAllComments = async (productId: string): Promise<IComments[]> => {
  if (productId && uuidRegex.test(productId)) {
    return await getCommentsByProductId(productId);
  }
  throw new Error('Id not found');
};

export const addNewComment = async (req: Request<{ productId: string }, {}, {}, IQueryComment>): Promise<IComments> => {
  const productId: string = req.params.productId;
  const userId: string = req.query.userId;
  const comment: string = req.query.comment;
  const checkUserId = await getUserById(userId);
  const checkProduct = await getProductById(productId)

  if (checkProduct && checkUserId && comment) {
    const commentId: string = await uuidv4();
    const date: Date = new Date();
    return await addComment(commentId, productId, userId, date, comment);
  }
  throw new Error('Bad request');
};

export const updateCommentById = async (req: Request<{ commentId: string }, {}, {}, IQueryComment>): Promise<IComments> => {
  const commentId: string = req.params.commentId;
  const comment: string = req.query.comment;
  if (uuidRegex.test(commentId) && comment !== '') {
    return await updateComment(commentId, comment);
  }
  throw new Error('Id not found');
};

export const deleteCommentById = (commentId: string): void => {
  deleteComment(commentId);
};