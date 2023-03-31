import { useAppProvider } from "@appProvider/AppProvider";
import { useAppStateProvider } from "@appProvider/AppStateProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useUndoable } from "@appProvider/UndoableProvider";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { SketchPicker } from "react-color";
import { updatePluginValue } from "../../utils/uiController";
import {
  BODY_CUSTOMIZE,
  BODY_PLUGIN_ID,
  BUTTONS,
  BUTTONS_PLUGIN_ID,
  CONTAINER_CUSTOMIZE,
  CONTENT,
  DATA_PLUGIN,
  HEADER,
  HEADER_PLUGIN_ID,
  VERIFY_CODE,
  VERIFY_DATA,
  VERIFY_DATA_PLUGIN_ID,
  VERIFY_TITLE,
  VERIFY_TITLE_BTN,
  VERIFY_TITLE_PLUGIN_ID,
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
interface BackgroundColorChangerProps {
  nameSection: string;
  isBody?: boolean;
}
const BackgroundColorChanger = ({
  nameSection,
  isBody = false,
}: BackgroundColorChangerProps) => {
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
    setBackgroundColorVerifyContent,
    // update settings value
    backgroundColorVerifyData,
    backgroundColorDataModal,
    backgroundColorTitleModal,
    backgroundColorVerifyContent,
    setBackgroundColorButtons,
    backgroundColorButtons,
  }: any = useModalsAppProvider();
  // const {setBackgroundColorButtons,backgroundColorButtons}:any=useAppStateProvider()
  const { content, setContent }: any = useUndoable();
  const handleGetColor = (color: any) => {
    setBackgroundColorSelected(color.hex);
    if (nameSection === HEADER) {
      setBackgroundColorHeader(color.hex);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "backgroundColorHeader",
          color.hex
        )
      );
      setContent({
        name: "backgroundColor",
        value: color.hex,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBackgroundColorTitleModal(color.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "backgroundColorTitleModal",
          color.hex
        )
      );
      setContent({
        name: "backgroundColor",
        value: color.hex,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === CONTENT) {
      setBackgroundColorData(color.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "backgroundColorData",
          color.hex
        )
      );
      setContent({
        name: "backgroundColor",
        value: color.hex,
        nameSection: CONTENT,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBackgroundColorVerifyContent(color.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "backgroundColorVerifyContent",
          color.hex
        )
      );
      setContent({
        name: "backgroundColor",
        value: color.hex,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBackgroundColorVerifyData(color.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "backgroundColorVerifyData",
          color.hex
        )
      );
      setContent({
        name: "backgroundColor",
        value: color.hex,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBackgroundColorDataModal(color.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "backgroundColorDataModal",
          color.hex
        )
      );
      setContent({
        name: "backgroundColor",
        value: color.hex,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BODY_CUSTOMIZE) {
      setBodyBackgroundColor(color.hex);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          BODY_PLUGIN_ID,
          "bodyBackgroundColor",
          color.hex
        )
      );
      setContent({
        name: "backgroundColor",
        value: color.hex,
        nameSection: BODY_CUSTOMIZE,
      });
    } else if (nameSection === CONTAINER_CUSTOMIZE) {
      setContainerBackgroundColor(color.hex);
      console.log("change background container", color.hex);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          BODY_PLUGIN_ID,
          "containerBackgroundColor",
          color.hex
        )
      );
      setContent({
        name: "backgroundColor",
        value: color.hex,
        nameSection: CONTAINER_CUSTOMIZE,
      });
    } else if (nameSection === BUTTONS) {
      setBackgroundColorButtons(color.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "backgroundColorButtons",
          color.hex
        )
      );
      setContent({
        name: "backgroundColor",
        value: color.hex,
        nameSection: BUTTONS,
      });
    }
  };
  useEffect(() => {
    if (nameSection === BODY_CUSTOMIZE) {
      setBackgroundColorSelected(bodyBackgroundColor);
    } else if (nameSection === CONTAINER_CUSTOMIZE) {
      setBackgroundColorSelected(containerBackgroundColor);
    } else if (nameSection === VERIFY_TITLE) {
      setBackgroundColorSelected(backgroundColorTitleModal);
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBackgroundColorSelected(backgroundColorVerifyContent);
    } else if (nameSection === VERIFY_DATA) {
      setBackgroundColorSelected(backgroundColorVerifyData);
    } else if (nameSection === VERIFY_CODE) {
      setBackgroundColorSelected(backgroundColorDataModal);
    } else if (nameSection === BUTTONS) {
      setBackgroundColorSelected(backgroundColorButtons);
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
export default BackgroundColorChanger;
