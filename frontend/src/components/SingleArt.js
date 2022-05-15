import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom" 


function SingleArt() {
  const [art, setArt] = useState(null);
  const {artId} = useParams()

  const getArt = () => {
    fetch(
      `https://api.artic.edu/api/v1/artworks/${artId || Math.floor(
        Math.random() * 116127
      )}?fields=id,title,image_id`
    )
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw new Error("Art not found");
      })
      .then((response) => response.json())
      .then((response) => setArt(response.data))
      .catch((error) => {
        console.log(error);
        getArt();
      });
  };
  useEffect(() => getArt(), []);

  if (!art) return <h2>Loading</h2>;

  return (
    <div className="container">
      <div className="box-1">
        <img
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/800,/0/default.jpg`}
          alt="test"
        />
      </div>
      <div className="box-2">
        <p>Placeholder text</p>
      </div>
    </div>
  );
}

export default SingleArt;
