const NewsReducer = (state, action)=>{
    switch(action.type){

        case "get-news" :
            return{
                ...state,
                news:action.payload
            }


        default:
        return state
    }
}

export default NewsReducer