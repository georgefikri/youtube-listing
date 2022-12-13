import axios from 'axios';
import { route, serviceRoute, key, apiKey, searchType, maxResults } from './consts';

export const getVideosList = (type, query, resultsLength) => {
  return axios.get(
    `${route}?${serviceRoute}&${key}=${apiKey}&${searchType}=${type}&q=${query}&${maxResults}=${resultsLength}`
  );
};
