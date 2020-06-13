export default function(state= {}, action){
    switch(action.type){
        case 'ADD_BUS':
            return {state,success:action.payload}
        case 'EDIT_BUS':
            return {state,success:action.payload}
        case 'BUS_LIST':
            return action.payload
        case 'SEARCH_BUS':
            console.log(action)    
        default:
            return state;
    }
}

