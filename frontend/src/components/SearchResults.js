import { Link } from "react-router-dom";

function SearchResults(props) {
  console.log(props.results)
  if (!props.results) return null;
  if (props.results.length === 0)
    return <p className="no-results-message">No results. Please try a different keyword.</p>;
  //@@@@@line #4,5 doesn't work
  const mapArtWork = props.results.map((art, idx) => {
    return ( 
        <div className="card">
          <Link to={`/arts/${art.id}`}>
          <img
            className="item card-img-top"
            src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`}
            alt="placeholder"
          />
          <div className="card-body">
            <h5 className="card-title">{art.title}</h5>
          </div>
          </Link>
        </div>
    );
  });
  return <div className="wrapper">{mapArtWork}</div>;
}

export default SearchResults;
