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
        width: "500px",
        position: "absolute",
        zIndex: 1000,
        left: "5%",
        top: "60%",
        height: "fit-content",
        paddingBottom: "150px",
      }}
    >
      <span
        style={{
          fontSize: "3rem",
          fontFamily: "Ppneuemontreal",
          fontWeight: 800,
          display: "flex",
          textAlign: "left",
        }}
        className="leading-10"
      >{`Welcome`}</span>
      <span
        style={{
          fontSize: "3rem",
          fontFamily: "Ppneuemontreal",
          fontWeight: 800,
        }}
        className="leading-11"
      >{`to Friendly Squad!`}</span>
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
