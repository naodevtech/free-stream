import { combineReducers } from "redux";

import mainReducer from "./main";

const rootReducer = combineReducers({
  app: mainReducer,
});

export default rootReducer;
