import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';

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
        <Avatar image={props.image} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.position} />
        <Detail detailInfo={props.club} />
        <Detail detailInfo={props.country} />
        <p>Country: Portugal</p>
      </div>
    </div>
  );
}

export default Card;
