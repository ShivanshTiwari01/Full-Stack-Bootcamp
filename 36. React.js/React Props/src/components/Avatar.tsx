import React from 'react';

function Avatar(props: { image: string }) {
  return <img className="circle-img" src={props.image} alt="Ronaldo" />;
}

export default Avatar;
