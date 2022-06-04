import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#13153a] text-gray-200'>
      <div>
        <img
          src={Logo}
          alt='Logo'
          style={{ width: '130px', cursor: 'pointer' }}
        />
      </div>

      {/* ----Menu----- */}
      <ul className='hidden md:flex  '>
        <li className='hover:text-[#FF9623] ;transition duration-150 ease-out md:ease-in'>
          Home
        </li>
        <li className='hover:text-[#FF9623] ;transition duration-150 ease-out md:ease-in'>
          About
        </li>
        <li className='hover:text-[#FF9623] ;transition duration-150 ease-out md:ease-in'>
          Skills
        </li>
        <li className='hover:text-[#FF9623] ;transition duration-150 ease-out md:ease-in'>
          Work
        </li>
        <li className='hover:text-[#FF9623] ;transition duration-150 ease-out md:ease-in'>
          Contact
        </li>
      </ul>

      {/* ----Hamburger----- */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer '>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* ----Mobile Menu----- */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#13153a] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-3xl'>Home</li>
        <li className='py-6 text-3xl'>About</li>
        <li className='py-6 text-3xl'>Skills</li>
        <li className='py-6 text-3xl'>Work</li>
        <li className='py-6 text-3xl'>Contact</li>
      </ul>

      {/* ----Social icons----- */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#0A66C2]'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#24292F]'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href='/'
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#10834d]'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#d42727]'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
