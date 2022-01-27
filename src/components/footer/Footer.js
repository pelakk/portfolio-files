import React from 'react';
import '../../App.css';
import { Container } from './Footer.styled.js';

function Footer() {

  return (
    <Container>
      <div className='grid' >
        <div style={{marginBottom: 30}} >
          <p className='text-md'>Email:</p>
          <p className='text-md'>matuszynski.dawid00@gmail.com</p>
        </div>
        <div>
          <ul className="socialLinks">
            <li className='social-link'>
              <a href='https://github.com/pelakk' target={'_blank'} rel="noreferrer"><img src={require('../../assets/icons/github.png')} alt="social" /></a>
            </li>
            <li className='social-link'>
              <a href='https://www.linkedin.com/in/dawid-matuszy%C5%84ski-92093b208/' target={'_blank'} rel="noreferrer"><img src={require('../../assets/icons/linkedin.png')} alt="social" /></a>
            </li>
            <li className='social-link'>
              <a href='https://www.figma.com/@pelak' target={'_blank'} rel="noreferrer"><img src={require('../../assets/icons/figma.png')} alt="social" /></a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
