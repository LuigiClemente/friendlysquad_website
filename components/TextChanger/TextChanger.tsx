import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useUndoable } from "@appProvider/UndoableProvider";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { SketchPicker } from "react-color";
import { updatePluginValue } from "../../utils/uiController";
import {
  BOOKING_MODAL,
  BOOKING_MODAL_PLUGIN_ID,
  CLOUD_DATA,
  CLOUD_DATA_PLUGIN_ID,
  GLOBE_DATA,
  GLOBE_DATA_PLUGIN_ID,
  HOME_TITLE,
  LANGS_MODAL,
  LANGS_MODAL_PLUGIN_ID,
  PAGE_MODAL,
  PAGE_MODAL_PLUGIN_ID,
} from "../Constant/const";

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
      paddingRight: "10px",
    },
    sizeBtn: {
      maxWidth: "fit-content",
      width: "fit-content",
      border: "0.5px solid #e5e2e2",
      padding: "5px",
      color: theme.palette.text.primary,
      marginRight: "30px",
    },
  })
);
interface TextChangerProps {
  nameSection: string;
  isBody?: boolean;
}
const TextChanger = ({ nameSection, isBody = false }: TextChangerProps) => {
  const [backgroundColorSelected, setBackgroundColorSelected] =
    React.useState("#fff");
  const classes = useStyles();

  const {
    headerDBFormat,
    setHeaderDBFormat,
    // json db
    setBackgroundColorHeader,

    // this is for body
    bodyBackgroundColor,
    setBodyBackgroundColor,
    containerBackgroundColor,
    setContainerBackgroundColor,
  }: any = useAppProvider();

  const {
    dbModalsFormat,
    setDbModalsFormat,
    setBackgroundColorData,
    setBackgroundColorVerifyData,
    setBackgroundColorDataModal,
    setBackgroundColorTitleModal,
    setBackgroundColorBox2,
    // update settings value
    backgroundColorVerifyData,
    backgroundColorDataModal,
    backgroundColorTitleModal,
    backgroundColorBox2,
    setBackgroundColorButtons,
    backgroundColorButtons,
  }: any = useModalsAppProvider();
  // const {setBackgroundColorButtons,backgroundColorButtons}:any=useAppStateProvider()
  const { content, setContent }: any = useUndoable();
  const handleGetColor = (color: any) => {
    setBackgroundColorSelected(color.hex);
    if (nameSection === PAGE_MODAL) {
      setBackgroundColorHeader(color.hex);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          PAGE_MODAL_PLUGIN_ID,
          "backgroundColorHeader",
          color.hex
        )
      );
      setContent({
        name: "backgroundColor",
        value: color.hex,
        nameSection: PAGE_MODAL,
      });
    } else if (nameSection === BOOKING_MODAL) {
      setBackgroundColorTitleModal(color.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BOOKING_MODAL_PLUGIN_ID,
          "backgroundColorTitleModal",
          color.hex
        )
      );
      setContent({
        name: "backgroundColor",
        value: color.hex,
        nameSection: BOOKING_MODAL,
      });
    } else if (nameSection === LANGS_MODAL) {
      setBackgroundColorData(color.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          LANGS_MODAL_PLUGIN_ID,
          "backgroundColorData",
          color.hex
        )
      );
      setContent({
        name: "backgroundColor",
        value: color.hex,
        nameSection: LANGS_MODAL,
      });
    } else if (nameSection === CLOUD_DATA) {
      setBackgroundColorBox2(color.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          CLOUD_DATA_PLUGIN_ID,
          "backgroundColorBox2",
          color.hex
        )
      );
      setContent({
        name: "backgroundColor",
        value: color.hex,
        nameSection: CLOUD_DATA,
      });
    } else if (nameSection === GLOBE_DATA) {
      setBackgroundColorVerifyData(color.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          GLOBE_DATA_PLUGIN_ID,
          "backgroundColorVerifyData",
          color.hex
        )
      );
      setContent({
        name: "backgroundColor",
        value: color.hex,
        nameSection: GLOBE_DATA,
      });
    }
  };
  useEffect(() => {
    if (nameSection === PAGE_MODAL) {
      setBackgroundColorSelected(bodyBackgroundColor);
    } else if (nameSection === BOOKING_MODAL) {
      setBackgroundColorSelected(containerBackgroundColor);
    } else if (nameSection === LANGS_MODAL) {
      setBackgroundColorSelected(backgroundColorTitleModal);
    } else if (nameSection === CLOUD_DATA) {
      setBackgroundColorSelected(backgroundColorBox2);
    } else if (nameSection === GLOBE_DATA) {
      setBackgroundColorSelected(backgroundColorVerifyData);
    } else if (nameSection === HOME_TITLE) {
      setBackgroundColorSelected(backgroundColorDataModal);
    }
  }, []);

  return (
    <div className={classes.content}>
      {isBody ? (
        <div className={`text ${classes.title}`}>
          Change Background for Body
        </div>
      ) : (
        <div className={`text ${classes.title}`}>Change Background Color</div>
      )}
      <SketchPicker onChange={handleGetColor} color={backgroundColorSelected} />
    </div>
  );
};
export default TextChanger;
