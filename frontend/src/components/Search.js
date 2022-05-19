import { Form, FormControl, Button } from "react-bootstrap";
const Search = (props) => {
  return (
    <>
      <Form onSubmit={props.handleSubmit}>
        <FormControl
          placeholder="Enter keyword"
          className="input"
          aria-label="Search"
          type="text"
          onChange={props.handleChange}
          value={props.query}
        />
        <Button 
        className="search-button"
        type="submit"
        >Search</Button>
      </Form>
    </>
  );
};

export default Search;
