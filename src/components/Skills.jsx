import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import node from '../assets/node.png';
import mongo from '../assets/mongo.png';
import tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#13153a] text-gray-300'>
      {/* ---Container--- */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#FF9623] '>
            Skills
          </p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='py-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='HTML icon' />
            <p className='py-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JS} alt='HTML icon' />
            <p className='py-4'>JAVA SCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={react} alt='HTML icon' />
            <p className='py-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={github} alt='HTML icon' />
            <p className='py-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={node} alt='HTML icon' />
            <p className='py-4'>NODE JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={mongo} alt='HTML icon' />
            <p className='py-4'>MONGO DB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tailwind} alt='HTML icon' />
            <p className='py-4'>TAILWIND CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
