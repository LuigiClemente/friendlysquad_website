import React from "react";

const CarouselCard = () => {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "400px",
        position: "absolute",
        zIndex: 1000,
        left: "5%",
        top: "20%",
        height: "fit-content",
        paddingBottom: "100px",
      }}
    >
      <p
        style={{ fontFamily: "Ppneuemontreal", fontSize: "2rem" }}
      >{`Visual Designer + Developer`}</p>
      <p
        style={{
          fontSize: "5rem",
          fontFamily: "Ppneuemontreal",
          fontWeight: 800,
        }}
      >{`Zachary Hayes`}</p>
      <p
        style={{
          fontFamily: "Ppneuemontreal",
          fontSize: "2rem",
          padding: "10px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >{`View The Work`}</p>
    </div>
  );
};

export default CarouselCard;
