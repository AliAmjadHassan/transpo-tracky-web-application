import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import Buses from "./BusReducer";
import Routes from "./routesReducers";
import Sessions from "./sessionReducers";
import Employees from "./EmployeeReducers";
const rootReducer = combineReducers({
  Buses,
  Sessions,
  Routes,
  Employees,
  form: formReducer,
});

export default rootReducer;
