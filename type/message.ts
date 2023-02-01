export interface IMessage {
  idMessage: string;
  idSender: string;
  idReceiver: string;
  date: Date;
  message: string;
}

export interface IQueryMessage {
  senderId: string;
  receiverId: string;
  message: string;
}