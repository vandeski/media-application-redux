import {
  MediaActionTypes,
  LOAD_MEDIA_REQUEST,
  LOAD_MEDIA_SUCCESS,
  LOAD_MEDIA_FAILURE,
  DELETE_MEDIA_REQUEST,
  DELETE_MEDIA_SUCCESS,
  DELETE_MEDIA_FAILURE,
  SAVE_MEDIA_REQUEST,
  SAVE_MEDIA_SUCCESS,
  SAVE_MEDIA_FAILURE,
  MediaState,
} from "./mediaTypes";
import { Media } from "../../types/Media";

export const initialMediaState: MediaState = {
  mediaList: [],
  loading: false,
  error: undefined,
  page: 1,
};

export function mediaReducer(
  state = initialMediaState,
  action: MediaActionTypes
) {
  switch (action.type) {
    case LOAD_MEDIA_REQUEST:
      return { ...state, loading: true, error: "" };
    case LOAD_MEDIA_SUCCESS:
      let mediaList: Media[];
      const { page } = action.payload;
      if (page === 1) {
        mediaList = action.payload.mediaList;
      } else {
        mediaList = [...state.mediaList, ...action.payload.mediaList];
      }
      return {
        ...state,
        loading: false,
        page,
        mediaList,
        error: "",
      };
    case LOAD_MEDIA_FAILURE:
      return { ...state, loading: false, error: action.payload.message };
    case SAVE_MEDIA_REQUEST:
      return { ...state };
    case SAVE_MEDIA_SUCCESS:
      return {
        ...state,
        mediaList: state.mediaList.map((media: Media) => {
          return media.id === action.payload.id
            ? Object.assign({}, media, action.payload)
            : media;
        }),
      };
    case SAVE_MEDIA_FAILURE:
      return { ...state, error: action.payload.message };
    case DELETE_MEDIA_REQUEST:
      return { ...state };
    case DELETE_MEDIA_SUCCESS:
      return {
        ...state,
        mediaList: state.mediaList.filter(
          (media: Media) => media.id !== action.payload.id
        ),
      };
    case DELETE_MEDIA_FAILURE:
      return { ...state, error: action.payload.message };
    default:
      return state;
  }
}
