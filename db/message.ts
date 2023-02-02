import { IMessage } from "../type/message";
import { connectionDB } from "./dbConnection";

export const getMessage = async (): Promise<IMessage[]> => {
  const query = 'SELECT * FROM messages'; //todo edit this
  return await connectionDB(query);
};

export const addMessage = async (messageId: string, senderId: string, receiverId: string, date: Date, message: string): Promise<IMessage[]> => {
  const query = `INSERT INTO messages (messages_id, sender_id, receiver_id, date_insert, message_text) VALUES (${messageId}, ${senderId}, ${receiverId}, ${date},${message})`;
  return await connectionDB(query);
};

export const getMessagesFromUser = async (userId: string): Promise<IMessage[]> => {
  const query = 'SELECT DISTINCT (user) FROM (SELECT receiver_id as user FROM messages WHERE sender_id = ' + userId + ' UNION SELECT sender_id AS user FROM messages WHERE receiver_id = ' + userId + ')';
  return await connectionDB(query);
};