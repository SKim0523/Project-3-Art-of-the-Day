import React from "react";
import SingleArt from "../components/SingleArt";
import { Link } from "react-router-dom";
import NavOne from "../components/NavOne";

function Main() {
  return (
    <div>
      <div className="header-image">
      <NavOne />
        <Link className="link" to={`/arts`}>
          <h1 className="headerimage-text w3-animate-fading">Explore more artworks</h1>
        </Link>
      </div>
      <div className="main-background">
      <SingleArt />
      </div>
    </div>
  );
}

export default Main;
