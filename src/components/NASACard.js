import React from "react";

function NASACard(props) {
  console.log("NASACard: ", props);
  return (
    <div>
      <img src={props.imgUrl} />
      <div className="explanation-container">
        <p className="explanation">{props.explanation}</p>
      </div>
    </div>
  );
}

export default NASACard;
