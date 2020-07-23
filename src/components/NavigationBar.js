import React, { useCallback } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import debounce from 'lodash/debounce';
import logo from '../assets/logo.png'

const NavigationBar = ({ searchFn }) => {
  const debouncedSearch = useCallback(debounce(term => searchFn(term), 1000), []);

  return (  
    <div>            
      <NavBar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <NavBar.Brand>
            <img src={logo} height="50"/>
          </NavBar.Brand>
          <NavBar.Toggle></NavBar.Toggle>
          <NavBar.Collapse>
            <Nav className="mr-auto d-flex align-items-center">
              <Nav.Link href="#latest">Latest</Nav.Link>
              <Nav.Link href="#decks">Decks</Nav.Link>
              <Nav.Link href="#sets">Sets</Nav.Link>
              <Nav.Link href="#archetypes">Archetypes</Nav.Link>
              <Nav.Link href="#deck-builder">Deck Builder</Nav.Link>
            </Nav>
            <Form>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text><i className="fa fa-search"></i></InputGroup.Text>
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
