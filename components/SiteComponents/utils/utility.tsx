import { useEffect, useState } from "react";

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

// controls the scroll of the page when it arrives at specific part of pages it will scroll to specific part of the page and when scroll up it go to the first part of page
export const useScroll = (firstPart, secondPart) => {
  const [scroll, setScroll] = useState(0);
  const [isEndSlide, setIsEndSlide] = useState(false);
  const [isEndCloud, setIsEndCloud] = useState(false);
  const [isEndGlobe, setIsEndGlobe] = useState(false);
  const [isEndEdge, setIsEndEdge] = useState(false);
  const [isEndData, setIsEndData] = useState(false);
  const [isEndCloudData, setIsEndCloudData] = useState(false);
  const [isEndGlobeData, setIsEndGlobeData] = useState(false);
  const [isEndEdgeData, setIsEndEdgeData] = useState(false);
  const [isEndFooter, setIsEndFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const globePosition = secondPart.current.offsetTop;
      const cloudPosition = firstPart.current.offsetTop;
      if (scrollPosition > globePosition - 300) {
        setIsEndCloud(true);
      }
      if (scrollPosition > cloudPosition - 300) {
        setIsEndSlide(true);
      }
      if (scrollPosition > globePosition - 300) {
        setIsEndGlobe(true);
      }
      if (scrollPosition > globePosition + 300) {
        setIsEndEdge(true);
      }
      if (scrollPosition > globePosition + 700) {
        setIsEndData(true);
      }
      if (scrollPosition > globePosition + 1100) {
        setIsEndCloudData(true);
      }
      if (scrollPosition > globePosition + 1500) {
        setIsEndGlobeData(true);
      }
      if (scrollPosition > globePosition + 1900) {
        setIsEndEdgeData(true);
      }
      if (scrollPosition > globePosition + 2300) {
        setIsEndFooter(true);
      }
      setScroll(scrollPosition);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);
  return {
    scroll,
    isEndSlide,
    isEndCloud,
    isEndGlobe,
    isEndEdge,
    isEndData,
    isEndCloudData,
    isEndGlobeData,
    isEndEdgeData,
    isEndFooter,
  };
};
