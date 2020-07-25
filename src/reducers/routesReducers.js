import { act } from "react-test-renderer";

export default function (state = {}, action) {
  switch (action.type) {
    case "MAP_Co_ORDINATE":
      return { ...state, mapLocation: action.payload };
    case "ADD_ROUTE":
      return { ...state, success: action.payload };
    case "ROUTES_LIST":
      return action.payload;
    case "ROUTE_TO_UPDATE":
      return { ...state, routeToUpdate: action.payload };
    case "UPDATE_ROUTE":
      return { ...state, success: action.payload  };
    default:
      return state;
  }
}
