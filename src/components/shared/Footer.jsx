import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="footer-container-list">
        <li className="footer-container-list-item"><a href="#" className="footer-container-list-link">Home</a></li>
        <li className="footer-container-list-item"><a href="#" className="footer-container-list-link">Features</a></li>
        <li className="footer-container-list-item"><a href="#" className="footer-container-list-link">Pricing</a></li>
        <li className="footer-container-list-item"><a href="#" className="footer-container-list-link">FAQs</a></li>
        <li className="footer-container-list-item"><a href="#" className="footer-container-list-link">About</a></li>
      </ul>
      <p class="text-center text-body-secondary">&copy; 2024 Homemade Delights, Inc</p>
    </footer>
  )
}

export default Footer