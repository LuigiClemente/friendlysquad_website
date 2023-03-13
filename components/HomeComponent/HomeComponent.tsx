import Footer from "@/Footer/Footer"
import PageLayout from "@/PageLayout"
import GrassIframe from "@/siteComponents/grass/GrassIframe"
import Layout from "@/siteComponents/layout/Layout"
import { LayoutManger } from "@/siteComponents/layout/LayoutManager"
import Verification from "@/Verification/ModalData"
import { useAppProvider } from "@appProvider/AppProvider"
import { Container } from "@mui/material"
import Box from "@mui/material/Box"
import dynamic from "next/dynamic"

// const DynamicHeader = dynamic(() => import("../Header"), {
//   ssr: false
// })

const HomeComponent = () => {
  const { containerBackgroundColor, bodyBackgroundColor, containerShadow, zoom }: any =
    useAppProvider()

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
            alignItems: "center"
          }}
          id="capture"
        >
          <Box
          //  sx={{ width: "490px" }}
           >
            {/* <DynamicHeader /> */}
            <Box
              sx={{
                backgroundColor: `${containerBackgroundColor}`,
                boxShadow: `${containerShadow}`
              }}
            >
             <LayoutManger />
              {/* <Verification /> */}
            </Box>
            {/* <Footer /> */}
          </Box>
        </div>
      </PageLayout>
    </Container>
  )
}

export default HomeComponent
