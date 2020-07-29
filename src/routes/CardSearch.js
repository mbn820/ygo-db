import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardSearchForm from '../components/CardSearchForm';
import CardSearchResults from '../components/CardSearchResults';
import Loading from '../components/Loading';
import * as _ from 'lodash';
import CardSearchContext from '../context/CardSearchContext';

const CardSearch = () => {
  const BASE_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  const [searchResults, setSearchResults] = useState(null);
  const [loadingResults, setLoadingResults] = useState(false);
  const [params, setParams] = useState({
    num: 10,
    offset: '0',
    sort: 'Name',
    view: 'Gallery',
    fname: '',
    type: '',
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

  useEffect(() => {
    search(params);

  }, []);

  const search = (params) => {
    const cleanParams = { params: _.pickBy(params) };
    console.log(JSON.stringify(cleanParams))

    setLoadingResults(true);
    axios.get(BASE_URL, cleanParams)
      .then(res => setSearchResults(res.data))
      .catch(err => setSearchResults({}))
      .finally(() => setLoadingResults(false));
  };

  return (
    <div>
      <CardSearchContext.Provider value={{ params, setParams, search }}>
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
