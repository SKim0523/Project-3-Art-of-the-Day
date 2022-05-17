import {Container, Row, Col, Card} from 'react-bootstrap'
import {BrowserRouter as Router, Link} from 'react-router-dom'

function SearchResults(props) {
  // // console.log(props)

  if (!props.results) return null;
  // if (props.results.lenth === 0) return <p>No results. Please try a different keyword.</p>

  const mapArtWork = props.results.map((art, idx) => {
      return(
       <div>
         <img className="item"
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`}
          alt="placeholder"
        />
       </div>
      )
    }
  )
  return(
    <div className="wrapper">
     {mapArtWork}
    </div>
  )
}

export default SearchResults