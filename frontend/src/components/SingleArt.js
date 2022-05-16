import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom" 

function SingleArt() {
  const [art, setArt] = useState(null);
  const {artId} = useParams()

  const getArt = () => {
    fetch(
      `https://api.artic.edu/api/v1/artworks/${artId || Math.floor(Math.random() * 116127)}?fields=id,title,image_id` // Using a function for both fetching a random arkwork and an arwork with an id
    )
      .then((response) => {
        if (!response.ok) { 
            throw new Error
        }
        return response.json();
        })
      .then((response) => setArt(response.data))
      .catch((error) => {
        getArt();
      });
    };

  useEffect(() => getArt(), []);

  if (!art) return <h2 className="loading-message">Loading image.</h2>;

  return (
    <div className="container">
      <div className="box-1">
        <img
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
          alt={art.alt_text}
        />
      </div>
      <div className="box-2">
        <p className="title">{art.title}</p>
        <p>Artist: {art.main_reference_number}</p>
        <p>Style: {art.style_titles}</p>
        <p>Medium: {art.medium_display}</p>
        <p>Dimentions: {art.dimensions}</p>
      </div>
    </div>
  );
}

export default SingleArt;
