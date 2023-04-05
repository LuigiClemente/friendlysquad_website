/* eslint-disable @next/next/no-img-element */
import { useAppProvider } from "@appProvider/AppProvider";
import { useState } from "react";
import CarouselBrand from "../carousel/CarouselBrand";
import CloudCardList from "./CloudCardList";
import CloudMenu from "./CloudMenu";

const CloudDataComponent = () => {
  const { isReadOnly }: any = useAppProvider();

  const [currentId, setCurrentId] = useState(0);

  const getIdCurrentItem = (id: any) => {
    setCurrentId(id);
  };

  return (
    <div
      className="my-30 relative m-0"
      style={{
        marginTop: "100px",
        zIndex: 10,
        backgroundColor: "transparent",
        height: "100%",
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "start",
        clip: "auto",
      }}
    >
      <div className="flex w-full justify-center lg:justify-between">
        <div className="hidden relative md:block md:sticky md:inset-x-0 md:top-0  md:bottom-auto z-30 self-auto items-stretch md:w-[35%] h-fit border-gray-1">
          <CloudMenu activeId={currentId} />
        </div>
        <div className="flex lg:w-[65%] flex-col w-full z-20   ">
          <CloudCardList getItemId={getIdCurrentItem} />
          {/* <CarouselCloud getItemId={getIdCurrentItem} /> */}
        </div>
      </div>
      <div className="flex flex-col w-full z-20  ">
        <CarouselBrand getItemId={getIdCurrentItem} />
      </div>
    </div>
  );
};
export default CloudDataComponent;
