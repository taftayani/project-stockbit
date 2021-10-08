import { combineReducers } from "redux";
import setDetailMovie from "./reducer";

const allReducer = combineReducers({
        detailmovie: setDetailMovie
    })
export default allReducer;