import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { IconButton } from "@mui/material";
import SettingsGlobeTitle from "@plugins/SettingsGlobeTitle/SettingsGlobeTitle";
import { useState } from "react";
import Edit from "../../icons/Edit";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerBtn: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "9px",

      height: "2rem",
      width: "2.2rem",
    },
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "0px",
      right: "0px",
      height: "fit-content",
      width: "fit-content",
      zIndex: 1000,
    },
  })
);
type GlobeTitleOptionsUiProps = {
  style: any;
};
const GlobeTitleOptionsUi = ({ style }: GlobeTitleOptionsUiProps) => {
  const classes = useStyles();
  const [globTitle, setGlobTitle] = useState(false);
  const handleClickOpen = () => {
    setGlobTitle(true);
  };

  const handleClickClose = () => {
    setGlobTitle(false);
  };

  return (
    <div
      className={"popover-option"}
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "0px",
        right: "0px",
        height: "fit-content",
        width: "fit-content",
        zIndex: 1000,
        ...style,
      }}
    >
      <IconButton
        onClick={handleClickOpen}
        sx={{
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent",
          },
        }}
        className={classes.containerBtn}
      >
        <Edit />
      </IconButton>
      {globTitle && (
        <SettingsGlobeTitle open={globTitle} close={handleClickClose} />
      )}
    </div>
  );
};
export default GlobeTitleOptionsUi;
