import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardSearchForm from '../../components/CardSearchForm';
import CardSearchResults from '../../components/CardSearchResults';
import Loading from '../../components/Loading';
import * as _ from 'lodash';
import CardSearchContext from '../../context/CardSearchContext';

const CardSearch = () => {
  const BASE_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
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
    const processedPageInfo = {
      num: (pageInfo.size).toString(),
      offset: ((pageInfo.page - 1) * pageInfo.size).toString()
    };
    const combinedParams = {
      ...params,
      ...processedPageInfo
    }
    const cleanParams = { params: _.pickBy(combinedParams) };
    console.log(JSON.stringify({cleanParams}))

    setLoadingResults(true);
    axios.get(BASE_URL, cleanParams)
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
