import React from 'react';
import SettingsBar from '../components/SettingsBar';
import SearchForm from '../components/SearchForm';
import CardGrid from '../components/CardGrid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cards = ({ cards }) => {
  return (
    <div>
      <SettingsBar />
      <Row>
        <Col md={4} sm={12}>
          <SearchForm />
        </Col>
        <Col md={8} sm={12}>
          <CardGrid cards={cards.data} />
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
