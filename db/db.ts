import { Pool } from "pg";

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

// const getProductById = async productId => {
//   const query = `SELECT * FROM salt_products WHERE product_id = '${productId}'`;
//   const data = await connectionDB(query);
//   return await {
//     "productId": data.product_id,
//     "name": data.product_name,
//     "price": data.product_price
//   }
// };
