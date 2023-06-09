import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { IconButton } from "@mui/material";
import SettingsCodeVerification from "@plugins/settingsCodeVerification/settingsCodeVerification";
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
type ModalDataOptionsUiProps = {
  style: any;
};
const ModalDataOptionsUi = ({ style }: ModalDataOptionsUiProps) => {
  const classes = useStyles();
  const { dialogOpenDataModal, setDialogOpenDataModal }: any =
    useModalsAppProvider();
  const handleClickOpen = () => {
    setDialogOpenDataModal(true);
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
      {dialogOpenDataModal && (
        <SettingsCodeVerification open={dialogOpenDataModal} />
      )}
    </div>
  );
};
export default ModalDataOptionsUi;
