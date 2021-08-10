import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.history.pending;

const getHistory = (state: AppState) => state.history.historyList;

const getError = (state: AppState) => state.history.error;

export const getHistoryListSelector = createSelector(
  getHistory,
  (historyList) => historyList
);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
