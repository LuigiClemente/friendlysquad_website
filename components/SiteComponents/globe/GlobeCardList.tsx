import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/swiper.css";
import "swiper/swiper.min.css";

import { NOTE_CLOUD_SECTION } from "../constant";
import GlobeCard from "../globe/GlobeCard";

const GlobeCardList = () => {
  return (
    <div
      style={{
        zIndex: 10,
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "transparent",
      }}
    >
      {NOTE_CLOUD_SECTION.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "transparent",
              border: "1px solid lightGrey",
              borderRadius: "10px",
              margin: "10px",
              padding: "20px",
              backgroundImage: "url(/img/icon/globetext.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "100% 0%",
              backgroundSize: "70px 70px",
            }}
          >
            <GlobeCard item={item} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default GlobeCardList;
