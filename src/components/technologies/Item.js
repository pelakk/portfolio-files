import React from 'react';
import '../../App.css';
import { Div } from './Technologies.styled.js';

function Technologies(props) {

    var width = '';

    switch (props.level) {
        case 'Advanced':
            width = '75%';
            break;
        case 'Regular':
            width = '50%';
            break;
        case 'Beginner':
            width = '25%';
            break;
        default:
            width = '25%';
            break;
    }

  return (
    <Div>
        <p><span>{props.technology}</span> <span>{props.level}</span></p>
        <div>
            <hr style={{width: width}} />
        </div>
    </Div>
  );
}

export default Technologies;
