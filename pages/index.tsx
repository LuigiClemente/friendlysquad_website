import HomeSite from "@/SiteComponents/Home/HomeSite";
import { AppProvider } from "@appProvider/AppProvider";
import { AppStateProvider } from "@appProvider/AppStateProvider";
import ResizeObserver from "react-resize-detector";
import { ModalsAppProvider } from "@appProvider/ModalsAppProvider";
import UndoableProvider from "@appProvider/UndoableProvider";
import { UpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider";
import { CssBaseline, Skeleton } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
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
  const [isLoad, setIsLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 1000);
  }, []);

  return (
    <ResizeObserver>
      <React.Fragment>
        <CssBaseline />
        <UndoableProvider>
          <AppProvider>
            <UpdateSettingsProvider>
              <AppStateProvider>
                <ModalsAppProvider>
                  <DynamicHome />
                  {/* <HomeSite /> */}
                </ModalsAppProvider>
              </AppStateProvider>
            </UpdateSettingsProvider>
          </AppProvider>
        </UndoableProvider>
      </React.Fragment>
    </ResizeObserver>
  );
}
