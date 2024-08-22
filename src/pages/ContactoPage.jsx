import React from 'react';
import './styles/contactoPage.css'

const ContactoPage = () => {
  return (
    <form className='form-container'>
      <h2>Contact</h2>
      <input type="text" placeholder='enter your name' />
      <input type="text" placeholder='enter your email'/>
      <textarea name="comentUser" id="comentUser" placeholder='enter your message'></textarea>
    </form>
  )
}

export default ContactoPage;