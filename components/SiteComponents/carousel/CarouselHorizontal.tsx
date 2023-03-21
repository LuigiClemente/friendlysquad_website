import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import "swiper/swiper.css";
import "swiper/swiper-element-bundle.min.css";
import { Mousewheel, Pagination } from "swiper";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../utils/utility";
import CarouselCard from "./CarouselCard";
import { useAppStateProvider } from "@appProvider/AppStateProvider";

const CarouselHorizontal = ({ images, scrollFun }: any) => {
  const size = useWindowSize();
  const { isEndSlide, setIsEndSlide }: any = useAppStateProvider();
  // const myRef = useRef(undefined);
  // useEffect(() => {
  //   if (!isEndSlide) {
  //     myRef.current.scrollIntoView();
  //   }
  // }, [isEndSlide]);
  return (
    <div
      // ref={myRef}
      style={{
        marginTop: "150px",
        zIndex: 10,
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "fit-content",
        minHeight: "fit-content",
      }}
    >
      <Swiper
        direction={"horizontal"}
        preventInteractionOnTransition={true}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{ releaseOnEdges: true }}
        onReachEnd={() => {
          console.log("reach end");
          setIsEndSlide(true);
          console.log("reach end", isEndSlide);
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        style={{
          width: size.width - 200,
          minWidth: size.width - 200,
        }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  zIndex: 10,
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <img
                  src={image.img}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: `${image.width}`,
                    height: "auto",
                    zIndex: 10,
                  }}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <CarouselCard />
    </div>
  );
};

export default CarouselHorizontal;
