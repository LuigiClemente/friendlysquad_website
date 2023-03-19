import { useEffect, useRef } from "react";
import Carousel from "../carousel/Carousel";
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
  // jump scroll to the ref

  useEffect(() => {
    // myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    window.scrollTo({ behavior: "smooth", top: myRef.current?.offsetTop });
  }, []);

  // const executeScroll = () => myRef.current.scrollIntoView();
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
          <Carousel images={SLIDER_IMAGES} scrollFun={null} />
          <GlobalEdgeNetwork
            title={GLOBAL_TITLE}
            noteList={NOTE_GLOBE_SECTION}
            description={GLOBAL_DESCRIPTION}
            ref={myRef}
          />
        </div>
      </Layout>
    </div>
  );
};

export default HomeSite;
