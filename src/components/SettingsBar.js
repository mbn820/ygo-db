import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SettingsBar = () => {
  const properties = ['None', 'Newest', 'ATK', 'DEF', 'Level', 'Name', 'Views', 'Upvotes', 'Downvotes', 'Price', 'TCG Release', 'OCG Release'];

  const orders = ['Auto', 'Asc', 'Desc'];

  const pages = ['25', '50', '100'];

  const languages = ['EN', 'FR', 'DE', 'PT', 'IT'];

  return (
    <div className="mb-3">
      <Card body>
        <Row>
          <Col md={2} sm={12} className="m-0">
            <ButtonGroup size="sm" className="m-0">
              <Button>GRID</Button>
              <Button variant="secondary">LIST</Button>
            </ButtonGroup>
          </Col>
          <Col md={2} sm={12}>
            <Form.Group className="m-0">
              {/* <Form.Label className="small">Sort</Form.Label> */}
              <Form.Control as="select" size="sm">
                {properties.map(property => <option value={property}>{property}</option>)}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={2} sm={12}>
            <Form.Group className="m-0">
              <Form.Control as="select" size="sm">
                {orders.map(order => <option value={order}>{order}</option>)}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={1} sm={12}>
            <Form.Group className="m-0">
              <Form.Control as="select" size="sm">
                {pages.map(page => <option value={page}>{page}</option>)}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={1} sm={12}>
            <Form.Group className="m-0">
              <Form.Control as="select" size="sm">
                {languages.map(language => <option value={language}>{language}</option>)}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4} sm={12}>
            <Pagination className="m-0 float-right" size="sm">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{999}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SettingsBar;

