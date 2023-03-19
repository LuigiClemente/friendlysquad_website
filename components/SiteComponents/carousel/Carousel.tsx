import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import "swiper/swiper.css";
import "swiper/swiper-element-bundle.min.css";
import { Mousewheel, Pagination } from "swiper";
import { useState } from "react";
import { useWindowSize } from "../utils/utility";

const Carousel = ({ images, scrollFun }: any) => {
  let checkMouseWeel = false;
  const size = useWindowSize();
  console.log("check is   , ", checkMouseWeel);
  return (
    <div
      className="relative "
      style={{
        marginTop: "150px",
        marginBottom: "50px",
        zIndex: 10,
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <>
        <Swiper
          direction={"horizontal"}
          preventInteractionOnTransition={true}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={{ releaseOnEdges: true }}
          pagination={{
            clickable: true,
          }}
          onAnimationEnd={() => {
            scrollFun();
            console.log("animation end ");
          }}
          modules={[Mousewheel, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
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
                    style={{ width: "300px", height: "auto", zIndex: 10 }}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;
