import {
  FETCH_HISTORY_REQUEST,
  FETCH_HISTORY_FAILURE,
  FETCH_HISTORY_SUCCESS,
} from './actionTypes';
import {
  FetchHistoryRequest,
  FetchHistorySuccess,
  FetchHistorySuccessPayload,
  FetchHistoryFailure,
  FetchHistoryFailurePayload,
} from './types';

export const fetchHistoryRequest = (): FetchHistoryRequest => ({
  type: FETCH_HISTORY_REQUEST,
});

export const fetchHistorySuccess = (
  payload: FetchHistorySuccessPayload
): FetchHistorySuccess => ({
  type: FETCH_HISTORY_SUCCESS,
  payload,
});

export const fetchHistoryFailure = (
  payload: FetchHistoryFailurePayload
): FetchHistoryFailure => ({
  type: FETCH_HISTORY_FAILURE,
  payload,
});
