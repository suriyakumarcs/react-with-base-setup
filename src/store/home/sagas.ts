import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchSiteListFailure, fetchSiteListSuccess } from './actions';
import { FETCH_SITE_LIST_REQUEST } from './actionTypes';
import { getSitesList } from './services';

/*
  Worker Saga: Fired on FETCH_SITE_LIST_REQUEST action
*/
function* fetchSiteListSaga(): SagaIterator {
  try {
    const response = yield call(getSitesList);
    yield put(
      fetchSiteListSuccess({
        siteList: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchSiteListFailure({
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
  yield all([takeLatest(FETCH_SITE_LIST_REQUEST, fetchSiteListSaga)]);
}

export default historySaga;
