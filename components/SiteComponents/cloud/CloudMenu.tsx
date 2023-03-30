import ArrowRight from "@/icons/ArrowRight";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NOTE_CLOUD_SECTION } from "../constant";

const CloudMenu = ({ activeId }: any) => {
  const { t } = useTranslation("");

  let cloudCardId = "cloud-card-1";
  useEffect(() => {
    console.log("activeId", activeId, cloudCardId);
  }, [activeId]);

  const handleClick = (id: any) => {
    cloudCardId = "cloud-card-" + id;
    console.log("==>id :", id, cloudCardId);
    document.getElementById(cloudCardId)?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        margin: "10px",
        marginRight: "0px",
        border: "1px solid grey",
      }}
    >
      {NOTE_CLOUD_SECTION.map((item, index) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
              borderBottom: "0.5px dotted grey",
            }}
            className="cursor-pointer hover:px-15 hover:text-2xl"
          >
            <div className="flex flex-row items-center content-start justify-start">
              <a
                key={index}
                style={{
                  fontSize: activeId === item?.id ? "1.2rem" : "1rem",
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "row",
                  color: activeId === item?.id ? "#000" : "#28282B",
                  fontFamily: "Ppneuemontreal",
                }}
                className="cursor-pointer hover:px-15 hover:text-2xl"
                onClick={() => handleClick(item?.id)}
              >
                {/* {item.title} */}
                {t(`home.cloud_data.${index}.title`)}
              </a>
            </div>
            <ArrowRight color={activeId === item?.id ? "#000" : "#28282B"} />
            {/* <ChevronRight /> */}
          </div>
        );
      })}
    </div>
  );
};

export default CloudMenu;
