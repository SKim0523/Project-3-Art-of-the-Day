import Card from "react-bootstrap/Card";
// import { BrowserRouter as Router, Link } from "react-router-dom";

function SearchResults(props) {
  // // console.log(props)

  if (!props.results) return null;
  // if (props.results.lenth === 0) return <p>No results. Please try a different keyword.</p>

  const mapArtWork = props.results.map((art, idx) => {
    return (
      // <div>
      //   <img
      //     className="item"
      //     src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`}
      //     alt="placeholder"
      //   />
      // </div>

      <div className="card">
        <img
          className="item card-img-top"
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`}
          alt="placeholder"
        />
        <div className="card-body">
          <h5 className="card-title">{art.title}</h5>
          {/* <p className="card-text">{art.artist_display}</p> */}
        </div>
      </div>

    );
  });
  return <div className="wrapper">{mapArtWork}</div>;
}

export default SearchResults;
