import { ChevronRight } from "@mui/icons-material";
import Image from "next/image";
import { NOTE_CLOUD_SECTION } from "../constant";

const CloudMenu = () => {
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
              // width: "300px",
              borderBottom: "0.5px dotted black",
            }}
          >
            <div className="flex flex-row items-center content-start justify-start">
              <div className="pt-1 pb-0 pl-1 pr-1 rounded-md w-fit h-fit mr-1">
                <Image src={item.image} width={60} height={60} />
              </div>
              <a
                key={index}
                href="https://www.google.com"
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "row",
                  color: "#000",
                  fontFamily: "Ppneuemontreal",
                }}
              >
                {item.title}
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
