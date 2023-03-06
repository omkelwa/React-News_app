import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext()




export const NewsProvider = ({ children }) => {

    const intialState = {
        news: [
            {
                title: "",
                content:"",
                description:"",
                url : "",
                urlToImage:"",
            }
        ]
    }


    const [state, dispatch] = useReducer(NewsReducer , intialState)



    return (
        <NewsContext.Provider value={
            {
                ...state, dispatch,
                // news:state.news
            }
        }>
            {children}
        </NewsContext.Provider>
    )
}
export default NewsContext