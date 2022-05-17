import React from "react";
import SingleArt from "../components/SingleArt";
import { Link } from "react-router-dom";
import NavOne from "../components/NavOne";

function Main() {
  return (
    <div>
      <NavOne />
      <div className="header-image">
        <Link className="link" to={`/arts`}>
          <h1 className="headerimage-text">Explore more artworks</h1>
        </Link>
      </div>
      <SingleArt />
    </div>
  );
}

export default Main;
