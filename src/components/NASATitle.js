import React from "react";

function NASATitle(props) {
  console.log("NASATitle: ", props);
  return <h3 className="title">{props.title}</h3>;
}

export default NASATitle;
