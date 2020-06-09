export default function(state= {}, action){
    switch(action.type){
        case 'ADD_BUS':
            return {state,success:action.payload}
        case 'BUS_LIST':
            return action.payload
        default:
            return state;
    }
}

