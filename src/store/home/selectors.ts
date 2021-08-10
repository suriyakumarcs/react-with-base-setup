import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.home.pending;

const getSites = (state: AppState) => state.home.siteList;

const getError = (state: AppState) => state.home.error;

export const getSitesSelector = createSelector(
  getSites,
  (siteList) => siteList
);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
