import React from 'react';

function Detail(props: { detailInfo: string }) {
  return <p className="info">{props.detailInfo}</p>;
}

export default Detail;
