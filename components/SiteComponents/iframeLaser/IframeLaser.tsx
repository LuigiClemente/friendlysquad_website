import React, { useEffect, useRef, useState } from "react";
import Spinner from "../spinner/Spinner";
import { useWindowSize } from "../utils/utility";

const IframeLaser = () => {
  const pageRef = useRef(null);
  const size = useWindowSize();
  const [src, setSrc] = useState(`../parlour/the_Parlour.htm`);
  const [load, setLoad] = useState(true);
  const [, setHeight] = React.useState("0px");
  const [openBook, setOpenBook] = useState(true);
  const onLoad = () => {
    setHeight(size.height + "px");
  };
  useEffect(() => {
    document.getElementById("laser-iframe").onload = () => {
      {
        setLoad(true);
      }
    };
  }, []);
  return (
    <div className="w-full h-full">
      {!load ? <Spinner /> : null}
      <iframe
        id="laser-iframe"
        src={src}
        scrolling="yes"
        frameBorder={0}
        allowFullScreen={true}
        allow="autoplay; fullscreen"
        style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
        width="100%"
        ref={pageRef}
        height={size.height + 100}
        onLoad={onLoad}
        loading="lazy"
      />
    </div>
  );
};

export default IframeLaser;
