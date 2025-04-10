import React from 'react';
import '../App.css';

const Card = (props: { title: string; content: string }) => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
