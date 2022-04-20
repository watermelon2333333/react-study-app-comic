import { combineReducers } from "redux";
import { reducer as detailReducer} from "../application/ComicDetails/store/index";
import { reducer as recommendReducer } from '../application/HomeContent/store/index';
import { reducer as contentReducer } from "../application/ComicContent/store";
import { reducer as searchReducer } from "../application/ComicSearch/store";
export default combineReducers({
    recommend: recommendReducer,
    detail:detailReducer,
    content:contentReducer,
    search:searchReducer,
})