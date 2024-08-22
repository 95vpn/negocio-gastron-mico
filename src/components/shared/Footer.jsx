import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="footer-container-list">
        <li className="footer-container-list-item"><a href="#" className="footer-container-list-link">Home</a></li>
        <li className="footer-container-list-item"><a href="#" className="footer-container-list-link">Products</a></li>
        <li className="footer-container-list-item"><a href="#" className="footer-container-list-link">Contact</a></li>
        
      </ul>
      <p className="text-center text-body-secondary">&copy; 2024 Homemade Delights, Inc</p>
    </footer>
  )
}

export default Footer