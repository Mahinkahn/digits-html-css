import React from 'react';
import { Link } from 'react-router-dom';
import digits from '../../../assets/images/digits-logo.png'

const Navbar = () => {

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/login">Login</Link></li>
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 mt-3 max-w-[1440px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a><img src={digits} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex mr-[600px]">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Homepages</a></li>
                    <li tabIndex={0}>
                        <a>
                            company
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Products</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Pricing </a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <p className='mr-5 hover:scale-110 hidden sm:block'>01952054</p>
                <a className="btn btn-primary rounded-full hover:scale-110">Get started</a>
            </div>

        </div>
    );
};

export default Navbar;