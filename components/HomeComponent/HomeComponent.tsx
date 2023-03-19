import PageLayout from "@/PageLayout";
import { LayoutManger } from "@/SiteComponents/layout/LayoutManager";
import { useAppProvider } from "@appProvider/AppProvider";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";

const HomeComponent = () => {
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
            transformOrigin: "0% 0px 0%",
            backgroundColor: `${bodyBackgroundColor}`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="capture"
        >
          <Box
            sx={{
              backgroundColor: `${containerBackgroundColor}`,
              boxShadow: `${containerShadow}`,
              height: "fit-content",
              // position: "relative",
            }}
            // style={{ position: "relative" }}
          >
            <LayoutManger />
          </Box>
        </div>
      </PageLayout>
    </Container>
  );
};

export default HomeComponent;
