import { IHistory } from "type/history";
import { connectionDB } from "./dbConnection";

export const getHistoryByProduct = async (productId: string): Promise<IHistory[]> => {
  const query = `SELECT p.*, ph.user_id AS buyer_id, ph.history_id, ph.date_sold FROM products p JOIN products_history ph ON p.product_id = ph.product_id WHERE ph.product_id='${productId}'`;
  return await connectionDB(query);
}

export const getHistoryByUser = async (userId: string): Promise<IHistory[]> => {
  const query = `SELECT p.*, ph.user_id AS buyer_id, ph.history_id, ph.date_sold FROM products p JOIN products_history ph ON p.product_id = ph.product_id WHERE p.user_id='${userId}'`;
  return await connectionDB(query);
}

export const addHistory = async (hisotryId: string, productId: string, userId: string, date: Date): Promise<IHistory> => {
  const query = `INSERT INTO products_history (history_id, product_id, user_id, date_insert) VALUES (${hisotryId}, ${productId}, ${userId}, ${date})`;
  return await connectionDB(query);
};