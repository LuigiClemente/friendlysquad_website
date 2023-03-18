import PageLayout from "@/PageLayout";
import { LayoutManger } from "@/SiteComponents/layout/LayoutManager";
import { useAppProvider } from "@appProvider/AppProvider";
import { withResizeDetector } from "react-resize-detector";
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
          <Box>
            <Box
              sx={{
                backgroundColor: `${containerBackgroundColor}`,
                boxShadow: `${containerShadow}`,
                position: "relative",
              }}
              style={{ position: "relative" }}
            >
              <LayoutManger />
            </Box>
          </Box>
        </div>
      </PageLayout>
    </Container>
  );
};

// export default HomeComponent;
export default withResizeDetector(HomeComponent);
