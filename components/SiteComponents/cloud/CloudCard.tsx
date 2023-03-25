import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import Image from "next/image";
import { NOTE_CLOUD_SECTION } from "../constant";

const CloudCard = ({ item, index }: any) => {
  const {
    fontSizeDataTitle,
    fontDataTitle,
    colorDataTitle,
    // backgroundColorDataTitle,
    //  border
    borderBottomColorDataTitle,
    borderBottomWidthDataTitle,
    borderTopColorDataTitle,
    borderTopWidthDataTitle,
    borderLeftColorDataTitle,
    borderLeftWidthDataTitle,
    borderRightColorDataTitle,
    borderRightWidthDataTitle,
    // border style
    borderRightStyleDataTitle,
    borderLeftStyleDataTitle,
    borderTopStyleDataTitle,
    borderBottomStyleDataTitle,
    // border radius
    borderTopRightRadiusDataTitle,
    borderTopLeftRadiusDataTitle,
    borderBottomRightRadiusDataTitle,
    borderBottomLeftRadiusDataTitle,
    // padding
    paddingTopDataTitle,
    paddingBottomDataTitle,
    paddingLeftDataTitle,
    paddingRightDataTitle,
    // margin
    marginTopDataTitle,
    marginBottomDataTitle,
    marginLeftDataTitle,
    marginRightDataTitle,

    // -------------------------

    borderBottomColorData,
    borderBottomWidthData,
    borderTopColorData,
    borderTopWidthData,
    borderLeftColorData,
    borderLeftWidthData,
    borderRightColorData,
    borderRightWidthData,
    // border style
    borderRightStyleData,
    borderLeftStyleData,
    borderTopStyleData,
    borderBottomStyleData,
    // border radius
    borderTopRightRadiusData,
    borderTopLeftRadiusData,
    borderBottomRightRadiusData,
    borderBottomLeftRadiusData,
    // padding
    paddingTopData,
    paddingBottomData,
    paddingLeftData,
    paddingRightData,
    // margin
    marginTopData,
    marginBottomData,
    marginLeftData,
    marginRightData,
    fontSizeData,
    colorData,
    fontData,
  }: any = useModalsAppProvider();
  return (
    <div
      className="hero"
      style={{
        position: "relative",
        height: "fit-content",
        width: "fit-content",
      }}
    >
      <div
        style={{
          backgroundColor: "transparent",
          position: "relative",
          height: "fit-content",
          width: "fit-content",
          zIndex: 1000,
          borderRadius: "5px",
          padding: "40px",
          opacity: 1,
        }}
      >
        <div key={index} style={{ margin: "20px" }}>
          <div className="flex flex-col items-center content-start justify-start">
            {/* <div className="pt-1 pb-0 pl-1 pr-1 rounded-md w-fit h-fit mr-1">
            <Image src={item.image} width={60} height={60} />
          </div> */}
            <h1
              style={{
                color: "#000",
                textAlign: "left",
                width: "100%",
                fontWeight: 500,
                fontFamily: "Segoe UI",
                fontSize: "1.6rem",
              }}
            >
              {item.title}
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 500,
                color: "#000",
                textAlign: "left",
                fontFamily: "Segoe UI",
              }}
              className="mt-1 mb-2 ml-2 font-sans text-lg font-weight-500 leading-8 align-center  text-black"
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudCard;
