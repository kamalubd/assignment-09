import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-container'>
            <div className='sitename'><Link to='/'>
                Quizzard
            </Link></div>
            <div className='nav-items'>
            <Link></Link>   
            <Link to='/'>Topics</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blog'>Blog</Link>
            </div>            
        </div>
    );
};

export default Header;