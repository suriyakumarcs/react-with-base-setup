import {
  FETCH_SITE_LIST_REQUEST,
  FETCH_SITE_LIST_SUCCESS,
  FETCH_SITE_LIST_FAILURE,
} from './actionTypes';

import { SiteListActions, SiteListState } from './types';

const initialState: SiteListState = {
  pending: false,
  siteList: [],
  error: null,
};

export default (state = initialState, action: SiteListActions) => {
  switch (action.type) {
    case FETCH_SITE_LIST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SITE_LIST_SUCCESS:
      return {
        ...state,
        pending: false,
        siteList: action.payload.siteList,
        error: null,
      };
    case FETCH_SITE_LIST_FAILURE:
      return {
        ...state,
        pending: false,
        siteList: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
