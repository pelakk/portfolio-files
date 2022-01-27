import React from 'react';
import '../../App.css';
import { Container } from './Technologies.styled.js';
import Item from './Item'
import { techs, additionalTechs } from './TechnologiesList';

function Technologies() {

  return (
    <Container id='technologies'>
      <p className='text-heading heading'>Technologies</p>

      <div style={{marginBottom: 100}}>
        {techs.map(tech => (
            <Item key={tech.id} technology={tech.name} level={tech.level} />
        ))}
      </div>
      

      <p className='text-heading heading2'>Additional technologies and skills</p>

      <div className='listWrapper'>
        <ul>
          {additionalTechs.map(element => (
            <li className='text-md' key={element.id}>{element.name}</li>
          ))}
        </ul>
      </div>

    </Container>
  );
}

export default Technologies;
