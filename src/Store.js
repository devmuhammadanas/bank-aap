import { createStore } from "redux";

import ootReducer from "./reducers/indexReducer";

const store = createStore(ootReducer)

export default store