import React from 'react'
import ReactDOM from 'react-dom'
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';

const Content = (props) => {

  return (
    <div>

      <p>
        {props.parts[0].name} {props.parts[0].exercises}
      </p>
      
      <p>
        {props.parts[1].name} {props.parts[1].exercises}
      </p>

      <p>
        {props.parts[2].name} {props.parts[2].exercises}
      </p>

    </div>
  )
};

export default Content;
