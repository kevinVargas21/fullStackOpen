import React, { useState } from "react";





const Anecdotes = (props) => {

  var anecdoteList = [
    { text: 'If it hurts, do it more often', likes: 0 },
    { text: 'Adding manpower to a late software project makes it later!', likes: 0 },
    { text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', likes: 0 },
    { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', likes: 0 },
    { text: 'Premature optimization is the root of all evil.', likes: 0 },
    { text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', likes: 0 },
  ]


  const [list, setList] = useState(anecdoteList);
  const [selected, setSelected] = useState(0);


  const randomNumber = () => {
    const number = Math.floor(Math.random() * anecdoteList.length);
    setSelected(number);
  }


  const vote = () => {
    setList((prevList) => ({
      ...prevList,
      [selected]:
      {
        ...prevList[selected],
        likes: prevList[selected].likes + 1,
      }
    }));
  };


  return (
    <>


      <div>
        <p>{list[selected].text} </p>
        <p>{list[selected].likes} </p>

      </div>

      <button onClick={vote} >
        Vote
      </button>
      <button onClick={() => randomNumber()}> Next anecdote</button>

    </>
  )
}

export default Anecdotes;
