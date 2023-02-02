import { Request } from 'express';
import { addNewProduct, addNewProductImages, deleteImage, deleteProduct, getProduct, getProductByTagId, getProductByUser, updateProduct } from "../product";
import { IProduct, IQueryProduct } from "../../type/product";
import * as expressFileUpload from 'express-fileupload';
import { v4 as uuidv4 } from 'uuid';


const uuidRegex: RegExp = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

export const getProductById = async (id: string): Promise<IProduct> => {
  if (uuidRegex.test(id)) {
    return await getProduct(id);
  }
  throw new Error('Bad request');
};

export const getProductByTag = async (tagId: string): Promise<IProduct[]> => {
  if (uuidRegex.test(tagId)) {
    return await getProductByTagId(tagId);
  }
  throw new Error('Bad request');
};

export const getProductByUserId = async (userId: string): Promise<IProduct[]> => {
  if (uuidRegex.test(userId)) {
    return await getProductByUser(userId);
  }
  throw new Error('Bad request');
};

export const addProduct = async (req: Request<{}, {}, {}, IQueryProduct>): Promise<IProduct[]> => {
  const productName: string = req.query.productName;
  const productDescription: string = req.query.productDescription;
  const productLocation: string = req.query.productLocation;
  const productCondition: string = req.query.productCondition;
  const productPrice: number = req.query.productPrice;
  const userId: string = req.query.userId;
  let productImage: expressFileUpload.FileArray | undefined = undefined;
  req.files && (productImage = req.files);

  if (productName && productDescription && productLocation && productCondition && productPrice && uuidRegex.test(userId) && productImage) {
    const productId: string = await uuidv4();
    const productSold: boolean = false;
    const product = await addNewProduct(productId, productName, productDescription, productLocation, productCondition, productPrice, productSold, userId);
    const image = await addNewProductImages(productId, productImage);
    return [product, image];
  }
  throw new Error('Bad request');
};

export const updateProductById = async (req: Request<{ productid: string }, {}, {}, IQueryProduct>): Promise<IProduct[]> => {
  const productid = req.params.productid;
  const productName: string = req.query.productName;
  const productDescription: string = req.query.productDescription;
  const productLocation: string = req.query.productLocation;
  const productCondition: string = req.query.productCondition;
  const productPrice: number = req.query.productPrice;
  const productSold: boolean = req.query.productSold;
  const userId: string = req.query.userId;
  let productImage: expressFileUpload.FileArray | undefined = undefined;
  req.files && (productImage = req.files);
  if (uuidRegex.test(productid) && productImage) {
    const product = await updateProduct(productid, productName, productDescription, productLocation, productCondition, productPrice, productSold, userId);
    await deleteImage(productid);
    const image = await addNewProductImages(productid, productImage);
    return [product, image];
  }
  throw new Error('Bad request');
}

export const deleteProductById = (productId: string): void => {
  if (uuidRegex.test(productId)) {
    deleteProduct(productId);
    deleteImage(productId);
  }
};