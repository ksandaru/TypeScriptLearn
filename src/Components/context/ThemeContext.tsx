import React, {createContext} from "react";
import {Theme} from "./Theme";

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(Theme)
export const ThemeContextProvider = ({children,}: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
}
