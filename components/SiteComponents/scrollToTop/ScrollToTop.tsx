import ChevronUp from "@/icons/ChevronUp";
import React, { useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const handleScrollTop = () => {
      window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{
            position: "absolute",
            padding: "1rem",
            fontSize: "20px",
            bottom: "40px",
            right: "40px",
            boxShadow:
              "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;",
            backgroundColor: "#fff",
            color: "#fff",
            textAlign: "center",
            zIndex: "2000",
          }}
        >
          <ChevronUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
