import React, { useState, useEffect } from 'react';
import { searchCards } from '../../service/ygodatabaseservice';
import CardSearchForm from '../../components/CardSearchForm';
import CardSearchResults from '../../components/CardSearchResults';
import Loading from '../../components/Loading';
import CardSearchContext from '../../context/CardSearchContext';

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
      .catch(err => setSearchResults({}))
      .finally(() => setLoadingResults(false));
  };

  const paginate = () => {

  };

  return (
    <div>
      <CardSearchContext.Provider value={{ params, setParams, pageInfo, setPageInfo, search }}>
        <CardSearchForm />
        <div className="mt-3"></div>
        {loadingResults 
          ? <Loading /> 
          : searchResults ? <CardSearchResults searchResults={searchResults} /> : null
        }
      </CardSearchContext.Provider>
    </div>
  );
};

export default CardSearch;
