import { usePageProvider } from "@appProvider/PageProvider";
import React from "react";
import { useTranslation } from "react-i18next";

const CarouselCard = () => {
  const { siteTitle }: any = usePageProvider();
  return (
    <div
      style={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "500px",
        position: "absolute",
        zIndex: 1000,
        left: "5%",
        top: "70%",
        height: "fit-content",
        paddingBottom: "150px",
      }}
    >
      <span
        style={{
          fontSize: "3rem",
          fontFamily: "Ppneuemontreal",
          fontWeight: 800,
          textAlign: "center",
          width: "350px",
          lineHeight: "1.2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="leading-10"
      >
        {siteTitle}
      </span>
      <p
        style={{
          fontFamily: "Ppneuemontreal",
          fontSize: "2rem",
          padding: "10px",
          border: "1px solid black",
          borderRadius: "5px",
          fontWeight: 500,
        }}
        className="leading-10"
      >{`View The Work`}</p>
    </div>
  );
};

export default CarouselCard;
