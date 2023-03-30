import { useState } from "react";

import { NOTE_CLOUD_SECTION } from "../constant";
import CloudCard from "./CloudCard";
const CloudCardList = ({ getItemId }: any) => {
  const mouseInStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    border: "none",
  };
  const mouseOutStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    border: "1px solid grey",
  };
  const [isHovering, setIsHovering] = useState(null);

  const handleMouseOver = (id: any) => {
    setIsHovering(id);
    getItemId(id);
  };

  const handleClick = (id: any) => {
    setIsHovering(id);
    getItemId(id);
  };

  const handleMouseOut = () => setIsHovering(null);

  //
  return (
    <div
      style={{
        zIndex: 10,
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "transparent",
        margin: "10px",
        marginLeft: "0px",
      }}
    >
      {NOTE_CLOUD_SECTION.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              borderRadius: "0px",
              ...(isHovering && isHovering === item?.id
                ? mouseInStyle
                : mouseOutStyle),
            }}
            onMouseOver={() => handleMouseOver(item?.id)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(item?.id)}
          >
            <div
              style={
                {
                  // backgroundImage: `url(${item.image})`,
                  // backgroundRepeat: "no-repeat",
                  // backgroundPosition: "50% 50%",
                  // backgroundSize: "250px 250px",
                }
              }
            >
              <CloudCard item={item} index={index} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CloudCardList;
