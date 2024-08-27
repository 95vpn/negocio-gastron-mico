import React from 'react'
import './styles/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="footer-container-list">
        <li className="footer-container-list-item">
          <Link to="/" className="footer-container-list-link">Home</Link>
        </li>
        <li className="footer-container-list-item">
          <Link to="/catalogo-de-productos" className="footer-container-list-link">Products</Link>
        </li>
        <li className="footer-container-list-item">
          <Link to="/contacto" className="footer-container-list-link">Contact</Link>
        </li>
      </ul>
      <p className="text-center text-body-secondary">&copy; 2024 Homemade Delights, Inc</p>
    </footer>
  )
}

export default Footer