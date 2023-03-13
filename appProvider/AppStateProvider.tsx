import { createContext, useContext, useState } from "react"

const Context = createContext({})

export const AppStateProvider = ({ children }: any) => {
  const [currentMenu, setCurrentMenu]: any = useState()



    //---------------------------------------------------------------- buttons -----------------------------------------------
    const [fontSizeButtons, setFontSizeButtons] = useState("1rem")
    const [backgroundColorButtons, setBackgroundColorButtons] = useState("#5BD62A")
    const [colorButtons, setColorButtons] = useState("#fff")
    const [fontButtons, setFontButtons] = useState("Roboto")
    const [dialogOpenButtons, setDialogOpenButtons] = useState(false)
    const [dialogOpenButtons2, setDialogOpenButtons2] = useState(false)
    // border for buttons
    const [borderBottomColorButtons, setBorderBottomColorButtons] = useState("#c3c3c3")
    const [borderRightColorButtons, setBorderRightColorButtons] = useState("#c3c3c3")
    const [borderLeftColorButtons, setBorderLeftColorButtons] = useState("#c3c3c3")
    const [borderTopColorButtons, setBorderTopColorButtons] = useState("#c3c3c3")
    // border width
    const [borderRightWidthButtons, setBorderRightWidthButtons] = useState("0.5")
    const [borderLeftWidthButtons, setBorderLeftWidthButtons] = useState("0.5")
    const [borderTopWidthButtons, setBorderTopWidthButtons] = useState("0.5")
    const [borderBottomWidthButtons, setBorderBottomWidthButtons] = useState("0.5")
    // border style
    const [borderRightStyleButtons, setBorderRightStyleButtons] = useState("solid")
    const [borderLeftStyleButtons, setBorderLeftStyleButtons] = useState("solid")
    const [borderTopStyleButtons, setBorderTopStyleButtons] = useState("solid")
    const [borderBottomStyleButtons, setBorderBottomStyleButtons] = useState("solid")
    // border radius border-top-right-radius
    const [borderTopRightRadiusButtons, setBorderTopRightRadiusButtons] = useState("5")
    const [borderTopLeftRadiusButtons, setBorderTopLeftRadiusButtons] = useState("5")
    const [borderBottomRightRadiusButtons, setBorderBottomRightRadiusButtons] = useState("5")
    const [borderBottomLeftRadiusButtons, setBorderBottomLeftRadiusButtons] = useState("5")
    // padding for buttons
    const [paddingRightButtons, setPaddingRightButtons] = useState("15")
    const [paddingLeftButtons, setPaddingLeftButtons] = useState("15")
    const [paddingTopButtons, setPaddingTopButtons] = useState("10")
    const [paddingBottomButtons, setPaddingBottomButtons] = useState("10")
    // margin for buttons
    const [marginRightButtons, setMarginRightButtons] = useState("0")
    const [marginLeftButtons, setMarginLeftButtons] = useState("0")
    const [marginTopButtons, setMarginTopButtons] = useState("0")
    const [marginBottomButtons, setMarginBottomButtons] = useState("0")
  return (
    <Context.Provider
      value={{
        currentMenu,
        setCurrentMenu,
        // for buttons
        fontSizeButtons,
        setFontSizeButtons,
        backgroundColorButtons,
        setBackgroundColorButtons,
        colorButtons,
        setColorButtons,
        fontButtons,
        setFontButtons,
        //  border background color
        borderBottomColorButtons,
        setBorderBottomColorButtons,
        borderRightColorButtons,
        setBorderRightColorButtons,
        borderLeftColorButtons,
        setBorderLeftColorButtons,
        borderTopColorButtons,
        setBorderTopColorButtons,
        // border width
        borderRightWidthButtons,
        setBorderRightWidthButtons,
        borderLeftWidthButtons,
        setBorderLeftWidthButtons,
        borderTopWidthButtons,
        setBorderTopWidthButtons,
        borderBottomWidthButtons,
        setBorderBottomWidthButtons,
        // border style
        borderRightStyleButtons,
        setBorderRightStyleButtons,
        borderLeftStyleButtons,
        setBorderLeftStyleButtons,
        borderTopStyleButtons,
        setBorderTopStyleButtons,
        borderBottomStyleButtons,
        setBorderBottomStyleButtons,
        // border radius border-top-right-radius
        borderTopRightRadiusButtons,
        setBorderTopRightRadiusButtons,
        borderTopLeftRadiusButtons,
        setBorderTopLeftRadiusButtons,
        borderBottomRightRadiusButtons,
        setBorderBottomRightRadiusButtons,
        borderBottomLeftRadiusButtons,
        setBorderBottomLeftRadiusButtons,
        // padding
        paddingRightButtons,
        setPaddingRightButtons,
        paddingLeftButtons,
        setPaddingLeftButtons,
        paddingTopButtons,
        setPaddingTopButtons,
        paddingBottomButtons,
        setPaddingBottomButtons,
        // margin
        marginRightButtons,
        setMarginRightButtons,
        marginLeftButtons,
        setMarginLeftButtons,
        marginTopButtons,
        setMarginTopButtons,
        marginBottomButtons,
        setMarginBottomButtons,
        // for buttons dialog
        dialogOpenButtons,
        setDialogOpenButtons,
        dialogOpenButtons2,
        setDialogOpenButtons2,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useAppStateProvider = () => useContext(Context)
