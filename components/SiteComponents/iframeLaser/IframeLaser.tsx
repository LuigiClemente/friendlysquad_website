import { useAppStateProvider } from "@appProvider/AppStateProvider";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MODAL_DATA } from "../constant";
import BookingListModal from "../modals/BookingListModal";
import PageModal from "../modals/PageModal";
import Spinner from "../spinner/Spinner";
import { useWindowSize } from "../utils/utility";

const IframeLaser = () => {
  const { t } = useTranslation("");
  const pageRef = useRef(null);
  const size = useWindowSize();
  const [src, setSrc] = useState(`../parlour/the_Parlour.htm`);
  const [load, setLoad] = useState(true);
  const [, setHeight] = React.useState("0px");
  const { openBookList, setOpenBookList }: any = useAppStateProvider();
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
    <div className="w-full h-full">
      {!load ? <Spinner /> : null}
      <iframe
        id="laser-iframe"
        src={src}
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

export default IframeLaser;
