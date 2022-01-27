import React, {useState} from 'react';
import '../../App.css';
import './navbar.css';
import { Link } from 'react-scroll';

function Navbar() {

  const [collapsed, setCollapsed] = useState(false);

  const collapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className="container">

      <div className='logoContainer'>
          <img src={require('../../assets/images/logo.png')} alt="eee" />
          <p className="color-primary text-heading"> &nbsp; Portfolio</p>
      </div>

      <div className="collapse" onClick={collapse}>
        <i className={collapsed ? 'fas fa-times' : 'fas fa-bars'} />
      </div>

      <div className={collapsed ? 'navLinks active' : 'navLinks'}>
        <ul className="pageLinks">
          <li className="page-link">
            <Link to="projects" spy={true} smooth={true}>Projects</Link>
          </li>
          <li className="page-link">
            <Link to="technologies" spy={true} smooth={true}>Technologies</Link>
          </li>
          {/* <li className="page-link">
            About me
          </li> */}
        </ul>

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
  );
}

export default Navbar;
