import { useAppStateProvider } from "@appProvider/AppStateProvider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/swiper.css";
import "swiper/swiper.min.css";

import { NOTE_CLOUD_SECTION } from "../constant";
import GlobeCard from "../globe/GlobeCard";
import CloudCard from "./CloudCard";

const CloudCardList = () => {
  return (
    <div
      id="verticalSwiper"
      style={{
        zIndex: 10,
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "transparent",
        margin: "10px",
      }}
    >
      {NOTE_CLOUD_SECTION.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              // backgroundColor: "transparent",
              padding: "20px",
              margin: "10px",
              border: "1px solid #000",
              borderRadius: "10px",
            }}
          >
            <CloudCard item={item} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default CloudCardList;
