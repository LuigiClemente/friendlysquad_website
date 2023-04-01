import ModalDataOptionsUi from "@/CustomPopover/ModalDataOptionsUi";
import { MODAL_DATA } from "@/SiteComponents/constant";
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import React, { useEffect } from "react";

interface DialogContentProps {
  data: any;
  isBookingList?: boolean;
}

const DialogContent = ({ data, isBookingList }: DialogContentProps) => {
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
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        padding: "10px",
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
        }}
      >
        {!isBookingList ? (
          <p
            style={{
              marginBottom: "10px",
              fontFamily: fontDataModal,
              fontSize: fontSizeDataModal,
              textAlign: "left",
              color: colorDataModal,
            }}
          >
            {data}
          </p>
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
