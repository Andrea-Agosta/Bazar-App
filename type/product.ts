export interface IQueryProduct {
  ProductTagId: string;
  productName: string;
  productDescription: string;
  productLocation: string;
  productCondition: string;
  productPrice: number;
  productSold: boolean;
  userId: string;
  productImage: Buffer;
  tagId: string;
}

export interface IProduct {
  productId: string;
  productName: string;
  productDescription: string;
  productLocation: string;
  productCondition: string;
  productPrice: number;
  productSold: boolean;
  userId: string;
}

export interface IProductWithImage extends IProduct {
  productImage: Buffer;
}