import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import Buses from './BusReducer';
import Routes from './routesReducers';
import Sessions from './sessionReducers';
const rootReducer = combineReducers({
  Buses,
  Sessions,
  Routes,
  form: formReducer,
});

export default rootReducer;
