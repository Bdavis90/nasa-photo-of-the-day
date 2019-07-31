import React, { useState, useEffect } from "react";
import NASACard from "./NASACard";
import axios from "axios";

function NASAPhoto() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    setPhoto([]);
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(result => {
        console.log(result);
        setPhoto(result.data);
      })
      .catch(error => console.log(error));
  }, []);

  return <NASACard imgUrl={setPhoto.url} />;
}

export default NASAPhoto;
