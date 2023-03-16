import { useAppStateProvider } from "@appProvider/AppStateProvider";
import { GLOBAL_DESCRIPTION, GLOBAL_TITLE, NOTE_GLOBE_SECTION } from "../constant";
import GlobalEdgeNetwork from "../globe/GlobalEdgeNetwork";
import GrassIframe from "../grass/GrassIframe";
import IframeFood from "../iframeFood/IframeFood";
import Layout from "./Layout";

export const LayoutManger = () => {
    const { currentMenu, setCurrentMenu }: any = useAppStateProvider();
    const handleMenu = () => {
        switch (currentMenu) {
            case "ABOUT US":
                return <IframeFood />
            case "SERVICE":
                return <GrassIframe />
            // case "CONTACT US":
            //     return <IframeLaser />
            default:
                return <GlobalEdgeNetwork title={GLOBAL_TITLE} noteList={NOTE_GLOBE_SECTION} description={GLOBAL_DESCRIPTION} />
        }
    }

    return (
        <Layout>
            {handleMenu()}
        </Layout>
    )
}