import { v4 as uuidv4 } from 'uuid';
import { addMessage, getMessage } from "db/message";
import { IMessage, IQueryMessage } from "type/message";
import { Request } from 'express';


export const getAllMessage = async (): Promise<IMessage[]> => {
  return await getMessage();
};

export const addNewMessage = async (req: Request<{}, {}, {}, IQueryMessage>): Promise<IMessage> => {
  const senderId = req.query.senderId;
  const receiverId = req.query.receiverId;
  const message = req.query.message;
  const uuidRegex: RegExp = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
  if (senderId && uuidRegex.test(senderId) && receiverId && uuidRegex.test(receiverId) && message) {
    const messageId: string = await uuidv4();
    const date: Date = new Date();
    return await addMessage(messageId, senderId, receiverId, date, message);
  }
  throw new Error('Bad request');
};