import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#13153a] flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/63be1c68-84e2-457c-8194-efbdc28da968'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#FF9623] text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            // Submit the form below or shoot me an email -
            avtozakaz82@gmail.com
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2 rounded-[5px]'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6] rounded-[5px]'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='bg-[#ccd6f6] p-2 rounded-[5px]'
          name='message'
          rows='10'
          placeholder='Your message...'
        ></textarea>
        <button className='text-white border-2 rounded-[8px] px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#FF9623] hover:border-[#FF9623]'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
