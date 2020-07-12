export default function (state = {}, action) {
  switch (action.type) {
    case "MAP_Co_ORDINATE":
      return {...state,  mapLocation: action.payload };
    default:
      return state;
  }
}
