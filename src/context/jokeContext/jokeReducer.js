const jokeReducer = (state, action) =>{
    switch(action.type){
            case "GET_JOKES" : 
            return{
                ...state,
                joke : action.payload
            }


        default : 
        return state
    }
}

export default jokeReducer