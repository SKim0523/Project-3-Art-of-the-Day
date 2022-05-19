import NavTwo from "../components/NavTwo";
import Search from "../components/Search";
import { useState } from "react";
import SearchResults from "../components/SearchResults";

function Arts() {
  const [query, setQuery] = useState([]);
  const [results, setResults] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `https://api.artic.edu/api/v1/artworks/search?fields=id,alt_text,title,image_id,artist_display,style_title,medium_display,dimensions,fiscal_year&limit=50&q=${query}&query[term][is_public_domain]=true`
    )
      .then((response) => {
        if (!response.ok) {
          throw Error;
        }
        return response.json();
      })
      .then((response) => setResults(response.data))
      .catch((error) => {
        console.log(error);
      });
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <div className="test">
      <NavTwo />
      <div className="artspage-background">
          <div className="background-image">
            <h1 className="searchbox-title w3-animate-fading">
              Explore more artworks
            </h1>
            <Search
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              query={query}
            />
          </div>
            <SearchResults results={results} />
      </div>
    </div>
  );
}

export default Arts;
