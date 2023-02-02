import { useContext, useEffect } from 'react';
import Section from '../components/Section'
import homeImage from '../images/home.png'
import axios from 'axios';
import { TagContext } from '../context/tag';


const Hompage = () => {
  const { tags, setTags } = useContext(TagContext);
  useEffect(() => {
    axios({
      method: 'get',
      url: '/api/tag',
    })
      .then(async response => await setTags(response.data))
  }, []);

  return (
    <div>
      <img src={homeImage} alt="shop" className='w-screen' />
      <h2 className='text-center text-2xl mt-5'>Ready to declutter your storage?</h2>
      <button className='bg-[#027782] border border-[#027782] p-3 px-3 rounded text-white hover:bg-white hover:text-[#027782] text-sm w-11/12 my-5 mx-3'>Sell now</button>
      {
        tags.map((tag, index) => <Section key={index} tag={tag} />)
      }
    </div>
  )
}

export default Hompage