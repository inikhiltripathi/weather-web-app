import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {

    const [search, setSearch] = useState("");
    const [text, setText] = useState("");

    const values = {
        search,
        setSearch,
        text,
        setText
    }

    return <SearchContext.Provider value={values} >{children}</SearchContext.Provider>
}

export const useSearchContext = () => useContext(SearchContext);