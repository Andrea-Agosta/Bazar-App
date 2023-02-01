import { ITag } from "type/tag";
import { connectionDB } from "./dbConnection";

export const getAllTags = async (): Promise<ITag[]> => {
  const query = 'SELECT * FROM tags';
  return await connectionDB(query);
};