import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import BookingListModal from "../modals/BookingListModal";
import PageModal from "../modals/PageModal";
import Spinner from "../spinner/Spinner";
import { useWindowSize } from "../utils/utility";
import { usePageProvider } from "@appProvider/PageProvider";
const url = `/glade/Glade.htm`;
const GrassIframe = () => {
  const {
    pageModalServiceData,
    setPageModalServiceData,
    bookingBigModalData,
    setBookingBigModalData,
  }: any = usePageProvider();
  const { t: service } = useTranslation("service");
  const { t: booking } = useTranslation("home");

  // const { openBookList, setOpenBookList }: any = useAppStateProvider();
  const [openBookList, setOpenBookList] = useState(false);
  const openBookingModal = () => {
    setOpenBookList(true);
  };
  const pageRef = useRef();
  const size = useWindowSize();

  const [, setHeight] = React.useState("0px");
  const onLoad = () => {
    setHeight(size.height + "px");
  };
  if (typeof window == "undefined") {
    return null;
  }
  const [load, setLoad] = useState(true);
  useEffect(() => {
    document.getElementById("grass-iframe").onload = () => {
      {
        setLoad(true);
      }
    };
    setPageModalServiceData(service("services.dataModal"));
    setBookingBigModalData(service("booking.description"));
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
        ref={pageRef}
        id="grass-iframe"
        src={url}
        scrolling="yes"
        frameBorder={0}
        allowFullScreen={true}
        allow="autoplay; fullscreen"
        width="100%"
        style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
        height={size.height + 100}
        onLoad={onLoad}
        loading="lazy"
      />

      {load && (
        <PageModal
          title={service("services.title")}
          content={pageModalServiceData}
          openBookingList={openBookingModal}
          pageName="service"
          booking={bookingBigModalData}
        />
      )}

      {openBookList && (
        <BookingListModal
          title={"Booking"}
          content={bookingBigModalData}
          handleClose={() => setOpenBookList(false)}
          open={openBookList}
        />
      )}
    </div>
  );
};

export default GrassIframe;
