import { useAppStateProvider } from "@appProvider/AppStateProvider";
import GlobalEdgeNetwork from "../globe/GlobalEdgeNetwork";
import GrassIframe from "../grass/GrassIframe";
import HomeSite from "../Home/HomeSite";
import IframeFood from "../iframeFood/IframeFood";
import IframeLaser from "../iframeLaser/IframeLaser";
import Layout from "./Layout";

export const LayoutManger = () => {
  const { currentMenu }: any = useAppStateProvider();
  const handleMenu = () => {
    switch (currentMenu) {
      case "ABOUT US":
        return <IframeFood />;
      case "SERVICE":
        return <GrassIframe />;
      case "CONTACT US":
        return <IframeLaser />;
      case "INFRASTUCTURE":
        return <GlobalEdgeNetwork />;
      case "HOME":
        return <HomeSite />;
    }
  };

  return <Layout>{handleMenu()}</Layout>;
};
