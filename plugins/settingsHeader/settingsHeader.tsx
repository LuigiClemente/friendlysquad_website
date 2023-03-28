import { useAppProvider } from "@appProvider/AppProvider";
import { HEADER } from "@components/Constant/const";
import DialogTitleCustomPlugin from "@components/DialogTitleCustomPlugin";
import FontChanger from "@components/FontChanger";
import FontSizeChanger from "@components/FontSizeChanger";
import FullControlPaddingBorderMargin from "@components/FullControlPaddingBorderMargin/FullControlPaddingBorderMargin";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Divider, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Paper, { PaperProps } from "@mui/material/Paper";
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
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

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
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type SettingsHeaderProps = {
  open?: any;
};
const SettingsHeader: React.FC<SettingsHeaderProps> = ({
  open,
}: SettingsHeaderProps) => {
  const { dialogOpenHeader, setDialogOpenHeader }: any = useAppProvider();
  const classes = useStyles();

  // this is for tab
  const [value, setValue] = React.useState(1);
  return (
    <Dialog
      open={dialogOpenHeader}
      TransitionComponent={Transition}
      keepMounted
      // fullWidth
      maxWidth="xl"
      onClose={() => {
        setDialogOpenHeader(false);
      }}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitleCustomPlugin
        id="customized-dialog-title"
        onClose={() => {
          setDialogOpenHeader(false);
        }}
      >
        {"Header Settings"}
      </DialogTitleCustomPlugin>

      <DialogContent id="dialog-content-editor">
        <DialogContentText id="alert-dialog-slide-description">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <FontChanger nameSection={HEADER} />
            <Divider className={classes.divider} />
            <FontSizeChanger nameSection={HEADER} />
            <Divider className={classes.divider} />
            <FullControlPaddingBorderMargin nameSection={HEADER} />
            <Divider className={classes.divider} />
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
export default SettingsHeader;
