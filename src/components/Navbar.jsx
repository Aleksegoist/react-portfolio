import React from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#13153a] text-gray-200'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '130px' }} />
      </div>

      {/* ----Menu----- */}
      <div>
        <ul className='flex '>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* ----Hamburger----- */}
      <div className='hidden'>
        <FaBars />
      </div>

      {/* ----Mobile Menu----- */}
      <ul className='hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* ----Social icons----- */}
      <div></div>
    </div>
  );
};

export default Navbar;
