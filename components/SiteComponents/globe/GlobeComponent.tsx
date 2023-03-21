import { useAppProvider } from "@appProvider/AppProvider";
import { useAppStateProvider } from "@appProvider/AppStateProvider";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { VOLCANOES } from "../constant";

const GlobeDynamic = dynamic(import("react-globe.gl"), { ssr: false });
const GlobeComponent = () => {
  const { containerBackgroundColor }: any = useAppProvider();

  return (
    <div>
      <GlobeDynamic
        width={600}
        height={600}
        //  backgroundColor={containerBackgroundColor}
        //  backgroundColor={`#000`}
        globeImageUrl="/img/globe/earth-night.png"
        backgroundImageUrl="/img/globe/night-sky.png"
        pointsData={VOLCANOES}
        pointLat="lat"
        pointLng="lon"
        // add image pin to point
        bumpImageUrl="/img/globe/earth-night9.png"
        pointAltitude="elevation"
        pointRadius={0.5}
        pointColor={() => "rgba(255, 255, 125, 0.8)"}
        pointResolution={2}
        pointLabel="name"
      />
    </div>
  );
};
export default GlobeComponent;
