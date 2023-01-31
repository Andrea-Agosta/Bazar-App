import { Pool } from "pg";
import { v4 as uuidv4 } from 'uuid';

const pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  user: 'postgres',
  password: 'postgres123',
});

const connectionDB = async (query: string) => {
  const client = await pool.connect();
  const product = await client.query(query);
  return await product.rows[0];
};

export const createTag = async (tagName: string) => {
  const id: string = await uuidv4();
  const query: string = `INSERT INTO tags (ID,tag_name) VALUES (${id}, ${tagName});`;
  await connectionDB(query);
}

// const getProductById = async productId => {
//   const query = `SELECT * FROM salt_products WHERE product_id = '${productId}'`;
//   const data = await connectionDB(query);
//   return await {
//     "productId": data.product_id,
//     "name": data.product_name,
//     "price": data.product_price
//   }
// };
