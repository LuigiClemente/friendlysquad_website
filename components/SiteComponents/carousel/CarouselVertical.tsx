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
import { NOTE_GLOBE_SECTION } from "../constant";
import Image from "next/image";

const CarouselVertical = ({ images, scrollFun }: any) => {
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
      style={{ position: "relative" }}
    >
      <Swiper
        direction={"vertical"}
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
        {NOTE_GLOBE_SECTION.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <li
                key={index}
                // className="flex flex-col justify-start mb-5 text-sm text-friendly-light-dark leading-10"
              >
                <div className="flex flex-col items-start content-start justify-start">
                  <div className="pt-1 pb-0 pl-1 pr-1 rounded-md w-fit h-fit">
                    <Image src={item.image} width={50} height={50} />
                  </div>
                  <h2
                    className="font-sans text-3xl font-bold text-title text-darkgray"
                    style={{
                      width: "100%",
                    }}
                  >
                    {item?.title}
                  </h2>
                </div>
                <p
                  className="mt-1 mb-2 ml-2 font-sans text-base leading-10 align-center text-darkgray"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "fit-content",
                    padding: "2px",
                  }}
                >
                  {item.description}
                </p>
              </li>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <CarouselCard />
    </div>
  );
};

export default CarouselVertical;
