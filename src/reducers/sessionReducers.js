export default function sessionReducers(state={}, action){
    switch (action.type) {
        case "GET_ACTIVE_SESSION":
          return {...state, activeSession: action.payload}
        default:
          return state;
      }
}