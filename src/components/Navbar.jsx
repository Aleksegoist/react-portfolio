import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Contact from '../components/Contact';

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
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-[#FF9623] ;transition duration-150 ease-out md:ease-in'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-[#FF9623] ;transition duration-150 ease-out md:ease-in'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:text-[#FF9623] ;transition duration-150 ease-out md:ease-in'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='hover:text-[#FF9623] ;transition duration-150 ease-out md:ease-in'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
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
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* ----Social icons----- */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#0A66C2]'>
            <a
              rel='noopener noreferrer'
              target='_blank'
              className='flex justify-between items-center w-full text-gray-200'
              href='https://www.linkedin.com/in/alex-yehorov-01a44716a/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#24292F]'>
            <a
              rel='noopener noreferrer'
              target='_blank'
              className='flex justify-between items-center w-full text-gray-200'
              href='https://github.com/Aleksegoist'
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#10834d]'>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              className='flex justify-between items-center w-full text-gray-200'
              href='contact'
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#d42727]'>
            <a
              rel='noopener noreferrer'
              target='_blank'
              className='flex justify-between items-center w-full text-gray-200'
              href='https://i.ibb.co/xM9xmk3/CV-Oleksandr-Yehorov.jpg'
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
