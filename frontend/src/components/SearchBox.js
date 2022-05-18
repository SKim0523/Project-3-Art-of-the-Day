import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

function SearchBox() {
  const [query, setQuery] = useState([]);
  const [results, setResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `https://api.artic.edu/api/v1/artworks/search?fields=title,image_id,artist_display,style_title,medium_display,dimensions,fiscal_year&limit=50&q=${query}&query[term][is_public_domain]=true`
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
    <div>
      <div className="background-image">
        <h1 className="searchbox-title">Explore more artworks</h1>
        <Search
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          query={query}
        />
      </div>
      <div>
        <SearchResults results={results} />
      </div>
    </div>
  );
}

export default SearchBox;
