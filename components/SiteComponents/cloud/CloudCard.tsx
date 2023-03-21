import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import Image from "next/image";
import { NOTE_CLOUD_SECTION } from "../constant";

const CloudCard = () => {
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
        margin: "100px",
        borderRadius: "5px",
        marginTop: "180px",
      }}
    >
      {NOTE_CLOUD_SECTION.map((item, index) => (
        <div key={index} style={{ marginBottom: "30px" }}>
          <div className="flex flex-row items-start content-start justify-start">
            <div className="pt-1 pb-0 pl-1 pr-1 rounded-md w-fit h-fit">
              <Image src={item.image} width={200} height={200} />
            </div>
            <p
              style={{ fontSize: "1.5vw", fontWeight: 400, color: "#000" }}
              className="mt-1 mb-2 ml-2 font-sans text-lg font-weight-400 leading-8 align-center  text-black"
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CloudCard;
