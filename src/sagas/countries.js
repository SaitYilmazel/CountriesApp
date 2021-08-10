import {call, put, takeLatest} from 'redux-saga/effects';
import {CountriesActionTypes as ActionTypes} from '../types';
import {fetchCountriesResult} from '../actions/countries';
import {fetch_countries_api} from '../api/webApi';
function* fetchCountriesSaga(action) {
  try {
    const {searchQuery} = action;
    const response = yield call(fetch_countries_api,searchQuery);
    yield put(fetchCountriesResult(false, response.data));
  } catch (e) {
    yield put(fetchCountriesResult(true));
  }
}

export default [takeLatest(ActionTypes.fetch_countries, fetchCountriesSaga)];
