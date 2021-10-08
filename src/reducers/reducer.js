import { SET_DETAIL_MOVIE } from "./actions";

const setDetailMovie = (state = null, action) => {
    switch (action.type) {
      case SET_DETAIL_MOVIE:
        return action.loaddata;
  
      default:
        return state;
    }
}
export default setDetailMovie