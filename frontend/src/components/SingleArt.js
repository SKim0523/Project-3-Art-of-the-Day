import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleArt() {
  const [art, setArt] = useState(null);
  const { artId } = useParams();

  // Fetch a random arkwork (or an arwork with an artId)
  const getArt = () => {
    fetch(
      `https://api.artic.edu/api/v1/artworks/${
        artId || Math.floor(Math.random() * 116127)
      }?fields=title,image_id,artist_display,style_title,medium_display,dimensions,fiscal_year&query[term][is_public_domain]=true`
    )
      .then((response) => {
        if (!response.ok) {
          throw Error;
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
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/600,/0/default.jpg`}
          alt={art.alt_text}
        />
      </div>
      <div className="box-2">
        <p className="title">{art.title || "Information not found"}</p>
        <p><span className="list-item">Artist: </span>{art.artist_display || "Information not found"}</p>
        <p><span className="list-item">Year: </span>{art.fiscal_year || "Information not found"}</p>
        <p><span className="list-item">Style: </span>{art.style_title || "Information not found"}</p>
        <p><span className="list-item">Medium: </span>{art.medium_display || "Information not found"}</p>
        <p><span className="list-item">Dimentions: </span>{art.dimensions || "Information not found"}</p>
      </div>
    </div>
  );
}

export default SingleArt;
