import { Request } from 'express';
import { addNewProduct, addTagToProduct, deleteImage, deleteProduct, getProduct, getProductByTagId, getProductByUser, updateProduct } from "../product";
import { IProduct, IQueryProduct } from "../../type/product";
// import * as expressFileUpload from 'express-fileupload';
import { v4 as uuidv4 } from 'uuid';


const uuidRegex: RegExp = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

export const getProductById = async (id: string): Promise<IProduct[]> => {
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

export const getProductByUserId = async (user_id: string): Promise<IProduct[]> => {
  if (uuidRegex.test(user_id)) {
    return await getProductByUser(user_id);
  }
  throw new Error('Bad request');
};

export const addProduct = async (req: Request<{}, {}, {}, IQueryProduct>): Promise<IProduct> => {
  const product_name: string = req.query.product_name;
  const product_description: string = req.query.product_description;
  const product_location: string = req.query.product_location;
  const product_condition: string = req.query.product_condition;
  const product_price: number = req.query.product_price;
  const user_id: string = req.query.user_id;
  const tag_id: string = req.query.tag_id;
  // let productImage: expressFileUpload.FileArray | undefined = undefined;
  // req.files && (productImage = req.files);

  if (product_name && product_description && product_location && product_condition && product_price && uuidRegex.test(user_id), tag_id) {
    const product_id: string = await uuidv4();
    const product_sold: boolean = false;
    await addNewProduct(product_id, product_name, product_description, product_location, product_condition, product_price, product_sold, user_id);
    const tagProdactId: string = await uuidv4();
    await addTagToProduct(tagProdactId, product_id, tag_id);
    const product: IProduct = { product_id, product_name, product_description, product_location, product_condition, product_price, product_sold, user_id }
    // if (productImage) {
    //   const image = await addNewProductImages(product_id, productImage);
    //   return {...product, productImage};
    // }
    return product;
  }
  throw new Error('Bad request');
};

export const updateProductById = async (req: Request<{ product_id: string }, {}, {}, IQueryProduct>): Promise<IProduct> => {
  const product_id = req.params.product_id;
  const product_name: string = req.query.product_name;
  const product_description: string = req.query.product_description;
  const product_location: string = req.query.product_location;
  const product_condition: string = req.query.product_condition;
  const product_price: number = req.query.product_price;
  const product_sold: boolean = req.query.product_sold;
  const user_id: string = req.query.user_id;
  // let productImage: expressFileUpload.FileArray | undefined = undefined;
  // req.files && (productImage = req.files);
  if (uuidRegex.test(product_id)) {
    await updateProduct(product_id, product_name, product_description, product_location, product_condition, product_price, product_sold, user_id);
    const product: IProduct = { product_id, product_name, product_description, product_location, product_condition, product_price, product_sold, user_id };
    await deleteImage(product_id);
    // await addNewProductImages(product_id, productImage);
    return product;
  }
  throw new Error('Bad request');
}

export const deleteProductById = (product_id: string): void => {
  if (uuidRegex.test(product_id)) {
    deleteProduct(product_id);
    deleteImage(product_id);
  }
};