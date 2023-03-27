import { ChevronRight } from "@mui/icons-material";
import Image from "next/image";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NOTE_CLOUD_SECTION } from "../constant";

const CloudMenu = ({ activeId }: any) => {
  const { t } = useTranslation("");
  useEffect(() => {
    console.log("activeId", activeId);
  }, [activeId]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        margin: "10px",
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
              paddingTop: "25px",
              paddingBottom: "25px",
              paddingLeft: "20px",
              borderBottom: "0.5px dotted black",
            }}
          >
            <div className="flex flex-row items-center content-start justify-start">
              <a
                key={index}
                href="https://www.google.com"
                style={{
                  fontSize: activeId === item?.id ? "1.2rem" : "1rem",
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "row",
                  color: activeId === item?.id ? "#000" : "#28282B",
                  fontFamily: "Ppneuemontreal",
                }}
              >
                {/* {item.title} */}
                {t(`home.cloud_data.${index}.title`)}
              </a>
            </div>
            <ChevronRight />
          </div>
        );
      })}
    </div>
  );
};

export default CloudMenu;
