import {CountriesActionTypes as ActionTypes} from '../types';

export const fetchCountries = (searchQuery = '') => ({
  type: ActionTypes.fetch_countries,
  searchQuery,
});

export const fetchCountriesResult = (hasError, countries) => ({
  type: ActionTypes.fetch_countries_result,
  hasError,
  countries,
});
