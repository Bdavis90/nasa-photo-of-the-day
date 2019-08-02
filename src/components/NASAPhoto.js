import React, { useState, useEffect } from "react";
import NASACard from "./NASACard";
import NASATitle from "./NASATitle";
import axios from "axios";
import { resolve } from "q";

function NASAPhoto() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=qhapjX3hbVHvsvXmnPTVGEcf5AvyMukgh2Z1Ewyv"
      )
      .then(resolve => {
        console.log("axios", resolve);
        setPhoto(resolve.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="photo-container">
      <div>
        <NASATitle title={photo.title} />
      </div>
      <NASACard imgUrl={photo.url} explanation={photo.explanation} />
    </div>
  );
}

export default NASAPhoto;
