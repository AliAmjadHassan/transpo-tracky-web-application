import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import Buses from './BusReducer';
const rootReducer = combineReducers({
  Buses,
  form: formReducer,
});

export default rootReducer;
