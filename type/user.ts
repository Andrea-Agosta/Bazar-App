export interface IQueryUser {
  userFirstName: string
  userLastName: string;
  userEmail: string;
  userRegistrationDate: Date;
  userAvatar: Buffer;
}

export interface IUser {
  userId: string;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userRegistrationDate: Date;
  userAvatar: Buffer;
}