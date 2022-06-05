import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#13153a]'>
      {/* ----container--- */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#FF9623]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>
          Alex Yehorov
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          A Front-End Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm a front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive web applications while learning back-end
          technologies.
        </p>
        <div>
          <button className='text-white group border-2 rounded-[8px] px-6 py-3 my-2 flex items-center hover:bg-[#FF9623] hover:border-[#FF9623]'>
            View work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-2' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
