import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

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
      <ul className='hidden md:flex '>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
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
      <div className='hidden'> </div>
    </div>
  );
};

export default Navbar;
