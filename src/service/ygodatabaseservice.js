import axios from 'axios';
import * as _ from 'lodash';

const BASE_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

export const searchCards = (params, pageInfo) => {
  return axios.get(BASE_URL, fixParams(params, pageInfo));
};

const fixParams = (params, pageInfo) => {
  const processedPageInfo = {
    num: (pageInfo.size).toString(),
    offset: ((pageInfo.page - 1) * pageInfo.size).toString()
  };

  const combinedParams = {
    ...params,
    ...processedPageInfo
  };

  const cleanParams = { params: _.pickBy(combinedParams) };

  return cleanParams;
};