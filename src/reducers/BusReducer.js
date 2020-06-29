export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_BUS":
      return { ...state, success: action.payload };
    case "UPDATE_BUS":
      return { ...state, success: action.payload };
    case "BUS_LIST":
      return action.payload;
    case "CLICKED_BUS":
      return { ...state, clickedBus: action.payload };
    case "CLEAR_CLICKED_BUS":
      return { ...state, clickedBus: action.payload };
    case "DELETE_BUS":
      return { ...state, deleteBus: action.payload };
    default:
      return state;
  }
}
