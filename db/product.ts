import { connectionDB } from "./dbConnection";
import { IProduct } from "../type/product";
import * as expressFileUpload from 'express-fileupload';

export const getProduct = async (id: string): Promise<IProduct[]> => {
  const query = `SELECT * FROM products WHERE product_id = '${id}'`;
  return await connectionDB(query);
};

export const getProductByTagId = async (tagId: string): Promise<IProduct[]> => {
  const query = `SELECT p.* FROM products p JOIN tag_product tp ON p.product_id = tp.product_id JOIN tags t ON tp.tag_id = t.tag_id WHERE t.tag_id = '${tagId}'`;
  return await connectionDB(query);
};

export const getProductByUser = async (userId: string): Promise<IProduct[]> => {
  const query = `SELECT * FROM products WHERE user_id = '${userId}'`;
  return await connectionDB(query);
};

export const addNewProduct = async (productId: string, productName: string, productDescription: string, productLocation: string, productCondition: string, productPrice: number, productSold: boolean, userId: string): Promise<IProduct[]> => {
  const query = `INSERT INTO products (product_id, product_name, product_description, product_location, product_conditions, product_price, product_sold, user_id) VALUES ('${productId}', '${productName}',' ${productDescription}', '${productLocation}', '${productCondition}', '${productPrice}','${productSold}','${userId}')`;
  return await connectionDB(query);
};

export const addNewProductImages = async (productId: string, productImage: expressFileUpload.FileArray): Promise<IProduct[]> => {
  const query = `INSERT INTO products_images (product_id, productImage) VALUES ('${productId}', decode('${productImage}', 'hex'))`;
  return await connectionDB(query);
};

export const addTagToProduct = async (tagProdactId: string, productId: string, tagId: string) => {
  const query = `INSERT INTO tag_product (tag_product_id, product_id, tag_id) VALUES ('${tagProdactId}', '${productId}', '${tagId}')`;
  return await connectionDB(query);
}

export const updateProduct = async (productId: string, productName: string, productDescription: string, productLocation: string, productCondition: string, productPrice: number, productSold: boolean, userId: string) => {
  const query = `UPDATE products SET product_name = '${productName}', product_description = '${productDescription}', product_location ='${productLocation}', product_conditions = '${productCondition}', product_price = '${productPrice}', product_sold = '${productSold}', user_id = '${userId}' WHERE product_id = '${productId}'`;
  return await connectionDB(query);
};

export const deleteProduct = (productId: string): void => {
  const query = `DELETE FROM products WHERE product_id = '${productId}'`;
  connectionDB(query);
};

export const deleteImage = (productId: string): void => {
  const query = `DELETE FROM products_images WHERE product_id = '${productId}'`;
  connectionDB(query);
};