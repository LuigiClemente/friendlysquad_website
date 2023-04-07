import ModalDataOptionsUi from "@/CustomPopover/ModalDataOptionsUi";
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { usePageProvider } from "@appProvider/PageProvider";
import React, { useEffect, useRef } from "react";

interface ContentPageModalProps {
  data: any;
  isBookingList?: boolean;
  currentPage?: string;
  booking?: any;
}

const ContentPageModal = ({
  data,
  isBookingList,
  currentPage,
  booking,
}: ContentPageModalProps) => {
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
  const [ContentPageModal, setContentPageModal] = React.useState({
    display: "block",
  });

  const {
    bodyBackgroundColor,
    setBodyBackgroundColor,
    loading,
    isReadOnly,
  }: any = useAppProvider();
  const {
    setPageModalAboutData,
    setPageModalServiceData,
    setPageModalContactUsData,
  }: any = usePageProvider();
  const textareaRef = useRef(null);
  const textareaStyle = {
    fontSize: fontSizeDataModal,
    lineHeight: "1.5",
    color: colorDataModal,
    fontFamily: fontDataModal,
    border: "none",
    height: "300px",
    resize: "none" as const,
    position: "relative" as const,
    boxSizing: "border-box" as const,
    width: "500px",
  };
  const [dataSmallModal, setDataSmallModal]: any = React.useState({});
  const handleChangeText = (content) => {
    if (currentPage === "about") {
      setPageModalAboutData(content);
    }
    if (currentPage === "service") {
      setPageModalServiceData(content);
    }
    if (currentPage === "contact") {
      setPageModalContactUsData(content);
    }

    setDataSmallModal(content);
  };

  useEffect(() => {
    setDataSmallModal(data);
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        padding: "10px",
        height: "100%",
      }}
      onMouseEnter={() => setContentPageModal({ display: "block" })}
      onMouseLeave={() => setContentPageModal({ display: "none" })}
    >
      {isReadOnly ? null : <ModalDataOptionsUi style={ContentPageModal} />}
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
            value={dataSmallModal}
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

export default ContentPageModal;
