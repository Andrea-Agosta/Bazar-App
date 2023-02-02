import { createNewUser, createNewUserWithAvatar, getUser, updateUser } from "../user";
import { IQueryUser, IUser } from "../../type/user";
import { Request } from 'express';
import * as expressFileUpload from 'express-fileupload';
import { v4 as uuidv4 } from 'uuid';


const uuidRegex: RegExp = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

export const getUserById = async (userId: string): Promise<IUser[]> => {
  if (uuidRegex.test(userId)) {
    return await getUser(userId);
  }
  throw new Error('Bad request');
};

export const createUser = async (req: Request<{}, {}, {}, IQueryUser>): Promise<IUser[]> => {
  const userFirstName: string = req.query.userFirstName;
  const userLastName: string = req.query.userLastName;
  const userEmail: string = req.query.userEmail;
  let userAvatar: expressFileUpload.FileArray | undefined = undefined;
  req.files && (userAvatar = req.files);
  if (userFirstName && userLastName && userEmail) {
    const userId: string = await uuidv4();
    const userRegistrationDate: string = new Date().toLocaleDateString();
    return userAvatar ? await createNewUserWithAvatar(userId, userFirstName, userLastName, userEmail, userRegistrationDate, userAvatar) : createNewUser(userId, userFirstName, userLastName, userEmail, userRegistrationDate);
  }
  throw new Error('Bad request');
};

export const updateUserbyId = async (req: Request<{ userId: string }, {}, {}, IQueryUser>): Promise<IUser[]> => {
  const userId = req.params.userId;
  const userFirstName: string = req.query.userFirstName;
  const userLastName: string = req.query.userLastName;
  const userEmail: string = req.query.userEmail;
  const userRegistrationDate = req.query.userRegistrationDate;
  let userAvatar: expressFileUpload.FileArray | undefined = undefined;
  req.files && (userAvatar = req.files);
  if (uuidRegex.test(userId), userFirstName, userLastName, userEmail, userRegistrationDate, userAvatar) {
    return await updateUser(userId, userFirstName, userLastName, userEmail, userRegistrationDate, userAvatar);
  }
  throw new Error('Bad request');
};

export const deleteUserById = (userId: string): void => {
  deleteUserById(userId);
};