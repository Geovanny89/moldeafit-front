// Footer.js
import React from 'react';
import { FaWhatsapp, FaEnvelope,  FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import './footer.css';

export default function Footer() {
  
  return (
    <footer className='footer'>
      <hr />
      <div className='footer-container'>
        <div className='contact-address-container'>
          <div className='contact-section'>
            <h5>Contáctanos</h5>
            <a href='https://wa.me/message/5IMPIB6OOI6XE1' target='_blank'><FaWhatsapp className='whatsapp-icon' />  +57 312 4433326</a>
            <a href="mailto:gcasadiegosr13@gmail.com"><FaEnvelope className='email-icon' /> gcasadiegosr13@gmail.com</a>
          </div>
          <div className='address-section'>
            <h5>Dirección: </h5>
            <p>Calle 8b #3n-22 Cúcuta-Norte de Santander</p>
            <p>Trigal del Norte</p>
          </div>
        </div>

        
      </div>
      
      <div className="social-section">
        <h2>Síguenos</h2>
        <div className="social-icons">
          <a href='https://www.facebook.com/profile.php?id=61566852370203' target="_blank" className="facebook-icon" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href='https://www.instagram.com/moldea_fit?igsh=d2d0MWRlazBxN3lp' target="_blank" className="instagram-icon" rel="noopener noreferrer"><FaInstagram /></a>
          <a href='https://www.tiktok.com/@moldea_fit' target="_blank" className="tiktok-icon" rel="noopener noreferrer"><FaTiktok /></a>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>copyright @Gecaro</p>
      </div>

    </footer>
  );
}
