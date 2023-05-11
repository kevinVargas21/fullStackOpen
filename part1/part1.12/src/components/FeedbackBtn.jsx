import React from 'react'


const FeedbackBtn = (props) => {

  return (
    <>
      <button onClick={props.function} >
        {props.name}
      </button>
     

    </>
  )
}

export default FeedbackBtn;
