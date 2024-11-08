import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul className='flex p-4'>
        <li><Link to="/" className='p-4'>Home</Link></li> {/* Correct path as string */}
        <li><Link to="/about" className='p-4'>About</Link></li> {/* Correct path as string */}
      </ul>
    </div>
  );
}

export default Navbar;
