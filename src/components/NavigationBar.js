import React from 'react'
import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const NavigationBar = props => {
  return (
    <div>            
      <NavBar bg="dark" variant="dark">
        <Container>
          <NavBar.Brand>YGO Database</NavBar.Brand>
        </Container>
      </NavBar>
    </div>
  );
};

export default NavigationBar;
