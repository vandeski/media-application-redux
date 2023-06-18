import { Media } from '../../types/Media';

//action types
export const LOAD_MEDIA_REQUEST = 'LOAD_MEDIA_REQUEST';
export const LOAD_MEDIA_SUCCESS = 'LOAD_MEDIA_SUCCESS';
export const LOAD_MEDIA_FAILURE = 'LOAD_MEDIA_FAILURE';
export const SAVE_MEDIA_REQUEST = 'SAVE_MEDIA_REQUEST';
export const SAVE_MEDIA_SUCCESS = 'SAVE_MEDIA_SUCCESS';
export const SAVE_MEDIA_FAILURE = 'SAVE_MEDIA_FAILURE';
export const DELETE_MEDIA_REQUEST = 'DELETE_MEDIA_REQUEST';
export const DELETE_MEDIA_SUCCESS = 'DELETE_MEDIA_SUCCESS';
export const DELETE_MEDIA_FAILURE = 'DELETE_MEDIA_FAILURE';

interface LoadMediaRequest {
  type: typeof LOAD_MEDIA_REQUEST;
}

interface LoadMediaSuccess {
  type: typeof LOAD_MEDIA_SUCCESS;
  payload: { mediaList: Media[]; page: number };
}

interface LoadMediaFailure {
  type: typeof LOAD_MEDIA_FAILURE;
  payload: { message: string };
}

interface SaveMediaRequest {
  type: typeof SAVE_MEDIA_REQUEST;
}

interface SaveMediaSuccess {
  type: typeof SAVE_MEDIA_SUCCESS;
  payload: Media;
}

interface SaveMediaFailure {
  type: typeof SAVE_MEDIA_FAILURE;
  payload: { message: string };
}

interface DeleteMediaRequest {
  type: typeof DELETE_MEDIA_REQUEST;
}

interface DeleteMediaSuccess {
  type: typeof DELETE_MEDIA_SUCCESS;
  payload: Media;
}

interface DeleteMediaFailure {
  type: typeof DELETE_MEDIA_FAILURE;
  payload: { message: string };
}

export type MediaActionTypes =
  | LoadMediaRequest
  | LoadMediaSuccess
  | LoadMediaFailure
  | SaveMediaRequest
  | SaveMediaSuccess
  | SaveMediaFailure
  | DeleteMediaRequest
  | DeleteMediaSuccess
  | DeleteMediaFailure;

export interface MediaState {
  loading: boolean;
  mediaList: Media[];
  error: string | undefined;
  page: number;
}