import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Statistics, { average, positive, feedBack } from './components/Statistics';
import FeedbackBtn from './components/FeedbackBtn';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const values = [
    { id: 1, valueIt:"itsGood"}, 
    { id: 2, valueIt:"itsNeutral"},
    { id: 3, valueIt:"itsBad"},
  ];
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

  return (
    <>
      <div>
        <h1> Give Feedback </h1>

        {values.map((value, index) => {
          return <FeedbackBtn key={value.id} name={references[index]} function={() => feedBack(value.valueIt)} />
        })}

      </div>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad} total={total}
        positive={() => positive(total, good, bad)}
        average={() => average(total, good, bad)}
      />

   
      
    </>
  )
}




createRoot(document.getElementById('root')).render(<App />);











