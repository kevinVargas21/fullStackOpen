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
  const [mostPopular, setMostPopular] = useState(null);

  const randomNumber = () => {
    const number = Math.floor(Math.random() * anecdoteList.length);
    setSelected(number);
  }


  const vote = () => {
    const updatedList = list.map((anecdote, index) => {
      if (index === selected) {
        return {...anecdote, likes: anecdote.likes+1};
      }
      return anecdote;
    });
    setList(updatedList);
    updateMostPopular(updatedList);
  };

  const updateMostPopular = (updatedList) => {
    const mostPopularAnecdote = updatedList.reduce((prev, current) => 
      prev.likes > current.likes ? prev : current
    );
    setMostPopular(mostPopularAnecdote);
  }

  console.log(mostPopular)
  return (
    <>


      <div>
        <h1>Anecdote of the day</h1>
        <p>{list[selected].text} </p>
        <p>{list[selected].likes} </p>

      </div>

      <button onClick={vote} >
        Vote
      </button>
      <button onClick={() => randomNumber()}> Next anecdote</button>

      {mostPopular && (
        <div>
          <h2>Most Popular Anecdote:</h2>
          <p>{mostPopular.text}</p>
          <p>Likes: {mostPopular.likes}</p>
        </div>
      )}

    </>
  )
}

export default Anecdotes;
