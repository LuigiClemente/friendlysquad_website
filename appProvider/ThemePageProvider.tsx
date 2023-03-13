import React, { createContext, useContext, useState } from "react"

const Context = createContext(null)

export const ThemePageProvider = ({ children }) => {
  const [theme, setTheme] = useState(false)
  // get from local storage value of theme

  const [isDarkMode, setIsDarkMode] = useState()

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        isDarkMode,
        setIsDarkMode
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useAppProvider = () => useContext(Context)
