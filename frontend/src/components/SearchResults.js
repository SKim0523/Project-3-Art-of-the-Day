function SearchResults(props) {
  console.log(props)

  const mapArtWork = props.results.map((art, idx) => {
          return(
            <img
            src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
            alt={art.alt_text}
            key={idx}
            />
          )
      }
  )

  return(
      <>
          {mapArtWork}
      </>
  )
}

export default SearchResults