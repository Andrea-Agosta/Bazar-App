import Section from '../components/Section'
import homeImage from '../images/home.png'


const Hompage = () => {
  return (
    <div>
      <img src={homeImage} alt="shop" className='w-screen' />
      <h2 className='text-center text-2xl mt-5'>Ready to declutter your storage?</h2>
      <button className='bg-[#027782] border border-[#027782] p-3 px-3 rounded text-white hover:bg-white hover:text-[#027782] text-sm w-11/12 my-5 mx-3'>Sell now</button>
      {
        <Section />
      }

    </div>
  )
}

export default Hompage