import { combineReducers } from "redux";

import {addValue, addnew} from "./Reducer";
const rootReducer = combineReducers({addValue, addnew})


export default rootReducer