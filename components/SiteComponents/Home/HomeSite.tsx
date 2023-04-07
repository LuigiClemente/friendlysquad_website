import Footer from "@/Footer";
import FooterSite from "@/Footer/FooterSite";
import FooterSite1 from "@/Footer/FooterSite1";
import { useEffect, useRef, useState } from "react";
import CarouselHorizontal from "../carousel/CarouselHorizontal";
import CloudDataComponent from "../cloud/CloudDataComponent";
import { SLIDER_IMAGES } from "../constant";
import Layout from "../layout/Layout";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import { usePageProvider } from "@appProvider/PageProvider";
import { useTranslation } from "react-i18next";

const HomeSite = () => {
  const cloudRef = useRef(undefined);
  const { t }: any = useTranslation("common");
  const { siteTitle, setSiteTitle }: any = usePageProvider();

  useEffect(() => {
    setSiteTitle(t(`home.title`));
  }, []);

  return (
    <div
      style={{
        zIndex: 1000,
        position: "relative",
        width: "100%",
        backgroundColor: "#000",
      }}
    >
      <Layout currentMenu={"home"}>
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
          <CarouselHorizontal images={SLIDER_IMAGES} />
          <div
            ref={cloudRef}
            style={{
              height: "fit-content",
              width: "fit-content",
              position: "relative",
            }}
          >
            <CloudDataComponent />
          </div>
          <FooterSite1 color="#000" background={"rgb(255,255,255,0.5)"} />
        </div>

        <ScrollToTop />
      </Layout>
    </div>
  );
};

export default HomeSite;
