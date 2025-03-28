import React from 'react';

function Card(props: {
  name: string;
  image: string;
  position: string;
  club: string;
  country: string;
}) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.image} alt="Ronaldo" />
      </div>
      <div className="bottom">
        <p className="info">{props.position}</p>
        <p className="info">{props.club}</p>
        <p className="info">{props.country}</p>
        <p>Country: Portugal</p>
      </div>
    </div>
  );
}

export default Card;
