import { useAppStateProvider } from "@appProvider/AppStateProvider";
import { useEffect, useRef } from "react";
import CarouselHorizontal from "../carousel/CarouselHorizontal";
import CloudCard from "../cloud/CloudCard";
import {
  GLOBAL_DESCRIPTION,
  GLOBAL_TITLE,
  NOTE_GLOBE_SECTION,
  SLIDER_IMAGES,
} from "../constant";
import GlobalEdgeNetwork from "../globe/GlobalEdgeNetwork";
import Layout from "../layout/Layout";

const HomeSite = () => {
  const myRef = useRef(undefined);
  const { isEndSlide, setIsEndSlide }: any = useAppStateProvider();
  useEffect(() => {
    if (isEndSlide) {
      myRef.current.scrollIntoView();
      setIsEndSlide(false);
    }
  }, [isEndSlide]);
  return (
    <div style={{ zIndex: 1000, position: "relative", width: "100%" }}>
      <Layout>
        <div className="header33_background-video-wrapper">
          <video
            autoPlay
            muted
            loop
            id="myVideo"
            className="header33_background-video"
          >
            <source src="/images/clouds.mp4" type="video/mp4" />
          </video>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CarouselHorizontal images={SLIDER_IMAGES} scrollFun={null} />

          <div
            ref={myRef}
            style={{
              height: "fit-content",
              width: "fit-content",
              // marginsTop: "250px",
            }}
          >
            <CloudCard />
            <GlobalEdgeNetwork
              title={GLOBAL_TITLE}
              noteList={NOTE_GLOBE_SECTION}
              description={GLOBAL_DESCRIPTION}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomeSite;
