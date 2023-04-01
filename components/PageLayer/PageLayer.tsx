import PageLayout from "@/PageLayout";
import Layout from "@/SiteComponents/layout/Layout";
import { useAppProvider } from "@appProvider/AppProvider";
import { Container } from "@mui/material";

const PageLayer = ({ children, currentMenu }) => {
  const {
    containerBackgroundColor,
    bodyBackgroundColor,
    containerShadow,
    zoom,
  }: any = useAppProvider();

  return (
    <Container>
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
    </Container>
  );
};

export default PageLayer;
