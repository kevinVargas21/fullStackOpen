import React from 'react'
import ReactDOM from 'react-dom'

const Part1 = (props) => {

    return (
        <div>
            <p>
                {props.parts[0].name} {props.parts[0].exercises}
            </p>
        </div>
    )
}

export default Part1;
