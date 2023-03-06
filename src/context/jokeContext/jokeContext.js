import { createContext, useReducer } from "react";
import jokeReducer from "./jokeReducer";

const JokeContext = createContext()

export const JokeProvider = ({children})=>{
    const intialState = {
        joke:{}
    }
    const [state, dispatch] = useReducer(jokeReducer, intialState)

    return(
        <JokeContext.Provider value={{
            ...state,
            dispatch
        }}>

        {children}
        </JokeContext.Provider>
    )
}

export default JokeContext