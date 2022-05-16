import { Form, FormControl, Button } from 'react-bootstrap';
const Search = (props) => {
    return(
        <>
            <Form>
            <FormControl
            placeholder="Enter keyword"
            className="input"
            aria-label="Search"
            type="text"
            onChange={props.handleChange}
            value={props.query}
            />
            <Button onSubmit={props.handleSubmit} className="search-button" variant="outline-success">Search</Button>
            </Form>
        </>
    )
}

export default Search
