import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = props => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Jumbotron>
        <Container>
            <Row>
              <Col sm={12} md={10}>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Type card name" onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
              </Col>
              <Col sm={12} md={2}>
                <Button variant="dark" size="lg" className="btn-block" onClick={(e) => props.searchFn(searchTerm)}>Search</Button>
              </Col>
            </Row>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Header;
