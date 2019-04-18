import { combineReducers } from "redux";
import dataReducer from './dataReducer.js'

const rootReducer = combineReducers({
  school_data: dataReducer,
});

export default rootReducer;