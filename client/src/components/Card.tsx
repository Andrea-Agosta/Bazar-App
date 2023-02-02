import { Link } from "react-router-dom";


export default function Card() {
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
          <h1 className="mt-5 font text-2xl font-bold tracking-tight text-[#2F2D2E]">
            TITLE
          </h1>
          <p className="mt-4 text-xl text-[#2E4057]">
            DESCRIPTION
          </p>
        </div>
      </Link>
    </article>
  )
}