import { createContext, useState } from "react";
import { ITag } from '../../../type/tag'

interface ITagContext {
  tags: ITag[],
  setTags: React.Dispatch<React.SetStateAction<ITag[]>>,
}

interface IData {
  children: JSX.Element;
}

export const TagContext = createContext<ITagContext>({} as ITagContext);

export const TagContestProvider = ({ children }: IData) => {
  const [tags, setTags] = useState<ITag[]>([{} as ITag]);
  return <TagContext.Provider value={{ tags, setTags }}> {children} </TagContext.Provider>
};