import { useAppStateProvider } from "@appProvider/AppStateProvider";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper-element-bundle.min.css";
import "swiper/swiper.css";
import "swiper/swiper.min.css";
import { useWindowSize } from "../utils/utility";
import CarouselCard from "./CarouselCard";

const CarouselHorizontal = ({ images }: any) => {
  const size = useWindowSize();
  const { isEndSlide, setIsEndSlide }: any = useAppStateProvider();

  return (
    <div
      id="horizontalSwiper"
      style={{
        marginTop: "150px",
        marginBottom: "150px",
        zIndex: 2,
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignContent: "center",
        height: "fit-content",
        minHeight: "fit-content",
      }}
    >
      <CarouselCard />
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
        // style={{
        //   width: parseInt(size.width) - 200,
        //   minWidth: parseInt(size.width) - 200,
        // }}
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

        <SwiperSlide key={12}>
          <div></div>
        </SwiperSlide>
        <SwiperSlide key={13}>
          <div></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselHorizontal;
