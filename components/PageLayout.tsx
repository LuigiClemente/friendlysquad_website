import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import type { FC } from "react";
import * as React from "react";
import { ToastContainer } from "react-toastify";
import { useAppProvider } from "../appProvider/AppProvider";
import CustomEditorToolbar from "./CustomEditorToolbar";

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginTop: "10px",
      marginBottom: "10px",
    },
    appbar: {},
  })
);
const PageLayout: FC<any> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [bodyStyle, setBodyStyle] = React.useState({ display: "none" });
  const classes = useStyles();
  const {
    bodyBackgroundColor,
    setBodyBackgroundColor,
    loading,
    isReadOnly,
  }: any = useAppProvider();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  return (
    <div style={{ height: "fit-content", marginBottom: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px",
          margin: "0px",
        }}
        className="editorToolbar"
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
            width: { sm: `100%` },
          }}
        >
          {/* <Toolbar /> */}
          <CustomEditorToolbar />
          <div
            style={{
              position: "relative",
              height: "fit-content",
              backgroundColor: "red",
              // height: "650px",
              marginBottom: "50px",
            }}
            className="h-full"
            // onMouseEnter={() => setBodyStyle({ display: "block" })}
            // onMouseLeave={() => setBodyStyle({ display: "none" })}
          >
            {/* {loading && (isReadOnly ? null : */}
            {/* <BodyPopoverOptionsUi style={bodyStyle} /> */}
            {/* )} */}
            <Box
              sx={{
                flexGrow: 1,
                p: 1.5,
                backgroundColor: `#fff`,
                width: "100%",
                height: "fit-content",
                position: "relative",
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              }}
              className="h-full"
            >
              {children}
            </Box>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default PageLayout;
