import React, { useState, useEffect } from 'react';
import { searchCards } from '../../service/ygodatabaseservice';
import Loading from '../../components/Loading';
import CardSearchContext from '../../context/CardSearchContext';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGallery from '../../components/CardGallery';
import ResultInfo from './components/ResultInfo';
import CardSearchSettings from './components/CardSearchSettings';
import CardSearchPagination from './components/CardSearchPagination';
import CardSearchForm from './components/CardSearchForm';
import NoResultsFound from './components/NoResultsFound';

const CardSearch = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [loadingResults, setLoadingResults] = useState(false);
  const [params, setParams] = useState({
    sort: 'Name',
    view: 'Gallery',
    fname: '',
    type: 'Pendulum Effect Monster',
    race: '',
    attribute: '',
    cardEffect: '',
    banList: '',
    format: '',
    archetype: '',
    rarity: '',
    cardSet: '',
    linkArrow: ''
  });
  const [pageInfo, setPageInfo] = useState({
    size: 10,
    page: 1
  });

  useEffect(() => {
    search(params, pageInfo);
  }, []);

  const search = (params, pageInfo) => {
    setLoadingResults(true);
    searchCards(params, pageInfo)
      .then(res => setSearchResults(res.data))
      .catch(err => setSearchResults(null))
      .finally(() => setLoadingResults(false));
  };

  return (
    <>
      <CardSearchContext.Provider value={{ params, setParams, pageInfo, setPageInfo, search, searchResults }}>
        <CardSearchForm />

        <div className="mt-3"></div>

        {searchResults
          ? <Card>
              <Card.Header>
                <Row>
                  <Col sm={12} md={4}>
                    <ResultInfo />
                  </Col>
                  <Col sm={12} md={8}>
                    <CardSearchSettings />
                  </Col>
                </Row>
              </Card.Header>
              <Card.Footer className="d-flex justify-content-center">
                <CardSearchPagination />
              </Card.Footer> 
              <Card.Body className="p-0">
                {loadingResults ? <Loading /> : <CardGallery cards={searchResults.data} />}
              </Card.Body> 
              <Card.Footer className="d-flex justify-content-center">
                <CardSearchPagination />
              </Card.Footer> 
            </Card>
          : <Card body>
              <NoResultsFound />
            </Card> 
        }
      </CardSearchContext.Provider>
    </>
  );
};

export default CardSearch;
