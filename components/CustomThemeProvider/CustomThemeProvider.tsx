import { useAppProvider } from "@appProvider/AppProvider";
import { AppStateProvider } from "@appProvider/AppStateProvider";
import { PageProvider, usePageProvider } from "@appProvider/PageProvider";
import UndoableProvider from "@appProvider/UndoableProvider";
import { ThemeProvider } from "@material-ui/core/styles";
import { useEffect } from "react";

import { themeDarkStyle, themeLightStyle } from "theme/Theme";
import { DarkTheme, lightTheme } from "theme/ThemeOveride";

function CustomThemeProvider({ children }) {
  const { theme, setTheme, themeChecker, setThemeChecker }: any =
    usePageProvider();
  useEffect(() => {
    setTheme(lightTheme);
    if (themeChecker === "light") {
      const style = themeLightStyle;
      document.head.insertAdjacentHTML("beforeend", style);
      setTheme(lightTheme);
    } else {
      setTheme(DarkTheme);
      const style = themeDarkStyle;
      document.head.insertAdjacentHTML("beforeend", style);
    }
  }, [themeChecker]);
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}
export default CustomThemeProvider;
