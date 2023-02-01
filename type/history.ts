import { IProduct } from "./product";

export interface IHistory extends IProduct {
  history_id: string;
  soldDate: Date;
  userId: string;
}

export interface IQueryHistory {
  userId: string;
}