import PageLayout from "@/PageLayout";
import Layout from "@/SiteComponents/layout/Layout";
import { useAppProvider } from "@appProvider/AppProvider";
import { usePageProvider } from "@appProvider/PageProvider";
import { useEffect } from "react";

const PageLayer = ({ children, currentMenu }) => {
  const {
    containerBackgroundColor,
    bodyBackgroundColor,
    containerShadow,
    zoom,
  }: any = useAppProvider();
  const { currentPage, setCurrentPage }: any = usePageProvider();

  useEffect(() => {
    setCurrentPage(currentMenu);
  }, [currentMenu]);

  return (
    <div className="px-10">
      <PageLayout>
        <div
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: "0% 0% 0% 0%",
            backgroundColor: `${bodyBackgroundColor}`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="capture"
        >
          <Layout currentMenu={currentMenu}>{children}</Layout>
        </div>
      </PageLayout>
    </div>
  );
};

export default PageLayer;
