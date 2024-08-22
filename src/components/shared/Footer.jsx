import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer className='footer-container'>
    <div className='container'>
      <p>&copy; 2024 - Johnny Mauricio</p>
      <p>jmjaramillo95@gmail.com</p>
    </div>

    <ul class='social'>
      <li class='social-item'>
        <a href='https://github.com/95vpn'>
          <i class='bx bxl-github'></i>
        </a>
      </li>
      <li class='social-item'>
        <a href='https://www.linkedin.com/in/johnny-herrera-jaramillo/'>
          <i class='bx bxl-linkedin'></i>
        </a>
      </li>
    </ul>
  </footer>
  )
}

export default Footer