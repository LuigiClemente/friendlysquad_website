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
        marginTop: "10px",

        marginRight: "0px",
        width: "100%",
        minWidth: "230px",
        borderLeft: "1px solid grey",
        borderTop: "1px solid grey",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
      }}
    >
      {NOTE_CLOUD_SECTION.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              borderBottom: "0.5px solid grey",
            }}
            className="flex flex-row justify-between content-between items-center p-6 border-solid border-b-2 border-gray cursor-pointer hover:px-15 hover:text-2xl"
          >
            <div className="flex flex-row items-center justify-between content-between ">
              <a
                onClick={() => handleClick(item?.id)}
                className={`text-${
                  activeId === item?.id ? ["#000"] : ["#000"]
                }  flex flex-row  justify-between font-${
                  activeId === item?.id ? "extrabold" : "normal"
                } font-${activeId === item?.id ? "black" : "xl"}
                hover:text-2xl no-underline text-decoration-line: none;
                hover:no-underline font-[Ppneuemontreal] 
                `}
              >
                {/* {item.title} */}
                {t(`home.cloud_data.${index}.title`)}
              </a>
            </div>
            <ArrowRight color={activeId === item?.id ? "#000" : "#28282B"} />
          </div>
        );
      })}
    </div>
  );
};

export default CloudMenu;
