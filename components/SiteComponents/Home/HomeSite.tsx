import { useRef, useState } from "react";
import CarouselHorizontal from "../carousel/CarouselHorizontal";
import CloudDataComponent from "../cloud/CloudDataComponent";
import { SLIDER_IMAGES } from "../constant";
import Layout from "../layout/Layout";
import ScrollToTop from "../scrollToTop/ScrollToTop";

const HomeSite = () => {
  const cloudRef = useRef(undefined);

  return (
    <div
      style={{
        zIndex: 1000,
        position: "relative",
        width: "100%",
        backgroundColor: "#000",
      }}
    >
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
            ref={cloudRef}
            style={{
              height: "fit-content",
              width: "fit-content",
              position: "relative",
              // marginBottom: "300px",
            }}
          >
            <CloudDataComponent />
          </div>
        </div>
        <ScrollToTop />
      </Layout>
    </div>
  );
};

export default HomeSite;
