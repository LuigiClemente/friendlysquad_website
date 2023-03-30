import { AppProvider } from "@appProvider/AppProvider";
import { AppStateProvider } from "@appProvider/AppStateProvider";
import { ModalsAppProvider } from "@appProvider/ModalsAppProvider";
import UndoableProvider from "@appProvider/UndoableProvider";
import { UpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CssBaseline, Skeleton } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import CarouselCloud from "@/SiteComponents/carousel/CarouselCloud";
const DynamicHome = dynamic(() => import("@/HomeComponent"), {
  loading: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Skeleton
        style={{
          padding: "10px",
          width: "80%",
          height: "100px",
          margin: "50px",
        }}
        animation="wave"
      />
    </div>
  ),
  ssr: false,
});
export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <UndoableProvider>
        <AppProvider>
          <UpdateSettingsProvider>
            <AppStateProvider>
              <ModalsAppProvider>
                <DynamicHome />
                {/* <CarouselCloud getItemId={1} /> */}
              </ModalsAppProvider>
            </AppStateProvider>
          </UpdateSettingsProvider>
        </AppProvider>
      </UndoableProvider>
    </React.Fragment>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
