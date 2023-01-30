import React from 'react'
import { Search } from 'react-bootstrap-icons';
import { Dropdown } from './Dropdown';
import LoginButton from './LoginButton';

const Header = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap font-mono text-[#027782]">Bazar</span>
          </a>

          <form>
            <div className="flex flex-row w-full border rounded-lg border-gray-300 bg-[#f2f2f2]">
              <div className='border-r'>
                <Dropdown />
              </div>
              <Search className='text-3xl pt-2 ml-3 text-[#757575] focus:ring-0' />
              <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm placeholder:text-[#757575] bg-[#f2f2f2] rounded-r-lg" placeholder="Search for items" required />
            </div>
          </form>

          <div className="flex items-center">
            <LoginButton />
          </div>
        </div>
      </nav >
      <nav className="border">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a href="#" className="text-gray-900 hover:underline" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:underline">Company</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:underline">Team</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:underline">Features</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;