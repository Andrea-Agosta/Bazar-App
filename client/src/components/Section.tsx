// import axios from 'axios';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ITag } from '../../../type/tag';
import Card from '../components/Card';
import { ProductContext } from '../context/product';

const Section = ({ tag }: { tag: ITag }) => {
  const { tag_name } = tag;
  const { products } = useContext(ProductContext);

  // console.log(products, 'PRODUCTS');

  return (
    <section>
      <div className='flex flex-wrap justify-between items-center mx-auto mt-5 mb-5'>
        <h2 className='text-2xl ml-3'> {tag_name}</h2>
        <Link to={`/category/${'name'}`} className='text-[#027782] mr-8' > See all </Link>
      </div>
      <div className='bg-white p-4 transition duration-200 ease-in-out overflow-hidden' >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.map((product, index) => <Card key={index} product={product} />)}
        </div>
      </div>
    </section>
  )
}

export default Section;