import React from "react";

function NASACard(props) {
  console.log("NASACard: ", props);
  return (
    <div>
      <img src={props.imgUrl} />
      <p>{props.copyright}</p>
    </div>
  );
}

export default NASACard;
