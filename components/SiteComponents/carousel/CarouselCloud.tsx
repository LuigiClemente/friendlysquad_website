import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/swiper-element-bundle.min.css";
import "swiper/swiper.css";
import "swiper/swiper.min.css";
import { Mousewheel, Pagination } from "swiper";
import { NOTE_CLOUD_SECTION } from "../constant";
import CloudCard from "../cloud/CloudCard";

const CarouselCloud = ({ getItemId }: any) => {
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
  return (
    <div
      id="verticalSwiper"
      style={{
        width: "100%",
        height: "900px",
        minHeight: "600px",
        zIndex: 10,
        marginTop: "10px",
      }}
    >
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        preventInteractionOnTransition={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={{
          releaseOnEdges: true,
          sensitivity: 1,
          forceToAxis: true,
          invert: false,
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
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
      >
        {NOTE_CLOUD_SECTION.map((item, index) => {
          return (
            <SwiperSlide
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
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide key={20}>Slide 4</SwiperSlide>
        <SwiperSlide key={21}>Slide 5</SwiperSlide>
        <SwiperSlide key={22}>Slide 6</SwiperSlide>
        <SwiperSlide key={23}>Slide 7</SwiperSlide>
        <SwiperSlide key={24}>Slide 8</SwiperSlide> */}
      </Swiper>
    </div>
  );
};
export default CarouselCloud;
