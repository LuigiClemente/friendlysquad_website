import { useAppStateProvider } from "@appProvider/AppStateProvider";
import dynamic from "next/dynamic";
import { useState } from "react";
const DynamicHeader = dynamic(() => import("../Header/Header"));
const Layout = ({ children }) => {
  const { currentMenu }: any = useAppStateProvider();
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="flex flex-col w-full min-h-full bg-transparent"
    >
      {currentMenu === "CONTACT US" ? (
        <DynamicHeader bgHeader={`bg-transparent`} colorMenu={"#fff"} />
      ) : (
        <DynamicHeader bgHeader={`bg-transparent`} colorMenu={"#000"} />
      )}

      {children}
    </div>
  );
};

export default Layout;
