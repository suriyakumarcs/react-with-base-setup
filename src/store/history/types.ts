import {
  FETCH_HISTORY_REQUEST,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAILURE,
} from './actionTypes';

export interface History {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface HistoryState {
  pending: boolean;
  historyList: History[];
  error: string | null;
}

export interface FetchHistorySuccessPayload {
  historyList: History[];
}

export interface FetchHistoryFailurePayload {
  error: string;
}

export interface FetchHistoryRequest {
  type: typeof FETCH_HISTORY_REQUEST;
}

export type FetchHistorySuccess = {
  type: typeof FETCH_HISTORY_SUCCESS;
  payload: FetchHistorySuccessPayload;
};

export type FetchHistoryFailure = {
  type: typeof FETCH_HISTORY_FAILURE;
  payload: FetchHistoryFailurePayload;
};

export type HistoryActions =
  | FetchHistoryRequest
  | FetchHistorySuccess
  | FetchHistoryFailure;
