import { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_COLOR_SITE } from "../theme/ConstantColors";

const Context = createContext({});

export const AppProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");
  const [themeCalendar, setThemeCalendar] = useState("light");
  // Editor Toolbar
  const [loading, setLoading] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  const [dbFormat, setDbFormat]: any = useState();
  const [headerDBFormat, setHeaderDBFormat]: any = useState();
  const [giftDBFormat, setGiftDBFormat]: any = useState();

  // Zoom in and out
  const [zoom, setZoom] = useState(1);

  // undo & redo
  const [callUndo, setCallUndo] = useState(false);

  // this is for background and container
  const [dialogOpenBody, setDialogOpenBody] = useState(false);
  const [bodyBackgroundColor, setBodyBackgroundColor] = useState("#fff");
  const [containerBackgroundColor, setContainerBackgroundColor] =
    useState("#fff");
  const [containerShadow, setContainerShadow] = useState(
    "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
  );

  const [openDialogsCustomize, setOpenDialogsCustomize] = useState(false);

  // -------------- for Dialogs Customize

  const [settingDialogOpen, setSettingsDialogOpen] = useState(false);

  //---------------------------------------------------------------- Header
  const [fontSizeHeader, setFontSizeHeader] = useState("1rem");
  const [backgroundColorHeader, setBackgroundColorHeader] =
    useState("transparent");
  const [colorHeader, setColorHeader] = useState("#000");
  const [fontHeader, setFontHeader] = useState("Roboto");
  const [dialogOpenHeader, setDialogOpenHeader] = useState(false);
  // border for Header
  const [borderBottomColorHeader, setBorderBottomColorHeader] =
    useState("#000");
  const [borderRightColorHeader, setBorderRightColorHeader] = useState("#000");
  const [borderLeftColorHeader, setBorderLeftColorHeader] = useState("#000");
  const [borderTopColorHeader, setBorderTopColorHeader] = useState("#000");
  // border width
  const [borderRightWidthHeader, setBorderRightWidthHeader] = useState("0");
  const [borderLeftWidthHeader, setBorderLeftWidthHeader] = useState("0");
  const [borderTopWidthHeader, setBorderTopWidthHeader] = useState("0");
  const [borderBottomWidthHeader, setBorderBottomWidthHeader] = useState("0");
  // border style
  const [borderRightStyleHeader, setBorderRightStyleHeader] = useState("solid");
  const [borderLeftStyleHeader, setBorderLeftStyleHeader] = useState("solid");
  const [borderTopStyleHeader, setBorderTopStyleHeader] = useState("solid");
  const [borderBottomStyleHeader, setBorderBottomStyleHeader] =
    useState("solid");
  // border radius border-top-right-radius
  const [borderTopRightRadiusHeader, setBorderTopRightRadiusHeader] =
    useState("0");
  const [borderTopLeftRadiusHeader, setBorderTopLeftRadiusHeader] =
    useState("0");
  const [borderBottomRightRadiusHeader, setBorderBottomRightRadiusHeader] =
    useState("0");
  const [borderBottomLeftRadiusHeader, setBorderBottomLeftRadiusHeader] =
    useState("0");
  // padding for Header
  const [paddingRightHeader, setPaddingRightHeader] = useState("15");
  const [paddingLeftHeader, setPaddingLeftHeader] = useState("15");
  const [paddingTopHeader, setPaddingTopHeader] = useState("0");
  const [paddingBottomHeader, setPaddingBottomHeader] = useState("0");
  // margin for Header
  const [marginRightHeader, setMarginRightHeader] = useState("0");
  const [marginLeftHeader, setMarginLeftHeader] = useState("0");
  const [marginTopHeader, setMarginTopHeader] = useState("0");
  const [marginBottomHeader, setMarginBottomHeader] = useState("0");

  // ---------------------------------------------------------------- for logo
  const [fontSizeLogo, setFontSizeLogo] = useState("1rem");
  const [backgroundColorLogo, setBackgroundColorLogo] = useState("transparent");
  const [colorLogo, setColorLogo] = useState("#000");
  const [fontLogo, setFontLogo] = useState("Roboto");

  //  border background color

  const [borderBottomColorLogo, setBorderBottomColorLogo] = useState("#000");
  const [borderRightColorLogo, setBorderRightColorLogo] = useState("#000");
  const [borderLeftColorLogo, setBorderLeftColorLogo] = useState("#000");
  const [borderTopColorLogo, setBorderTopColorLogo] = useState("#000");
  // border width
  const [borderRightWidthLogo, setBorderRightWidthLogo] = useState("0");
  const [borderLeftWidthLogo, setBorderLeftWidthLogo] = useState("0");
  const [borderTopWidthLogo, setBorderTopWidthLogo] = useState("0");
  const [borderBottomWidthLogo, setBorderBottomWidthLogo] = useState("0");
  // border style
  const [borderRightStyleLogo, setBorderRightStyleLogo] = useState("solid");
  const [borderLeftStyleLogo, setBorderLeftStyleLogo] = useState("solid");
  const [borderTopStyleLogo, setBorderTopStyleLogo] = useState("solid");
  const [borderBottomStyleLogo, setBorderBottomStyleLogo] = useState("solid");
  // border radius border-top-right-radius
  const [borderTopRightRadiusLogo, setBorderTopRightRadiusLogo] = useState("0");
  const [borderTopLeftRadiusLogo, setBorderTopLeftRadiusLogo] = useState("0");
  const [borderBottomRightRadiusLogo, setBorderBottomRightRadiusLogo] =
    useState("0");
  const [borderBottomLeftRadiusLogo, setBorderBottomLeftRadiusLogo] =
    useState("0");

  // padding
  const [paddingRightLogo, setPaddingRightLogo] = useState("0");
  const [paddingLeftLogo, setPaddingLeftLogo] = useState("0");
  const [paddingTopLogo, setPaddingTopLogo] = useState("0");
  const [paddingBottomLogo, setPaddingBottomLogo] = useState("0");
  // margin
  const [marginRightLogo, setMarginRightLogo] = useState("20");
  const [marginLeftLogo, setMarginLeftLogo] = useState("0");
  const [marginTopLogo, setMarginTopLogo] = useState("0");
  const [marginBottomLogo, setMarginBottomLogo] = useState("20");
  // min width for logo
  const [minWidthLogo, setMinWidthLogo] = useState("120");
  // min height for logo
  const [minHeightLogo, setMinHeightLogo] = useState("60");
  // max width for logo
  const [maxWidthLogo, setMaxWidthLogo] = useState("120");
  // max height for logo
  const [maxHeightLogo, setMaxHeightLogo] = useState("60");
  // for logo dialog
  const [dialogOpenLogo, setDialogOpenLogo] = useState(false);

  // -------------------------------------------------------Modal box
  //---------------------------------------------------------------- ModalBox
  const [fontSizeModalBox, setFontSizeModalBox] = useState("1rem");
  const [backgroundColorModalBox, setBackgroundColorModalBox] =
    useState(DEFAULT_COLOR_SITE);
  const [colorModalBox, setColorModalBox] = useState("#fff");
  const [fontModalBox, setFontModalBox] = useState("Roboto");
  const [dialogOpenModalBox, setDialogOpenModalBox] = useState(false);
  // border for ModalBox
  const [borderBottomColorModalBox, setBorderBottomColorModalBox] =
    useState("#000");
  const [borderRightColorModalBox, setBorderRightColorModalBox] =
    useState("#000");
  const [borderLeftColorModalBox, setBorderLeftColorModalBox] =
    useState("#000");
  const [borderTopColorModalBox, setBorderTopColorModalBox] = useState("#000");
  // border width
  const [borderRightWidthModalBox, setBorderRightWidthModalBox] = useState("0");
  const [borderLeftWidthModalBox, setBorderLeftWidthModalBox] = useState("0");
  const [borderTopWidthModalBox, setBorderTopWidthModalBox] = useState("0");
  const [borderBottomWidthModalBox, setBorderBottomWidthModalBox] =
    useState("0");
  // border style
  const [borderRightStyleModalBox, setBorderRightStyleModalBox] =
    useState("solid");
  const [borderLeftStyleModalBox, setBorderLeftStyleModalBox] =
    useState("solid");
  const [borderTopStyleModalBox, setBorderTopStyleModalBox] = useState("solid");
  const [borderBottomStyleModalBox, setBorderBottomStyleModalBox] =
    useState("solid");
  // border radius border-top-right-radius
  const [borderTopRightRadiusModalBox, setBorderTopRightRadiusModalBox] =
    useState("0");
  const [borderTopLeftRadiusModalBox, setBorderTopLeftRadiusModalBox] =
    useState("0");
  const [borderBottomRightRadiusModalBox, setBorderBottomRightRadiusModalBox] =
    useState("0");
  const [borderBottomLeftRadiusModalBox, setBorderBottomLeftRadiusModalBox] =
    useState("0");
  // padding for ModalBox
  const [paddingRightModalBox, setPaddingRightModalBox] = useState("15");
  const [paddingLeftModalBox, setPaddingLeftModalBox] = useState("15");
  const [paddingTopModalBox, setPaddingTopModalBox] = useState("0");
  const [paddingBottomModalBox, setPaddingBottomModalBox] = useState("0");
  // margin for ModalBox
  const [marginRightModalBox, setMarginRightModalBox] = useState("0");
  const [marginLeftModalBox, setMarginLeftModalBox] = useState("0");
  const [marginTopModalBox, setMarginTopModalBox] = useState("0");
  const [marginBottomModalBox, setMarginBottomModalBox] = useState("0");

  // @refresh reset
  useEffect(() => {
    console.log("loading in app provider");
    // loadDb()
  }, []);

  return (
    <Context.Provider
      value={{
        // Editor Toolbar
        isPreview,
        setIsPreview,
        theme,
        setTheme,

        settingDialogOpen,
        setSettingsDialogOpen,
        // this is for logo
        fontSizeLogo,
        setFontSizeLogo,
        backgroundColorLogo,
        setBackgroundColorLogo,
        colorLogo,
        setColorLogo,
        fontLogo,
        setFontLogo,
        // border color and width
        borderBottomColorLogo,
        setBorderBottomColorLogo,
        borderBottomWidthLogo,
        setBorderBottomWidthLogo,
        borderTopColorLogo,
        setBorderTopColorLogo,
        borderTopWidthLogo,
        setBorderTopWidthLogo,
        borderLeftColorLogo,
        setBorderLeftColorLogo,
        borderLeftWidthLogo,
        setBorderLeftWidthLogo,
        borderRightColorLogo,
        setBorderRightColorLogo,
        borderRightWidthLogo,
        setBorderRightWidthLogo,
        // border style
        borderRightStyleLogo,
        setBorderRightStyleLogo,
        borderLeftStyleLogo,
        setBorderLeftStyleLogo,
        borderTopStyleLogo,
        setBorderTopStyleLogo,
        borderBottomStyleLogo,
        setBorderBottomStyleLogo,
        // border radius
        borderTopRightRadiusLogo,
        setBorderTopRightRadiusLogo,
        borderTopLeftRadiusLogo,
        setBorderTopLeftRadiusLogo,
        borderBottomRightRadiusLogo,
        setBorderBottomRightRadiusLogo,
        borderBottomLeftRadiusLogo,
        setBorderBottomLeftRadiusLogo,
        // padding
        paddingTopLogo,
        setPaddingTopLogo,
        paddingBottomLogo,
        setPaddingBottomLogo,
        paddingLeftLogo,
        setPaddingLeftLogo,
        paddingRightLogo,
        setPaddingRightLogo,
        // margin
        marginTopLogo,
        setMarginTopLogo,
        marginBottomLogo,
        setMarginBottomLogo,
        marginLeftLogo,
        setMarginLeftLogo,
        marginRightLogo,
        setMarginRightLogo,
        // logo hight and width
        minWidthLogo,
        setMinWidthLogo,
        maxWidthLogo,
        setMaxWidthLogo,
        minHeightLogo,
        setMinHeightLogo,
        maxHeightLogo,
        setMaxHeightLogo,
        // logo dialog
        dialogOpenLogo,
        setDialogOpenLogo,

        // -------------------------- Readonly --------------------------
        isReadOnly,
        setIsReadOnly,

        // -------------------------- Header --------------------------
        fontSizeHeader,
        setFontSizeHeader,
        fontHeader,
        setFontHeader,
        colorHeader,
        setColorHeader,
        backgroundColorHeader,
        setBackgroundColorHeader,
        //  border
        borderBottomColorHeader,
        setBorderBottomColorHeader,
        borderBottomWidthHeader,
        setBorderBottomWidthHeader,
        borderTopColorHeader,
        setBorderTopColorHeader,
        borderTopWidthHeader,
        setBorderTopWidthHeader,
        borderLeftColorHeader,
        setBorderLeftColorHeader,
        borderLeftWidthHeader,
        setBorderLeftWidthHeader,
        borderRightColorHeader,
        setBorderRightColorHeader,
        borderRightWidthHeader,
        setBorderRightWidthHeader,
        // border style
        borderRightStyleHeader,
        setBorderRightStyleHeader,
        borderLeftStyleHeader,
        setBorderLeftStyleHeader,
        borderTopStyleHeader,
        setBorderTopStyleHeader,
        borderBottomStyleHeader,
        setBorderBottomStyleHeader,
        // border radius
        borderTopRightRadiusHeader,
        setBorderTopRightRadiusHeader,
        borderTopLeftRadiusHeader,
        setBorderTopLeftRadiusHeader,
        borderBottomRightRadiusHeader,
        setBorderBottomRightRadiusHeader,
        borderBottomLeftRadiusHeader,
        setBorderBottomLeftRadiusHeader,
        // padding
        paddingTopHeader,
        setPaddingTopHeader,
        paddingBottomHeader,
        setPaddingBottomHeader,
        paddingLeftHeader,
        setPaddingLeftHeader,
        paddingRightHeader,
        setPaddingRightHeader,
        // margin
        marginTopHeader,
        setMarginTopHeader,
        marginBottomHeader,
        setMarginBottomHeader,
        marginLeftHeader,
        setMarginLeftHeader,
        marginRightHeader,
        setMarginRightHeader,
        // header hight and width
        dialogOpenHeader,
        setDialogOpenHeader,
        //  for customize dialogs
        openDialogsCustomize,
        setOpenDialogsCustomize,

        // ----------------------------Modal box
        fontSizeModalBox,
        setFontSizeModalBox,
        fontModalBox,
        setFontModalBox,
        colorModalBox,
        setColorModalBox,
        backgroundColorModalBox,
        setBackgroundColorModalBox,
        //  border
        borderBottomColorModalBox,
        setBorderBottomColorModalBox,
        borderBottomWidthModalBox,
        setBorderBottomWidthModalBox,
        borderTopColorModalBox,
        setBorderTopColorModalBox,
        borderTopWidthModalBox,
        setBorderTopWidthModalBox,
        borderLeftColorModalBox,
        setBorderLeftColorModalBox,
        borderLeftWidthModalBox,
        setBorderLeftWidthModalBox,
        borderRightColorModalBox,
        setBorderRightColorModalBox,
        borderRightWidthModalBox,
        setBorderRightWidthModalBox,
        // border style
        borderRightStyleModalBox,
        setBorderRightStyleModalBox,
        borderLeftStyleModalBox,
        setBorderLeftStyleModalBox,
        borderTopStyleModalBox,
        setBorderTopStyleModalBox,
        borderBottomStyleModalBox,
        setBorderBottomStyleModalBox,
        // border radius
        borderTopRightRadiusModalBox,
        setBorderTopRightRadiusModalBox,
        borderTopLeftRadiusModalBox,
        setBorderTopLeftRadiusModalBox,
        borderBottomRightRadiusModalBox,
        setBorderBottomRightRadiusModalBox,
        borderBottomLeftRadiusModalBox,
        setBorderBottomLeftRadiusModalBox,
        // padding
        paddingTopModalBox,
        setPaddingTopModalBox,
        paddingBottomModalBox,
        setPaddingBottomModalBox,
        paddingLeftModalBox,
        setPaddingLeftModalBox,
        paddingRightModalBox,
        setPaddingRightModalBox,
        // margin
        marginTopModalBox,
        setMarginTopModalBox,
        marginBottomModalBox,
        setMarginBottomModalBox,
        marginLeftModalBox,
        setMarginLeftModalBox,
        marginRightModalBox,
        setMarginRightModalBox,
        // ModalBox hight and width
        dialogOpenModalBox,
        setDialogOpenModalBox,

        // -------------------------- Zoom in and out --------------------------
        zoom,
        setZoom,
        callUndo,
        setCallUndo,

        // --------------load
        loading,
        setLoading,
        // -------------------------- background
        bodyBackgroundColor,
        setBodyBackgroundColor,
        containerBackgroundColor,
        setContainerBackgroundColor,
        containerShadow,
        setContainerShadow,
        dialogOpenBody,
        setDialogOpenBody,
        // db
        dbFormat,
        setDbFormat,
        headerDBFormat,
        setHeaderDBFormat,
        giftDBFormat,
        setGiftDBFormat,
        // calendar
        themeCalendar,
        setThemeCalendar,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppProvider = () => useContext(Context);
