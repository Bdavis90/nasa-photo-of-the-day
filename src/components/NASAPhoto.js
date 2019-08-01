import React, { useState, useEffect } from "react";
import NASACard from "./NASACard";
import NASATitle from "./NASATitle";
import axios from "axios";

function NASAPhoto() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(
        result => {
          console.log("axios", result);
          setPhoto(result.data);
        },
        [photo]
      )
      .catch(error => console.log(error));
  });

  return (
    <div>
      <div>
        <NASATitle title={photo.title} />
      </div>
      <NASACard imgUrl={photo.url} copyright={photo.copyright} />
    </div>
  );
}

export default NASAPhoto;
