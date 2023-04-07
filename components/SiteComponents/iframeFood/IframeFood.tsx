import { useAppStateProvider } from "@appProvider/AppStateProvider";
import { useTranslation } from "next-i18next";
import React, { useEffect, useRef, useState } from "react";
import { MODAL_DATA } from "../constant";
import BookingListModal from "../modals/BookingListModal";
import PageModal from "../modals/PageModal";
import Spinner from "../spinner/Spinner";
import { useWindowSize } from "../utils/utility";
import { usePageProvider } from "@appProvider/PageProvider";
const url = `/foodGallery/FoodGallery.htm`;
const IframeFood = () => {
  const {
    pageModalAboutData,
    setPageModalAboutData,
    setBookingBigModalData,
    bookingBigModalData,
  }: any = usePageProvider();
  const { t: about } = useTranslation("about");
  const { t: booking } = useTranslation("home");
  const pageRef = useRef(null);
  const size = useWindowSize();
  const [src, setSrc] = useState(url);
  const [load, setLoad] = useState(false);
  const [, setHeight] = React.useState("0px");
  const [openBookList, setOpenBookList] = useState(false);
  const openBookingModal = () => {
    setOpenBookList(true);
  };
  const onLoad = () => {
    setHeight(size.height + "px");
  };
  useEffect(() => {
    document.getElementById("food-iframe").onload = () => {
      {
        setLoad(true);
      }
    };
  }, []);

  useEffect(() => {
    setPageModalAboutData(about("about_us.dataModal"));
    setBookingBigModalData(booking("booking.description"));
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
        id="food-iframe"
        src={src}
        scrolling="yes"
        frameBorder={0}
        allowFullScreen={true}
        allow="autoplay; fullscreen"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        width="100%"
        ref={pageRef}
        height={size.height + 100}
        onLoad={onLoad}
        loading="lazy"
      />

      {load && (
        <PageModal
          title={about("about_us.title")}
          content={pageModalAboutData}
          booking={bookingBigModalData}
          openBookingList={openBookingModal}
          pageName="about"
        />
      )}

      {openBookList && (
        <BookingListModal
          title={"Booking"}
          content={booking("booking.description")}
          handleClose={() => {
            setOpenBookList(false);
            console.log("close");
          }}
          open={openBookList}
        />
      )}
    </div>
  );
};

export default IframeFood;
