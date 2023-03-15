import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import type { FC } from "react"
import * as React from "react"
import { ToastContainer } from "react-toastify"
import { useAppProvider } from "../appProvider/AppProvider"
import CustomEditorToolbar from "./CustomEditorToolbar"
import BodyPopoverOptionsUi from "./CustomPopover/BodyPopoverOptionsUi"

const drawerWidth = 240
// PropsWithChildren
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      display: "block",
      marginTop: theme.spacing(2)
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginTop: "10px",
      marginBottom: "10px"
    },
    appbar: {
      // check theme to change background color
      // backgroundColor: theme.palette.type === "dark" ? DEFAULT_BACKGROUND : DEFAULT_PAPER_LIGHT,
      // color: theme.palette.type === "dark" ? DEFAULT_PAPER_LIGHT : DEFAULT_BACKGROUND
      // change muiAppBar color
    }
  })
)
const PageLayout: FC<any> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [bodyStyle, setBodyStyle] = React.useState({ display: "none" })
  const classes = useStyles()
  const { bodyBackgroundColor, setBodyBackgroundColor, loading, isReadOnly }: any = useAppProvider()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const [isDarkTheme, setIsDarkTheme] = React.useState(false)
  return (
    <div style={{height:"fit-content"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px",
          margin: "0px",
        }}
      >
        <CssBaseline />

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `100%` }
          }}
        >
          {/* <Toolbar /> */}
          <CustomEditorToolbar />
          <div
            style={{ position: "relative", backgroundColor:"red", height:"650px", marginBottom:"50px" }}
            className="h-full"
            onMouseEnter={() => setBodyStyle({ display: "block" })}
            onMouseLeave={() => setBodyStyle({ display: "none" })}
          >
            {/* {loading && (isReadOnly ? null : */}
            <BodyPopoverOptionsUi style={bodyStyle} />
            {/* )} */}
            <Box
              sx={{
                flexGrow: 1,
                p: 4,
                backgroundColor: `${bodyBackgroundColor}`,
                width: "100%",
                height:"100%",
              }}
              className="h-full"
            >
              {children}
            </Box>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default PageLayout
