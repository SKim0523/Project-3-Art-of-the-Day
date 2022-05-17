import {Row, Col, Card} from 'react-bootstrap'

function SearchResults(props) {
  // // console.log(props)

  if (!props.results) return null;
  // if (props.results.lenth === 0) return <p>No results. Please try a different keyword.</p>

  const mapArtWork = props.results.map((art, idx) => {
      return(
        <Row>
          <Col xs={12} md={4} lg={3} key={idx}>
        <Card className="cards">
          <Card.Img
          variant="top"
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`}
          alt="placeholder"
          // alt={art.alt_text}
        />
          <Card.Body>
            <Card.Title>{art.title}</Card.Title>
          </Card.Body>
        </Card>
        </Col>
        </Row>
      )
    }
  )

  return(
    <div>
      <>
     {mapArtWork}
    </>  
    </div> 
  )
  // return (<h1>hello</h1>)
}

export default SearchResults