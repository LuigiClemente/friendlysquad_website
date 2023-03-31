import BackgroundColorChanger from "@/BackgroundColorChanger";
import FullControlPaddingBorderMargin from "@/FullControlPaddingBorderMargin";
import { CONTENT } from "@components/Constant/const";
import DialogTitleCustomPlugin from "@components/DialogTitleCustomPlugin";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Divider, Paper, PaperProps } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import Draggable from "react-draggable";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    divider: {
      root: {
        height: "0.5px !important",
        color: "#F2F2F2 !important",
        padding: "6px",
        opacity: "0.5 !important",
      },
    },
  })
);
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type SettingsBoxProps = {
  open?: any;
  close?: any;
};
function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
const SettingsBox: React.FC<SettingsBoxProps> = ({
  open,
  close,
}: SettingsBoxProps) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      maxWidth="xl"
      onClose={close}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitleCustomPlugin id="customized-dialog-title" onClose={close}>
        {"Change Box"}
      </DialogTitleCustomPlugin>
      <DialogContent id="dialog-content-editor">
        <DialogContentText id="alert-dialog-slide-description">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <BackgroundColorChanger nameSection={CONTENT} />
            <Divider className={classes.divider} />
            <FullControlPaddingBorderMargin nameSection={CONTENT} />
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
export default SettingsBox;
