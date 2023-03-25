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
  useScroll(cloudRef, globeRef);
  const [isGlobePart, setIsGlobePart] = useState(false);

  // check when mouse wheel arrive to end of cloudRef it will show the globeRef
  useEffect(() => {
    if (!isGlobePart) {
      console.log("cloudRef =>", cloudRef.current.clientHeight);
      const cloudRefHeight = cloudRef.current.clientHeight;
      const cloudRefTop = cloudRef.current.offsetTop;
      const cloudRefBottom = cloudRefTop + cloudRefHeight;
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > cloudRefBottom + 100) {
          // globeRef.current.style.display = "block";
          console.log("jump on globe");
          setIsGlobePart(true);
          globeRef.current.scrollIntoView();
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      console.log("globeRef =>", globeRef.current.clientHeight);
      const globeRefHeight = globeRef.current.clientHeight;
      const globeRefTop = globeRef.current.offsetTop;
      const globeRefBottom = globeRefTop + globeRefHeight;
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > globeRefBottom + 100) {
          // globeRef.current.style.display = "block";
          console.log("jump on footer");
          // globeRef.current.scrollIntoView();
          // setIsGlobePart(true);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [cloudRef]);

  // if isGlobePart is true, be able to scroll to the end of the page
  useEffect(() => {
    if (isGlobePart) {
      globeRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
      console.log("globeRef =>", globeRef.current.clientHeight);
      // const handleScroll = () => {
      //   const scrollPosition = window.scrollY;
      //   const globeRefHeight = globeRef.current.clientHeight;
      //   const globeRefTop = globeRef.current.offsetTop;
      //   const globeRefBottom = globeRefTop + globeRefHeight;
      //   if (scrollPosition > globeRefBottom - 100) {
      //     console.log("jump on footer");
      //     // globeRef.current.style.display = "block";
      //     // globeRef.current.scrollIntoView();
      //     // setIsGlobePart(true);
      //   }
      // };
      // window.addEventListener("scroll", handleScroll);
      // return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [globeRef]);

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
