import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGallery from './CardGallery';
import CardSearchSettings from './CardSearchSettings';

const CardSearchResults = ({ searchResults }) => {
  const {meta, data} = searchResults;

  return (
    <>
      <Card>
        <Card.Header>
          <Row>
            <Col sm={12} md={4}>
              <div className="mb-3 mb-sm-3 mb-md-0">
                <strong>Search Results: 1 - {meta.current_rows} of {meta.total_rows}</strong>
              </div>
            </Col>
            <Col sm={12} md={8}>
              <CardSearchSettings />
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <CardGallery cards={data} />
        </Card.Body>  
      </Card> 
    </>
  );
};

export default CardSearchResults;
