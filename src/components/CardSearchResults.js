import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGallery from './CardGallery';
import CardSearchSettings from './CardSearchSettings';
import CardSearchPagination from './CardSearchPagination';
import CardSearchContext from '../context/CardSearchContext';

const CardSearchResults = ({ searchResults }) => {
  const {meta, data} = searchResults;

  const { params, pageInfo } = useContext(CardSearchContext);

  const endPage = Math.min(pageInfo.page * pageInfo.size, meta.total_rows);
  const startPage = Math.max(endPage - pageInfo.size + 1, 1);

  return (
    <>
      <Card>
        <Card.Header>
          <Row>
            <Col sm={12} md={4}>
              <div className="mb-3 mb-sm-3 mb-md-0">
                <strong>Search Results: {startPage} - {endPage} of {meta.total_rows}</strong>
              </div>
            </Col>
            <Col sm={12} md={8}>
              <CardSearchSettings />
            </Col>
          </Row>
        </Card.Header>
        <Card.Footer className="d-flex justify-content-center">
          <CardSearchPagination meta={meta} />
        </Card.Footer> 
        <Card.Body className="">
          <CardGallery cards={data} />
        </Card.Body> 
        <Card.Footer className="d-flex justify-content-center">
          <CardSearchPagination meta={meta} />
        </Card.Footer> 
      </Card> 
    </>
  );
};

export default CardSearchResults;
