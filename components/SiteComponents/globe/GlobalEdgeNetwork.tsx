import FooterSite1 from "@/Footer/FooterSite1";
import Scene from "./ColorGlobe/Scene";
import GlobeCardList from "./GlobeCardList";

const GlobalEdgeNetwork = () => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <div
        className="globe"
        style={{
          width: "100%",
          margin: 0,
          height: "100%",
          paddingTop: "200px",
          backgroundColor: "#000",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className={`flex relative flex-col lg:flex-row lg:justify-between`}
          id={`sectionId`}
        >
          <div className="w-full lg:sticky lg:inset-x-0 lg:top-0 lg:left-0 lg:bottom-auto z-30 self-auto items-stretch lg:w-[60%] h-fit">
            {/* <GlobeComponent /> */}
            <Scene />
          </div>
          <div className="flex flex-col w-full lg:w-[40%] z-20 lg:pr-5">
            <GlobeCardList />
          </div>
        </div>
        <FooterSite1 color="#fff" background={"rgb(0,0,0,0.5)"} />
      </div>
    </div>
  );
};
export default GlobalEdgeNetwork;
