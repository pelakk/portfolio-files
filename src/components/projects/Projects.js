import React from 'react';
import '../../App.css';
import Button from '../button/Button';
import { Container } from './Projects.styled.js';

function Projects() {

  return (
    <Container id='projects'>
      <p className='text-heading heading'>Projects</p>

      <div className='grid' >

        <div className='col'>

          <div className='proj'>
            <img src={require('../../assets/images/topkaminecraft.png')} alt="topkaminecraft.pl" />
            <p className='text-xl'>Topkaminecraft</p>
            <hr />
            <p>Innovative and probably the best polish list of Minecraft server which was built in Angular 11 with bootstrap and Java backend.</p>
            <p style={{width: '100%'}}><Button children={'Look it up'} fontSize={'font-sm'} buttonSize={'btn-sm'} /></p>
          </div>

        </div>

        <div className='col'>

          <div className='proj'>
            <img src={require('../../assets/images/foodapp.png')} alt="food app" />
            <p className='text-xl'>Fast food app</p>
            <hr />
            <p>Fully designed and made using React Native. It was created especially for the portfolio.</p>
            <p style={{width: '100%'}}><Button children={'Look it up'} fontSize={'font-sm'} buttonSize={'btn-sm'} /></p>
          </div>

        </div>
        
      </div>

      <div className='grid' >

        <div className='col'>

          <div className='proj'>
            <img src={require('../../assets/images/todolist.png')} alt="todolist" />
            <p className='text-xl'>Simple todo list for web and simple todo app for phone</p>
            <hr />
            <p>Simple todo list with removable todos saving in the local storage.</p>
            <p style={{width: '100%'}}><Button children={'Look it up'} fontSize={'font-sm'} buttonSize={'btn-sm'} /></p>
          </div>

        </div>

        <div className='col'>

          <div className='proj'>
            <img src={require('../../assets/images/foodapp.png')} alt="todolist" />
            <p className='text-xl'>Fast food app</p>
            <hr />
            <p>Fully designed and made using React Native. It was created especially for the portfolio.</p>
            <p style={{width: '100%'}}><Button children={'Look it up'} fontSize={'font-sm'} buttonSize={'btn-sm'} /></p>
          </div>

        </div>
        
      </div>

    </Container>
  );
}

export default Projects;
