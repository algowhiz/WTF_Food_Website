import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <div className=" flex w-[100%] justify-between">
        <div className="logo-container flex justify-between">
            <img className='w-[100px]' src={logo} alt="" /> <h3 className='mt-8 font-bold'>Wonderful Tastes Forward</h3>
        </div>
        <div className="flex justify-items-end mr-4 justify-center mt-8">
            <ul className=' flex gap-10 justify-center'>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/contact">
                  <li>Contact</li>
                </Link>
                <Link to="/cart">
                  <li>Cart</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Nav