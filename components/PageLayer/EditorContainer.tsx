import PageLayout from "@/PageLayout";
import { LayoutManger } from "@/SiteComponents/layout/LayoutManager";
import { useAppProvider } from "@appProvider/AppProvider";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";

// const DynamicHeader = dynamic(() => import("../Header"), {
//   ssr: false
// })

const EditorContainer = ({ children }) => {
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
          {/* <Box
            sx={{
              backgroundColor: `${containerBackgroundColor}`,
              boxShadow: `${containerShadow}`,
            }}
          > */}
          {/* <LayoutManger /> */}
          {children}
          {/* </Box> */}
        </div>
      </PageLayout>
    </Container>
  );
};

export default EditorContainer;
