import { Form, FormControl, Button } from 'react-bootstrap';

function SearchBox() {
    return (
      <div className="background-image"> 
      <h1 className="searchbox-title">Explore more artworks</h1>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Enter keyword"
          className="input"
          aria-label="Search"
        />
        <Button className="search-button" variant="outline-success">Search</Button>
      </Form>
      </div>
    )
  }
  
  export default SearchBox