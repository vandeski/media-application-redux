import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { mediaAPI } from "../mediaAPI";
import { Media } from "../../types/Media";
import {
  LOAD_MEDIA_REQUEST,
  LOAD_MEDIA_SUCCESS,
  LOAD_MEDIA_FAILURE,
  SAVE_MEDIA_REQUEST,
  SAVE_MEDIA_SUCCESS,
  SAVE_MEDIA_FAILURE,
  MediaState,
} from "./mediaTypes";

//action creators
export function loadMediaList(): ThunkAction<
  void,
  MediaState,
  null,
  Action<string>
> {
  return (dispatch: any) => {
    dispatch({ type: LOAD_MEDIA_REQUEST });
    return mediaAPI
      .get()
      .then((data) => {
        dispatch({
          type: LOAD_MEDIA_SUCCESS,
          payload: { mediaList: data },
        });
      })
      .catch((error) => {
        dispatch({ type: LOAD_MEDIA_FAILURE, payload: error });
      });
  };
}

export function saveMedia(
  media: Media
): ThunkAction<void, MediaState, null, Action<string>> {
  return (dispatch: any) => {
    dispatch({ type: SAVE_MEDIA_REQUEST });
    return mediaAPI
      .put(media)
      .then((data: any) => {
        dispatch({ type: SAVE_MEDIA_SUCCESS, payload: data });
      })
      .catch((error: any) => {
        dispatch({ type: SAVE_MEDIA_FAILURE, payload: error });
      });
  };
}
