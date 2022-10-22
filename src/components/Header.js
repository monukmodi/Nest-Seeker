import React from 'react';

// import link
import { Link } from 'react-router-dom';
// import logo
// import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* <Link to='/'>
          <img src={Logo} alt='' />
        </Link> */}
        {/* <i class="fa-duotone fa-envelope-open"></i> */}
        {/* <i class="fa-regular fa-envelope"></i> */}
        <div className='flex gap-2'>
        <i class="fa-solid fa-envelope-open"></i>
        <h2 className='text-4xl lg:text-[20px] font-semibold leading-none mb-6'>Estatery</h2>
        <ul className='flex gap-2 px-6'>
          <li className='px-4'>Rent</li>
          <li className='px-4'>Buy</li>
          <li className='px-4'>Sell</li>
          <li className='px-4'>Manage Property</li>
          <li className='px-4'>Resources</li>
        </ul>
        </div>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/'>
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
