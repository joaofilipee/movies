// hooks
import { createContext, useState } from "react";

export const SearchedQueryContext  = createContext()

export const SearchedQueryContextProvider = ({children}) => {

    const [searchedQuery, setSearchedQuery] = useState(null)

    return (
        <SearchedQueryContext.Provider value={{searchedQuery, setSearchedQuery}}>
            {children}
        </SearchedQueryContext.Provider>
    )
}

