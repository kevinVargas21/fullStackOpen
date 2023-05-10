import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Statistics, { average, positive, feedBack } from './components/Statistics';
import FeedbackBtn from './components/FeedbackBtn';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const values = ["itsGood", "itsNeutral", "itsBad"]
  const references = ["Good", "Neutral", "Bad"]

  const feedBack = (value) => {
    switch (value) {
      case "itsGood":
        setGood(good + 1)
        break;
      case "itsNeutral":
        setNeutral(neutral + 1)
        break;
      case "itsBad":
        setBad(bad + 1)
        break;
      default:
        console.log("error")
    }

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

  const hello1 = () => {
    reallyLike(good + 1)
  };



  return (
    <>
      <div>
        <h1> Give Feedback </h1>

        <button onClick={() => reallyLike(good + 1)}> Good</button>
        <button onClick={() => like(neutral + 1)}> Neutral</button>
        <button onClick={() => disLike(bad + 1)}> Bad</button>

      </div>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad} total={total}
        positive={() => positive(total, good, bad)}
        average={() => average(total, good, bad)}
      />

      <FeedbackBtn name="bye" function={hello1} />


      {values.map((value, index) => {
        return <FeedbackBtn name={references[index]} function={() => feedBack(value)} />
      })}
    </>
  )
}




createRoot(document.getElementById('root')).render(<App />);











