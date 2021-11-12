import { SET_DETAIL_MOVIE } from "./actions";

export const setDetail = (loaddata) => {
  return {
    type: SET_DETAIL_MOVIE,
    loaddata,
  };
};
