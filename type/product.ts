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
}

export interface IProduct {
  productId: string;
  productName: string;
  productDescription: string;
  productLocation: string;
  productConditions: string;
  productPrice: number;
  productSold: boolean;
  userId: string;
  productImage: Buffer;
}