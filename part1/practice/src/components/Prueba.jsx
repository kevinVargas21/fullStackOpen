import React, { useState } from 'react';

const Prueba = () => {
  const texts = {
    'Hello!' : 0,
    'How are you?' :0,
    'I like React':0,
    'This is a random text':0,
    'Have a great day!':0,
  };

  const [randomText, setRandomText] = useState('');
  const [likes, setLikes] = useState(texts);

  const handleRandomTextClick = () => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    setRandomText(texts[randomIndex]);
  };

  const handleLikeClick = () => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [randomText]: prevLikes[randomText] + 1,
    }));
  };

  return (
    <div>
      <button onClick={handleRandomTextClick}>Show Random Text</button>
      {randomText && (
        <div>
          <p>{randomText}</p>
          <button onClick={handleLikeClick}>Like</button>
          <span>Has {likes[randomText]}</span>
        </div>
      )}
    </div>
  );
};

export default Prueba;
