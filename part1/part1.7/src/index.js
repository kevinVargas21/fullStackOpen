import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';






const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const positive = () => {
    if (total === 0) {
      return 0;
    }
    return ( good / total ) * 100+"%";
  };

  const average = () => {
    if (total === 0) {
      return 0;
    }
    return ( good - bad ) / total; 
  };

  const reallyLike = (countGood) => {
    setGood(countGood)
  };

  const like = (countNeutral) => {
    setNeutral(countNeutral)
  };

  const disLike = (countBad) => {
    setBad(countBad)
  };

  return (
    <>
      <div>
        <h1> Give Feedback </h1>

        <button onClick={() => reallyLike(good + 1)}> Good</button>
        <button onClick={() => like(neutral + 1)}> Neutral</button>
        <button onClick={() => disLike(bad + 1)}> Bad</button>

      </div>

      <div>
        <h2> Statistics </h2>
        <p> Good {good}</p>
        <p> Neutral {neutral}</p>
        <p> Bad {bad}</p>
        <p> All {total} </p>
        <p> Positive {positive()}</p>
        <p> Average {average()}</p>

      </div>
    </>
  )
}




createRoot(document.getElementById('root')).render(<App />);
