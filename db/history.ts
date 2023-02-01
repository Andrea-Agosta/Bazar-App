import { IHistory } from "type/history";
import { connectionDB } from "./dbConnection";

export const getHistory = async (): Promise<IHistory[]> => {
  const query = 'SELECT * FROM products_history';
  return await connectionDB(query);
}

export const addHistory = async (hisotryId: string, productId: string, userId: string, date: Date): Promise<IHistory> => {
  const query = `INSERT INTO products_history (history_id, product_id, user_id, date_insert) VALUES (${hisotryId}, ${productId}, ${userId}, ${date})`;
  return await connectionDB(query);
};