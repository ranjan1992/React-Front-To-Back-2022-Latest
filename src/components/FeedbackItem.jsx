import React, { useState } from 'react';

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is an example of a feedback item');

  const handleClick = () => {
    setRating(10);
    setText('My goal is to land into an IT product based company');
  };
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text} </div>
    </div>
  );
}

export default FeedbackItem;
