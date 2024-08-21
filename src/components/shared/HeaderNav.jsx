import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <div>HeaderNav
        <nav>
            <h1><Link to='/'>Resetas Gastronomicas</Link></h1>
            <ul>
                <li><Link to='/catalogo-de-productos'>Products</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default HeaderNav;