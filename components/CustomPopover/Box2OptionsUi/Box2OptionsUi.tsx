import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { IconButton } from "@mui/material";
import SettingsBox2 from "@plugins/settingsBox2/SettingsBox2";
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
type Box2OptionsUiProps = {
  style: any;
};
const Box2OptionsUi = ({ style }: Box2OptionsUiProps) => {
  const classes = useStyles();
  const [dialogOpenBox, setDialogOpenBox] = useState(false);
  const handleClickOpen = () => {
    console.log("open");
    setDialogOpenBox(true);
  };
  const handleClickClose = () => {
    setDialogOpenBox(false);
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
        cursor: "pointer",
        ...style,
      }}
    >
      <IconButton
        onClick={handleClickOpen}
        sx={{
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent",
            cursor: "pointer",
          },
        }}
        className={classes.containerBtn}
      >
        <Edit onClick={handleClickOpen} />
      </IconButton>
      {dialogOpenBox && (
        <SettingsBox2 open={dialogOpenBox} close={handleClickClose} />
      )}
    </div>
  );
};
export default Box2OptionsUi;
