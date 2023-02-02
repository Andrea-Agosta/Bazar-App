import { ITag } from "../../type/tag";
import { getTags } from "../tag";

export const getAllTags = async (): Promise<ITag[]> => {
  return await getTags();
};