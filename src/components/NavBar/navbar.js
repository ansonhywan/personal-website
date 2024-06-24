import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navOptions'>
                <Link to='/' className='navOptionsListItem'>Home</Link>
                <Link to='/about' className='navOptionsListItem'>About Me</Link>
                <Link to='/resume' className='navOptionsListItem'>Resume</Link>
                <Link to='temp' className='navOptionsListItem'>Activities</Link>
            </div>
            <button className='navbarButton'>Contact Me</button>
        </nav>
    )
}

export default Navbar;