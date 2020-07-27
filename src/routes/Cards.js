import React from 'react';
import SettingsBar from '../components/SettingsBar';
import SearchForm from '../components/SearchForm';
import CardGrid from '../components/CardGrid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import loadingGif from '../assets/loading.gif';
import loadingGif2 from '../assets/loading2.gif';

const Cards = ({ cards, searchFn, loading }) => {
  const search = params => {
    searchFn(params);
  };

  return (
    <div>
      {/* <SettingsBar /> */}
      <Row>
        <Col md={4} sm={12}>
          <SearchForm searchFn={search} />
        </Col>
        <Col md={8} sm={12}>
          {loading
            ? <Card className="text-center" body>
                <Image src={loadingGif}></Image>
                <h2 className="mt-4">Loading.....</h2>
              </Card>
            : <CardGrid cards={cards.data} />
          }
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
