import { v4 as uuidv4 } from 'uuid';
import { addHistory, getHistory } from "db/history";
import { IHistory, IQueryHistory } from "type/history";
import { Request } from 'express';

const uuidRegex: RegExp = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

export const getAllHistory = async (): Promise<IHistory[]> => {
  return await getHistory();
};

export const addNewHistory = async (req: Request<{ productId: string }, {}, {}, IQueryHistory>): Promise<IHistory> => {
  const productId: string = req.params.productId;
  const userId: string = req.query.userId;
  if (productId && uuidRegex.test(productId) && userId && uuidRegex.test(userId)) {
    const hisotryId: string = await uuidv4();
    const date: Date = new Date();
    return await addHistory(hisotryId, productId, userId, date);
  };
  throw new Error('Bad request');
};
