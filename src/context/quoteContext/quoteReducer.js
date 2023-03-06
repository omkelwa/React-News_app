const quoteReducer = (state, action) =>{
    switch(action.type){
        case "GET_QUOTE" : 
        return{
            ...state,
            quote : action.payload
        }





        default :
        return state
    }
}

export default quoteReducer