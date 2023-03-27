import { useAppStateProvider } from "@appProvider/AppStateProvider";
import React, { useEffect, useRef, useState } from "react";
import { ABOUT_US, MODAL_DATA } from "../constant";
import BookingListModal from "../modals/BookingListModal";
import PageModal from "../modals/PageModal";
import Spinner from "../spinner/Spinner";
import { useWindowSize } from "../utils/utility";
import { useTranslation } from "next-i18next";
const IframeFood = () => {
  const { t } = useTranslation("");
  const pageRef = useRef(null);
  const size = useWindowSize();
  const [src, setSrc] = useState(`../foodGallery/FoodGallery.htm`);
  const [load, setLoad] = useState(false);
  const [, setHeight] = React.useState("0px");
  const { openBookList, setOpenBookList }: any = useAppStateProvider();

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
  return (
    <div
      className="w-full h-full border-x-2 border-y-2 border-solid"
      style={{ border: "1px solid #000" }}
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
          title={t("about_us.title")}
          content={t("about_us.dataModal")}
        />
      )}

      {openBookList && (
        <BookingListModal
          title={"Booking"}
          content={MODAL_DATA}
          handleClose={() => setOpenBookList(false)}
          open={openBookList}
        />
      )}
    </div>
  );
};

export default IframeFood;
