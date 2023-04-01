import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";
import "../styles/index.css";
import "../styles/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import "swiper/swiper.css";
import "swiper/swiper-element-bundle.min.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ThemePageProvider } from "@appProvider/ThemePageProvider";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { themeDarkStyle, themeLightStyle } from "theme/Theme";
import { DarkTheme, lightTheme } from "theme/ThemeOveride";
import createEmotionCache from "../utils/createEmotionCache";
import { appWithTranslation } from "next-i18next";
import { AppProvider } from "@appProvider/AppProvider";
import { AppStateProvider } from "@appProvider/AppStateProvider";
import { ModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { UpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider";
import UndoableProvider from "@appProvider/UndoableProvider";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache: EmotionCache }) {
  const [theme, setTheme]: any = useState(lightTheme);

  let themeChanger = true;
  React.useEffect(() => {
    if (themeChanger) {
      const style = themeLightStyle;
      document.head.insertAdjacentHTML("beforeend", style);
      setTheme(lightTheme);
    } else {
      const style = themeDarkStyle;
      document.head.insertAdjacentHTML("beforeend", style);
      setTheme(DarkTheme);
    }
  }, [themeChanger]);
  useEffect(() => {
    if (performance.navigation.type === 0) {
      console.log("refreash");
      const query = new URLSearchParams(window.location.search);
      const theme = query.get("theme");
      if (theme) {
        if (theme === "light") {
          const style = themeLightStyle;
          document.head.insertAdjacentHTML("beforeend", style);
          setTheme(lightTheme);
        } else {
          const style = themeDarkStyle;
          document.head.insertAdjacentHTML("beforeend", style);
          setTheme(DarkTheme);
        }
      }
    }
  }, []);
  return (
    <ThemePageProvider>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <AppStateProvider>
            <UndoableProvider>
              <AppProvider>
                <UpdateSettingsProvider>
                  <ModalsAppProvider>
                    <Component {...pageProps} />
                  </ModalsAppProvider>
                </UpdateSettingsProvider>
              </AppProvider>
            </UndoableProvider>
          </AppStateProvider>
        </ThemeProvider>
      </CacheProvider>
    </ThemePageProvider>
  );
}

export default appWithTranslation(MyApp);
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
