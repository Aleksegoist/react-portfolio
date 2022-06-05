import React from 'react';
import webflix from '../assets/work_webflix.png';
import github from '../assets/work_github.png';
import guitar from '../assets/work_guitar.png';
import news from '../assets/work_news.png';
import clothes from '../assets/work_clothes.png';
import bike from '../assets/work_bike.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#13153a]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 '>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FF9623]'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* ---Container--- */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* ---Grid Item--- */}
          <div
            style={{ backgroundImage: `url(${webflix})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* ---Hover effect--- */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-medium text-white tracking-wider'>
                React clone Netflix
              </span>
              <div className='pt-8 text-center'>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://webflix-react.web.app/'
                >
                  <button className='hoverBtn text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/Aleksegoist/Webflix-video-app'
                >
                  <button className='hoverBtn text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* ---Grid Item--- */}
          <div
            style={{ backgroundImage: `url(${github})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* ---Hover effect--- */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-medium text-white tracking-wider'>
                Grab users API
              </span>
              <div className='pt-8 text-center'>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github-users-fetch-api.vercel.app/'
                >
                  <button className='hoverBtn text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/Aleksegoist/GitHub-users-fetchAPI'
                >
                  <button className='hoverBtn text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* ---Grid Item--- */}
          <div
            style={{ backgroundImage: `url(${guitar})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* ---Hover effect--- */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-medium text-white tracking-wider text-center'>
                Landing page <br /> from Figma
              </span>
              <div className='pt-8 text-center'>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://landing-page-guitar.vercel.app/'
                >
                  <button className='hoverBtn text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/Aleksegoist/landing-guitar-html'
                >
                  <button className='hoverBtn text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* ---Grid Item--- */}
          <div
            style={{ backgroundImage: `url(${news})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* ---Hover effect--- */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-medium text-white tracking-wider text-center'>
                React News Portal
              </span>
              <div className='pt-8 text-center'>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://news-app-pearl.vercel.app/'
                >
                  <button className='hoverBtn text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/Aleksegoist/react-app-news-blog'
                >
                  <button className='hoverBtn text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* ---Grid Item--- */}
          <div
            style={{ backgroundImage: `url(${clothes})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* ---Hover effect--- */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-medium text-white tracking-wider text-center'>
                React Clothes Shop
              </span>
              <div className='pt-8 text-center'>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://clothes-shop-sigma.vercel.app/'
                >
                  <button className='hoverBtn text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/Aleksegoist/React-ecommerce-app'
                >
                  <button className='hoverBtn text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* ---Grid Item--- */}
          <div
            style={{ backgroundImage: `url(${bike})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* ---Hover effect--- */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-medium text-white tracking-wider text-center'>
                Landing page
              </span>
              <div className='pt-8 text-center'>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://shop-bike-xiaomi.vercel.app/'
                >
                  <button className='hoverBtn text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/Aleksegoist/Landing-page-shop-Xiaomi'
                >
                  <button className='hoverBtn text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
