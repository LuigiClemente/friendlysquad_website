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
      style={{
        backgroundColor: "transparent",
        position: "relative",
        height: "fit-content",
        width: "fit-content",
        zIndex: 1000,
        margin: "20px",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <div key={index}>
        <div className="flex flex-col items-center content-start justify-start">
          <h1
            style={{
              color: "#000",
              textAlign: "left",
              width: "100%",
              fontWeight: 500,
              fontFamily: "Segoe UI",
            }}
          >
            {item.title}
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "#000",
              textAlign: "left",
              fontFamily: "Segoe UI",
            }}
            className="mt-1 mb-2 ml-2 font-sans text-lg font-weight-400 leading-8 align-center  text-black"
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudCard;
