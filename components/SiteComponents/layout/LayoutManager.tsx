import { useAppStateProvider } from "@appProvider/AppStateProvider";
import GrassIframe from "../grass/GrassIframe";
import HomeSite from "../Home/HomeSite";
import IframeFood from "../iframeFood/IframeFood";
import IframeLaser from "../iframeLaser/IframeLaser";
import { withResizeDetector } from "react-resize-detector";
import Layout from "./Layout";

export const LayoutManger = () => {
  const { currentMenu, setCurrentMenu }: any = useAppStateProvider();
  const handleMenu = () => {
    switch (currentMenu) {
      case "ABOUT US":
        return <IframeFood />;
      case "SERVICE":
        return <GrassIframe />;
      case "CONTACT US":
        return <IframeLaser />;
      default:
        return <HomeSite />;
    }
  };

  return <Layout>{handleMenu()}</Layout>;
};
export default withResizeDetector(LayoutManger);
