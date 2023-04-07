import CustomThemeProvider from "@/CustomThemeProvider/CustomThemeProvider";
import { AppProvider } from "@appProvider/AppProvider";
import { AppStateProvider } from "@appProvider/AppStateProvider";
import { ModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { PageProvider } from "@appProvider/PageProvider";
import { ThemePageProvider } from "@appProvider/ThemePageProvider";
import UndoableProvider from "@appProvider/UndoableProvider";
import { UpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider";
import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import { appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/swiper-element-bundle.min.css";
import "swiper/swiper.css";
import "swiper/swiper.min.css";
import { themeLightStyle } from "theme/Theme";
import { lightTheme } from "theme/ThemeOveride";
import "../styles/index.css";
import "../styles/styles.css";
import createEmotionCache from "../utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache: EmotionCache }) {
  const [theme, setTheme]: any = useState(lightTheme);

  React.useEffect(() => {
    const handleStorage = (event) => {
      if (event.storageArea === localStorage && event.key === "themeFriendly") {
        const data = event.newValue ? JSON.parse(event.newValue) : null;
        console.log("data", data);
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);
  useEffect(() => {
    const style = themeLightStyle;
    document.head.insertAdjacentHTML("beforeend", style);
    setTheme(lightTheme);
  }, []);
  return (
    <ThemePageProvider>
      <CacheProvider value={emotionCache}>
        <PageProvider>
          <CustomThemeProvider>
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
          </CustomThemeProvider>
        </PageProvider>
      </CacheProvider>
    </ThemePageProvider>
  );
}

export default appWithTranslation(MyApp);
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "about",
        "contact",
        "service",
      ])),
    },
  };
}
