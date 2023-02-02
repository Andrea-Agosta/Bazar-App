import { v4 as uuidv4 } from 'uuid';
import { addHistory, getHistoryByProduct, getHistoryByUser, } from "../history";
import { IHistory, IQueryHistory } from "../../type/history";
import { Request } from 'express';
import { getProductById } from './product';
import { getUserById } from './user';

const uuidRegex: RegExp = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

export const getAllHistoryByProductId = async (productId: string): Promise<IHistory[]> => {
  if (uuidRegex.test(productId)) {
    return await getHistoryByProduct(productId);
  }
  throw new Error('Bad request');
};

export const getAllHistoryByUserId = async (userId: string): Promise<IHistory[]> => {
  if (uuidRegex.test(userId)) {
    return await getHistoryByUser(userId);
  }
  throw new Error('Bad request');
};

export const addNewHistory = async (req: Request<{ productId: string }, {}, {}, IQueryHistory>): Promise<IHistory[]> => {
  const productId: string = req.params.productId;
  const userId: string = req.query.userId;
  const checkProduct = await getProductById(productId)
  const checkUserId = await getUserById(userId);

  if (checkProduct && checkUserId) {
    const hisotryId: string = await uuidv4();
    const date: Date = new Date();
    return await addHistory(hisotryId, productId, userId, date);
  };
  throw new Error('Bad request');
};
