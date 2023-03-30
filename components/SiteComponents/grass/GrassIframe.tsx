import { useAppStateProvider } from "@appProvider/AppStateProvider";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MODAL_DATA } from "../constant";
import BookingListModal from "../modals/BookingListModal";
import PageModal from "../modals/PageModal";
import Spinner from "../spinner/Spinner";
import { useWindowSize } from "../utils/utility";

const GrassIframe = () => {
  const { t } = useTranslation("");

  const { openBookList, setOpenBookList }: any = useAppStateProvider();
  const pageRef = useRef();
  const size = useWindowSize();
  const [src, setSrc] = useState(`../glade/Glade.htm`);

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
  }, []);
  return (
    <div
      style={{ width: "100%", position: "relative", height: size.height + 100 }}
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
        src={src}
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
          title={t("services.title")}
          content={t("services.dataModal")}
        />
      )}

      {openBookList && (
        <BookingListModal
          title={"Booking"}
          content={MODAL_DATA}
          handleClose={() => setOpenBookList(false)}
          open={openBookList}
          hasFooter={true}
        />
      )}
    </div>
  );
};

export default GrassIframe;
