import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#13153a]'>
      {/* ----container--- */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p>Hi, my name is</p>
        <h1>Alex Yehorov</h1>
        <h2>I'm a Front-End developer.</h2>
      </div>
    </div>
  );
};

export default Home;
