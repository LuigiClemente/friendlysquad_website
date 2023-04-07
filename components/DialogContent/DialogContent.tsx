import ModalDataOptionsUi from "@/CustomPopover/ModalDataOptionsUi";
import { MODAL_DATA } from "@/SiteComponents/constant";
import TextEditor from "@/TextEditor/TextEditor";
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { usePageProvider } from "@appProvider/PageProvider";
import React, { useEffect, useRef } from "react";

interface DialogContentProps {
  data: any;
  isBookingList?: boolean;
  isSmallModal?: boolean;
}

const DialogContent = ({
  data,
  isBookingList,
  isSmallModal,
}: DialogContentProps) => {
  const {
    fontSizeDataModal,
    fontDataModal,
    colorDataModal,
    backgroundColorDataModal,
    //  border
    borderBottomColorDataModal,
    borderBottomWidthDataModal,
    borderTopColorDataModal,
    borderTopWidthDataModal,
    borderLeftColorDataModal,
    borderLeftWidthDataModal,
    borderRightColorDataModal,
    borderRightWidthDataModal,
    // border style
    borderRightStyleDataModal,
    borderLeftStyleDataModal,
    borderTopStyleDataModal,
    borderBottomStyleDataModal,
    // border radius
    borderTopRightRadiusDataModal,
    borderTopLeftRadiusDataModal,
    borderBottomRightRadiusDataModal,
    borderBottomLeftRadiusDataModal,
    // padding
    paddingTopDataModal,
    paddingBottomDataModal,
    paddingLeftDataModal,
    paddingRightDataModal,
    // margin
    marginTopDataModal,
    marginBottomDataModal,
    marginLeftDataModal,
    marginRightDataModal,
  }: any = useModalsAppProvider();
  const [dialogContent, setDialogContent] = React.useState({
    display: "block",
  });

  const {
    bodyBackgroundColor,
    setBodyBackgroundColor,
    loading,
    isReadOnly,
  }: any = useAppProvider();
  const { bookingBigModalData, setBookingBigModalData }: any =
    usePageProvider();
  const textareaRef = useRef(null);
  const textareaStyle = {
    fontSize: fontSizeDataModal,
    lineHeight: "1.5",
    color: colorDataModal,
    fontFamily: fontDataModal,
    border: "none",
    // height: "350px",
    height: "100%",
    resize: "none" as const,
    position: "relative" as const,
    boxSizing: "border-box" as const,
    width: "100%",
  };
  const handleChangeText = (content) => {
    console.log("content", content);
    setBookingBigModalData(content);
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (isSmallModal) {
      console.log("textarea");
      if (textarea) {
        textarea.style.height = "auto"; // reset the height
        textarea.style.height = `${textarea.scrollHeight}px`; // set the new height based on the content
        isSmallModal = false;
      }
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        padding: "10px",
        height: "100%",
      }}
      onMouseEnter={() => setDialogContent({ display: "block" })}
      onMouseLeave={() => setDialogContent({ display: "none" })}
    >
      {isReadOnly ? null : <ModalDataOptionsUi style={dialogContent} />}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "2px",

          borderBottomColor: borderBottomColorDataModal,
          borderBottomWidth: `${borderBottomWidthDataModal}px`,
          borderTopColor: borderTopColorDataModal,
          borderTopWidth: `${borderTopWidthDataModal}px`,
          borderLeftColor: borderLeftColorDataModal,
          borderLeftWidth: `${borderLeftWidthDataModal}px`,
          borderRightColor: borderRightColorDataModal,
          borderRightWidth: `${borderRightWidthDataModal}px`,
          borderRightStyle: borderRightStyleDataModal,
          borderLeftStyle: borderLeftStyleDataModal,
          borderTopStyle: borderTopStyleDataModal,
          borderBottomStyle: borderBottomStyleDataModal,
          borderTopRightRadius: `${borderTopRightRadiusDataModal}px`,
          borderTopLeftRadius: `${borderTopLeftRadiusDataModal}px`,
          borderBottomRightRadius: `${borderBottomRightRadiusDataModal}px`,
          borderBottomLeftRadius: `${borderBottomLeftRadiusDataModal}px`,
          paddingTop: `${paddingTopDataModal}px`,
          paddingBottom: `${paddingBottomDataModal}px`,
          paddingLeft: `${paddingLeftDataModal}px`,
          paddingRight: `${paddingRightDataModal}px`,
          marginTop: `${marginTopDataModal}px`,
          marginBottom: `${marginBottomDataModal}px`,
          marginLeft: `${marginLeftDataModal}px`,
          marginRight: `${marginRightDataModal}px`,
          position: "relative",
          height: "100%",
        }}
      >
        {!isBookingList ? (
          <textarea
            ref={textareaRef}
            className="text-editor__textarea"
            value={bookingBigModalData}
            onChange={(e) => handleChangeText(e.target.value)}
            style={textareaStyle}
          />
        ) : (
          data.map((item, index) => (
            <p
              key={index + item.name}
              className="p-3 leading-5"
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                fontFamily: fontDataModal,
                fontSize: fontSizeDataModal,
                textAlign: "left",
                color: colorDataModal,
                font: fontDataModal,
              }}
            >
              {item.name}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default DialogContent;
