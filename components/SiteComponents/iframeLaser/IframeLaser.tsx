import { useAppStateProvider } from "@appProvider/AppStateProvider";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import BookingListModal from "../modals/BookingListModal";
import PageModal from "../modals/PageModal";
import Spinner from "../spinner/Spinner";
import { useWindowSize } from "../utils/utility";
const url = `/parlour/the_Parlour.htm`;
const IframeLaser = () => {
  const { t } = useTranslation("");
  const pageRef = useRef(null);
  const size = useWindowSize();
  const [load, setLoad] = useState(true);
  const [, setHeight] = React.useState("0px");
  // const { openBookList, setOpenBookList }: any = useAppStateProvider();
  const [openBookList, setOpenBookList] = useState(false);
  const openBookingModal = () => {
    setOpenBookList(true);
  };
  const onLoad = () => {
    setHeight(size.height + "px");
  };
  useEffect(() => {
    document.getElementById("laser-iframe").onload = () => {
      {
        setLoad(true);
      }
    };
  }, []);
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        height: size.height + 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!load ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
        </div>
      ) : null}
      <iframe
        id="laser-iframe"
        src={url}
        scrolling="yes"
        frameBorder={0}
        allowFullScreen={true}
        allow="autoplay; fullscreen"
        style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
        width="100%"
        ref={pageRef}
        height={size.height + 100}
        onLoad={onLoad}
        loading="lazy"
      />

      {load && (
        <PageModal
          title={t("contact_us.title")}
          content={t("contact_us.dataModal")}
          openBookingList={openBookingModal}
        />
      )}

      {openBookList && (
        <BookingListModal
          title={"Booking"}
          content={t("about_us.description")}
          handleClose={() => setOpenBookList(false)}
          open={openBookList}
        />
      )}
    </div>
  );
};

export default IframeLaser;
