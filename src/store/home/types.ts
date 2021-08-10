import {
  FETCH_SITE_LIST_REQUEST,
  FETCH_SITE_LIST_SUCCESS,
  FETCH_SITE_LIST_FAILURE,
} from './actionTypes';

export interface SiteListState {
  pending: boolean;
  siteList: Site[];
  error: string | null;
}

export interface Site {
  id: number;
  email: string;
  first_name: string;
}

export interface FetchSiteListSuccessPayload {
  siteList: Site[];
}

export interface FetchSiteListFailurePayload {
  error: string;
}

export interface FetchSiteListRequest {
  type: typeof FETCH_SITE_LIST_REQUEST;
}

export type FetchSiteListSuccess = {
  type: typeof FETCH_SITE_LIST_SUCCESS;
  payload: FetchSiteListSuccessPayload;
};

export type FetchSiteListFailure = {
  type: typeof FETCH_SITE_LIST_FAILURE;
  payload: FetchSiteListFailurePayload;
};

export type SiteListActions =
  | FetchSiteListRequest
  | FetchSiteListSuccess
  | FetchSiteListFailure;
