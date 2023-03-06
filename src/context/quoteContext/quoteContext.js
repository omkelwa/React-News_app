import quoteReducer from "./quoteReducer";

const { createContext, useReducer } = require("react");

const quoteContext = createContext()

export const QuoteProvider = ({children}) =>{


    const intialState = {
        quote :{}
    }
    const [state, dispatch] = useReducer(quoteReducer, intialState)
    console.log(state.quote)
    return(
        <quoteContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </quoteContext.Provider>
    )
}

export default quoteContext