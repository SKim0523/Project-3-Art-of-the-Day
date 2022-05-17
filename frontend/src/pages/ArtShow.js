import { Link } from "react-router-dom";
import NavTwo from "../components/NavTwo";
import SingleArt from "../components/SingleArt";

function ArtShow() {
    return (
        <div>
        <NavTwo />
        <div className="header-image2">
          <Link className="link" to={`/arts`}>
            <h1 className="headerimage-text">Explore more artworks</h1>
          </Link>
        </div>
        <SingleArt />
      </div>
    );
  }

export default ArtShow