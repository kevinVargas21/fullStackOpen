import React from 'react'
import ReactDOM from 'react-dom'

const Total = (props) => {

  return (
    <div>
      <p>Total of exercises { props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
    </div>
  )
}

export default Total;
