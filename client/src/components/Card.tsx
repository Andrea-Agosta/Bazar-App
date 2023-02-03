import { Link } from "react-router-dom";
import { IProduct } from "../../../type/product";


export default function Card({ product }: { product: IProduct }) {
  return (
    <article className="flex flex-col border-2 rounded-2xl p-5 drop-shadow-md bg-[#EFF1F3] max-w-md">
      <Link
        to={`/product/${'id'}`}
      >
        <figure className="overflow-hidden rounded-lg" >
          <img
            src={`https://picsum.photos/id/100/400/310`}
            alt={'title'}
            className='h-64'
          />
        </figure>
        <div className="h-60">
          <h1 className="mt-5 font text-2xl font-bold tracking-tight text-[#2F2D2E]"> {product.product_name} </h1>
          <p className="mt-4 text-xl text-[#2E4057]"> {product.product_description} </p>
          <p className="mt-4 text-xl text-[#2E4057]"> {product.product_condition} </p>
          <p className="mt-4 text-xl text-[#2E4057]"> {product.product_location} </p>
          <p className="mt-4 text-xl text-[#2E4057]"> {product.product_price} </p>
          {product.product_sold && <p className="mt-4 text-xl text-[#2E4057]"> Sold </p>}
          <button className="mt-4 text-xl text-[#2E4057]"> Buy </button>
        </div>
      </Link>
    </article>
  )
}