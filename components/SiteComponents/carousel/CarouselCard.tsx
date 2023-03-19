import React from "react";

const CarouselCard = () => {
  return (
    <div
      style={{
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "10px",
        width: "100%",
        position: "absolute",
        zIndex: 100,
        height: "fit-content",
      }}
    >
      <div
        style={{
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          width: "200px",
          position: "absolute",
        }}
      >
        <p
          style={{ fontFamily: "Ppneuemontreal", fontSize: "2rem" }}
        >{`Visual Designer + Developer`}</p>
        <p
          style={{ fontSize: "3rem", fontFamily: "Ppneuemontreal" }}
        >{`Zachary Hayes`}</p>
        <p
          style={{ fontFamily: "Ppneuemontreal", fontSize: "2rem" }}
        >{`View The Work`}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
