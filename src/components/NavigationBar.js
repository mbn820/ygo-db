import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import debounce from 'lodash/debounce';
import logo from '../assets/logo.png'

const NavigationBar = ({ searchFn }) => {
  const debouncedSearch = useCallback(debounce(term => searchFn(term), 1000), []);

  return (  
    <div>            
      <NavBar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <NavBar.Brand as={Link} to="/cards">
            <img src={logo} height="50"/>
          </NavBar.Brand>
          <NavBar.Toggle></NavBar.Toggle>
          <NavBar.Collapse>
            <Nav className="mr-auto d-flex align-items-center">
              <Nav.Link as={Link} to="/cards">Cards</Nav.Link>
              <Nav.Link as={Link} to="/decks">Decks</Nav.Link>
              <Nav.Link as={Link} to="/sets">Sets</Nav.Link>
              <Nav.Link as={Link} to="/archetypes">Archetypes</Nav.Link>
              <Nav.Link as={Link} to="/deck-builder">Deck Builder</Nav.Link>
            </Nav>
            <Form>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text variant="primary"><i className="fa fa-search"></i></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="text" placeholder="Search Cards" className="mr-2" onChange={e => debouncedSearch(e.target.value)}></FormControl>
              </InputGroup>
            </Form>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    </div>
  );
};

export default NavigationBar;
