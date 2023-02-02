import { IUser } from "../type/user";
import { connectionDB } from "./dbConnection";
import * as expressFileUpload from 'express-fileupload';


export const getUser = async (userId: string): Promise<IUser[]> => {
  const query = `SELECT * FROM users WHERE user_id = '${userId}'`;
  return await connectionDB(query);
};

export const createNewUserWithAvatar = async (userId: string, userFirstName: string, userLastName: string, userEmail: string, userRegistrationDate: string, userAvatar: expressFileUpload.FileArray): Promise<IUser[]> => {
  const query = `INSERT INTO users (user_id, user_first_name, user_last_name, user_email, user_registration_date, user_avatar) VALUES ('${userId}','${userFirstName}','${userLastName}','${userEmail}','${userRegistrationDate}', decode('${userAvatar}', 'hex'))`;
  return await connectionDB(query);
};

export const createNewUser = async (userId: string, userFirstName: string, userLastName: string, userEmail: string, userRegistrationDate: string): Promise<IUser[]> => {
  const query = `INSERT INTO users (user_id, user_first_name, user_last_name, user_email, user_registration_date) VALUES ('${userId}','${userFirstName}','${userLastName}','${userEmail}','${userRegistrationDate}')`;
  return await connectionDB(query);
};

export const updateUser = async (userId: string, userFirstName: string, userLastName: string, userEmail: string, userRegistrationDate: string, userAvatar: expressFileUpload.FileArray): Promise<IUser[]> => {
  const query = `UPDATE users SET user_first_name = '${userFirstName}', user_last_name = '${userLastName}', user_email = '${userEmail}', user_registration_date = '${userRegistrationDate}', user_avatar = (decode('${userAvatar}', 'hex'))  WHERE user_id = '${userId}'`
  return await connectionDB(query);
};

export const deleteUserById = (userId: string) => {
  const query = `DELETE FROM users WHERE user_id = '${userId}'`;
  connectionDB(query);
};