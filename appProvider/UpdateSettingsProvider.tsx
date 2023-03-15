import React from "react"
import { createContext, useContext } from "react"

const Context = createContext({})

export const UpdateSettingsProvider = ({ children }: any) => {
  const [borderBottomColor, setBorderBottomColor] = React.useState("")
  const [borderBottomWidth, setBorderBottomWidth] = React.useState("")
  const [borderTopColor, setBorderTopColor] = React.useState("")
  const [borderTopWidth, setBorderTopWidth] = React.useState("")
  const [borderLeftColor, setBorderLeftColor] = React.useState("")
  const [borderLeftWidth, setBorderLeftWidth] = React.useState("")
  const [borderRightColor, setBorderRightColor] = React.useState("")
  const [borderRightWidth, setBorderRightWidth] = React.useState("")
  const [borderRightStyle, setBorderRightStyle] = React.useState("")
  const [borderLeftStyle, setBorderLeftStyle] = React.useState("")
  const [borderTopStyle, setBorderTopStyle] = React.useState("")
  const [borderBottomStyle, setBorderBottomStyle] = React.useState("")
  const [borderTopRightRadius, setBorderTopRightRadius] = React.useState("")
  const [borderTopLeftRadius, setBorderTopLeftRadius] = React.useState("")
  const [borderBottomRightRadius, setBorderBottomRightRadius] = React.useState("")
  const [borderBottomLeftRadius, setBorderBottomLeftRadius] = React.useState("")
  const [paddingTop, setPaddingTop] = React.useState("")
  const [paddingBottom, setPaddingBottom] = React.useState("")
  const [paddingLeft, setPaddingLeft] = React.useState("")
  const [paddingRight, setPaddingRight] = React.useState("")
  const [marginTop, setMarginTop] = React.useState("")
  const [marginBottom, setMarginBottom] = React.useState("")
  const [marginLeft, setMarginLeft] = React.useState("")
  const [marginRight, setMarginRight] = React.useState("")

  const [borderStyle, setBorderStyle] = React.useState("")
  const [borderWidth, setBorderWidth] = React.useState("")
  const [borderColor, setBorderColor] = React.useState("")

  return (
    <Context.Provider
      value={{
        borderColor,
        setBorderColor,
        borderStyle,
        setBorderStyle,
        borderWidth,
        setBorderWidth,
        borderBottomColor,
        setBorderBottomColor,
        borderBottomWidth,
        setBorderBottomWidth,
        borderTopColor,
        setBorderTopColor,
        borderTopWidth,
        setBorderTopWidth,
        borderLeftColor,
        setBorderLeftColor,
        borderLeftWidth,
        setBorderLeftWidth,
        borderRightColor,
        setBorderRightColor,
        borderRightWidth,
        setBorderRightWidth,
        borderRightStyle,
        setBorderRightStyle,
        borderLeftStyle,
        setBorderLeftStyle,
        borderTopStyle,
        setBorderTopStyle,
        borderBottomStyle,
        setBorderBottomStyle,
        borderTopRightRadius,
        setBorderTopRightRadius,
        borderTopLeftRadius,
        setBorderTopLeftRadius,
        borderBottomRightRadius,
        setBorderBottomRightRadius,
        borderBottomLeftRadius,
        setBorderBottomLeftRadius,
        paddingTop,
        setPaddingTop,
        paddingBottom,
        setPaddingBottom,
        paddingLeft,
        setPaddingLeft,
        paddingRight,
        setPaddingRight,
        marginTop,
        setMarginTop,
        marginBottom,
        setMarginBottom,
        marginLeft,
        setMarginLeft,
        marginRight,
        setMarginRight
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useUpdateSettingsProvider = () => useContext(Context)
