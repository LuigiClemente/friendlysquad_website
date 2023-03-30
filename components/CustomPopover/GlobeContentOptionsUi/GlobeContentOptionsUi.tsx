import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { IconButton } from "@mui/material";
import SettingsGlobeContent from "@plugins/SettingsGlobeContent/SettingsGlobeContent";
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
type GlobeContentOptionsUiProps = {
  style: any;
};
const GlobeContentOptionsUi = ({ style }: GlobeContentOptionsUiProps) => {
  const classes = useStyles();
  const [globContent, setGlobContent] = useState(false);
  const handleClickOpen = () => {
    setGlobContent(true);
  };

  const handleClickClose = () => {
    setGlobContent(false);
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
      {globContent && (
        <SettingsGlobeContent open={globContent} close={handleClickClose} />
      )}
    </div>
  );
};
export default GlobeContentOptionsUi;
