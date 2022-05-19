import React from "react";
import { Link } from "react-router-dom";
import NavOne from "../components/NavOne";
import SingleArt from "../components/SingleArt";

function Main() {
  return (
    <div>
      <div className="header-image">
        <NavOne />
        <Link className="link" to={`/arts`}>
          <h1 className="headerimage-text w3-animate-fading">
            Explore more artworks
          </h1>
        </Link>
      </div>
      <div>
        <SingleArt />
      </div>
    </div>
  );
}

export default Main;
