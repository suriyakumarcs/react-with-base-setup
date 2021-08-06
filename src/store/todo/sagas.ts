import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchTodoFailure, fetchTodoSuccess } from './actions';
import { FETCH_TODO_REQUEST } from './actionTypes';
import { ITodo } from './types';

const getTodos = () =>
  axios.get<ITodo[]>(
    'https://run.mocky.io/v3/9cb66c7c-9e4f-4574-b16d-6a89f2b8f328'
  );

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchTodoSaga(): SagaIterator {
  try {
    const response = yield call(getTodos);
    yield put(
      fetchTodoSuccess({
        todos: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchTodoFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
