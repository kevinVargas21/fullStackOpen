import React from 'react'
import ReactDOM from 'react-dom'

const Part3 = (props) => {   

    return (
        <div>
            <p>
                {props.parts[2].name} {props.parts[2].exercises}
            </p>
        </div>
    )
};

export default Part3;
