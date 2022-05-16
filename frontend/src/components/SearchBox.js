import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

function SearchBox() {
    const [query, setQuery] = useState("")
    const[results, setResults] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()
        const searchArts = () => {
        fetch(
            `https://api.artic.edu/api/v1/artworks/search?q=${query}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error;
              }
              return response.json();
            })
            .then((response) => setResults(response.data))
            .catch((error) => {
             console.log(error)
            });
        };
    }
    

    function handleChange(e) {
        setQuery(e.target.value)
    }

    return (
      <div className="background-image"> 
      <h1 className="searchbox-title">Explore more artworks</h1>
      < Search handleSubmit={handleSubmit} handleChange={handleChange} query={query} />
      < SearchResults results={results}/>
      </div>
    )
  }
  
  export default SearchBox