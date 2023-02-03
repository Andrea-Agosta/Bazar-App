export interface IQueryProduct {
  product_tag_id: string;
  product_name: string;
  product_description: string;
  product_location: string;
  product_condition: string;
  product_price: number;
  product_sold: boolean;
  user_id: string;
  product_image: Buffer;
  tag_id: string;
}

export interface IProduct {
  product_id: string;
  product_name: string;
  product_description: string;
  product_location: string;
  product_condition: string;
  product_price: number;
  product_sold: boolean;
  user_id: string;
}

export interface IProductWithImage extends IProduct {
  productImage: Buffer;
}