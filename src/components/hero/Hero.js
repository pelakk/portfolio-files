import React from 'react';
import '../../App.css';
import Button from '../button/Button';
import { Container } from './Hero.styled.js';
import { Link } from 'react-scroll';

function Hero() {

  return (
    <Container>
        <p className='text-heading heading'>Welcome to my portfolio</p>
        <p className='text-xl color-secondary desc'>The target of this website is to show my skills and projects I took a part of. Make sure you check my socials to see more. </p>
        <p className='text-xl color-secondary desc' style={{color: '#EDEDED', marginBottom: '2%'}}>This page was fully made in React.</p>
        <p className='buttonContainer'> 
          <Link to="projects" spy={true} smooth={true}>
            <Button children={"Let's begin"} fontSize={'font-xl'} buttonSize={'btn-xl'} />
          </Link>
        </p>
    </Container>
  );
}

export default Hero;
