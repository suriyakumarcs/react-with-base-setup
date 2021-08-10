import {
  FETCH_HISTORY_REQUEST,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAILURE,
} from './actionTypes';

import { HistoryActions, HistoryState } from './types';

const initialState: HistoryState = {
  pending: false,
  historyList: [],
  error: null,
};

export default (state = initialState, action: HistoryActions) => {
  switch (action.type) {
    case FETCH_HISTORY_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_HISTORY_SUCCESS:
      return {
        ...state,
        pending: false,
        historyList: action.payload.historyList,
        error: null,
      };
    case FETCH_HISTORY_FAILURE:
      return {
        ...state,
        pending: false,
        historyList: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
