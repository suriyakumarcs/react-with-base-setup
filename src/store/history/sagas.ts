import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchHistoryFailure, fetchHistorySuccess } from './actions';
import { FETCH_HISTORY_REQUEST } from './actionTypes';
import { History } from './types';

const getHistoryList = () =>
  axios.get<History[]>(
    'https://run.mocky.io/v3/9cb66c7c-9e4f-4574-b16d-6a89f2b8f328'
  );

/*
  Worker Saga: Fired on FETCH_HISTORY_REQUEST action
*/
function* fetchHistorySaga(): SagaIterator {
  try {
    const response = yield call(getHistoryList);
    yield put(
      fetchHistorySuccess({
        historyList: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchHistoryFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_HISTORY_REQUEST` action.
  Allows concurrent increments.
*/
function* historySaga() {
  yield all([takeLatest(FETCH_HISTORY_REQUEST, fetchHistorySaga)]);
}

export default historySaga;
