import React from 'react';
import { Link } from 'react-router-dom';
import './styles/headerNav.css'

const HeaderNav = () => {
    return (
        <div className='header-nav-container'>
            <h1><Link to='/'>Homemade Delights</Link></h1>
            <nav className='header-nav'>
                <ul className='header-nav-list'>
                    <button className='header-nav-list-button'><Link to='/catalogo-de-productos'>Products</Link></button>
                    <button className='header-nav-list-button'><Link to='/contacto'>Contact</Link></button>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderNav;