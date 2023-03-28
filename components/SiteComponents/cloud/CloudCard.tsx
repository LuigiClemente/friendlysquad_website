import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("");
  return (
    <div
      // className="hero"
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
          height: "400px",
          width: "fit-content",
          zIndex: 1000,
          borderRadius: "5px",
          padding: "40px",
          opacity: 1,
        }}
      >
        <div key={index} style={{ margin: "20px" }}>
          <div className="flex flex-col items-center content-start justify-start">
            <h1
              style={{
                color: "#000",
                textAlign: "left",
                width: "100%",
                fontWeight: 500,
                fontFamily: "Segoe UI",
                fontSize: "2rem",
              }}
            >
              {/* {item.title} */}
              {t(`home.cloud_data.${index}.title`)}
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: 400,
                color: "#000",
                textAlign: "left",
                fontFamily: "Segoe UI",
              }}
              className="mt-1 mb-2 ml-2 font-sans text-lg font-weight-500 leading-8 align-center text-black"
            >
              {t(`home.cloud_data.${index}.description`)}
              {/* {item.description} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudCard;
