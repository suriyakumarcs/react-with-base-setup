import { all, fork } from 'redux-saga/effects';

import historySaga from './history/sagas';
import siteSaga from './home/sagas';

export function* rootSaga() {
  yield all([fork(historySaga)]);
  yield all([fork(siteSaga)]);
}
