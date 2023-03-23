import { useAppStateProvider } from "@appProvider/AppStateProvider";
import { useEffect, useRef, useState } from "react";
import CarouselHorizontal from "../carousel/CarouselHorizontal";
import CloudDataComponent from "../cloud/CloudDataComponent";
import { SLIDER_IMAGES } from "../constant";
import GlobalEdgeNetwork from "../globe/GlobalEdgeNetwork";
import Layout from "../layout/Layout";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import { useScroll } from "../utils/utility";

const HomeSite = () => {
  const globeRef = useRef(undefined);
  const cloudRef = useRef(undefined);
  const { isEndSlide, setIsEndSlide, isEndCloud, setIsEndCloud }: any =
    useAppStateProvider();
  const [isSecondPart, setIsSecondPart] = useState(false);
  useScroll(cloudRef, globeRef);
  // useEffect(() => {
  //   if (isEndSlide) {
  //     cloudRef.current.scrollIntoView();
  //     setIsEndSlide(false);
  //   }
  // }, [isEndSlide]);

  // useEffect(() => {
  //   if (isSecondPart) {
  //     globeRef.current.scrollIntoView();
  //     setIsSecondPart(false);
  //   }
  // }, [isSecondPart]);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const globePosition = globeRef.current.offsetTop;
  //     const cloudPosition = cloudRef.current.offsetTop;
  //     if (!isSecondPart) {
  //       if (scrollPosition > globePosition - 400) {
  //         console.log("scrollPosition", scrollPosition);
  //         setIsSecondPart(true);
  //       }
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isSecondPart]);

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
            ref={cloudRef}
            style={{
              height: "fit-content",
              width: "fit-content",
              position: "relative",
              marginBottom: "300px",
            }}
          >
            <CloudDataComponent />
          </div>

          <div
            ref={globeRef}
            style={{
              height: "100%",
              width: "100%",
              padding: 0,
              margin: 0,
              zIndex: 1000,
            }}
          >
            <GlobalEdgeNetwork />
          </div>
        </div>
        <ScrollToTop />
      </Layout>
    </div>
  );
};

export default HomeSite;
