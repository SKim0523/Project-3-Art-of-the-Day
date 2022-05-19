import { Link } from "react-router-dom";

function SearchResults(props) {
  // if (!props.results) return null;
  if (!props.results)
    return (
      <p className="no-results-message">
      Please enter a keyword to retrieve artworks.
      </p>
    );
  if (props.results.length === 0)
    return (
      <p className="no-results-message">
        No results. Please try a different keyword.
      </p>
    );

  const mapArtWork = props.results.map((art) => {
    return (
      <div className="card" key={art.id}>
        <Link to={`/arts/${art.id}`}>
          <img
            className="item card-img-top"
            src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`}
            alt={art.alt_text}
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
