import Button from "@/Buttons/Button";
import ContentPageModal from "@/ContentPageModal/ContentPageModal";
import ButtonsOptionsUi from "@/CustomPopover/ButtonsOptionsUi";
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import React, { useState } from "react";
interface PageModalsProps {
  title?: string;
  content?: any;
  openBookingList?: () => void;
}

const PageModal = ({ title, content, openBookingList }: PageModalsProps) => {
  const [buttonStyle, setButtonStyle] = useState({ display: "none" });

  const { isReadOnly }: any = useAppProvider();

  const [showModal, setShowModal] = React.useState(true);

  // const { setOpenBookList }: any = useAppStateProvider();

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

  return (
    <>
      {showModal ? (
        <>
          {/* <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto relative w-full h-full  inset-0 z-50 outline-none focus:outline-none"> */}
          <div className="justify-center items-end flex relative h-fit w-fit mt-18  z-20">
            <div
              className="relative w-auto mx-auto max-w-xl bg-white border-0 rounded-lg shadow-lg customDialog"
              style={{
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
              <div className="relative flex flex-col w-full ">
                <div className="relative flex-auto">
                  <div className="mt-3 text-center sm:mt-5 ">
                    <ContentPageModal data={content} isBookingList={false} />
                  </div>
                </div>
                <div
                  className="flex items-center relative justify-center p-3 rounded-b"
                  onMouseEnter={() => setButtonStyle({ display: "block" })}
                  onMouseLeave={() => setButtonStyle({ display: "none" })}
                >
                  {isReadOnly ? null : <ButtonsOptionsUi style={buttonStyle} />}
                  <Button
                    style={{ width: "100px" }}
                    onClick={() => {
                      openBookingList();
                      setShowModal(false);
                    }}
                    label={"Book"}
                  />
                  <Button
                    style={{ width: "100px" }}
                    onClick={() => setShowModal(false)}
                    label={"Play"}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </>
      ) : null}
    </>
  );
};
export default PageModal;
