import {
  FETCH_SITE_LIST_REQUEST,
  FETCH_SITE_LIST_FAILURE,
  FETCH_SITE_LIST_SUCCESS,
} from './actionTypes';
import {
  FetchSiteListRequest,
  FetchSiteListSuccess,
  FetchSiteListSuccessPayload,
  FetchSiteListFailure,
  FetchSiteListFailurePayload,
} from './types';

export const fetchSiteListRequest = (): FetchSiteListRequest => ({
  type: FETCH_SITE_LIST_REQUEST,
});

export const fetchSiteListSuccess = (
  payload: FetchSiteListSuccessPayload
): FetchSiteListSuccess => ({
  type: FETCH_SITE_LIST_SUCCESS,
  payload,
});

export const fetchSiteListFailure = (
  payload: FetchSiteListFailurePayload
): FetchSiteListFailure => ({
  type: FETCH_SITE_LIST_FAILURE,
  payload,
});
