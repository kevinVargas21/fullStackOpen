import React from 'react'
import ReactDOM from 'react-dom'

const Part2 = (props) => {


    return (
        <div>
            <p>
                {props.parts[1].name} {props.parts[1].exercises}
            </p>
        </div>
    )
}

export default Part2;
