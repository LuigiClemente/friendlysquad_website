import { useAppStateProvider } from "@appProvider/AppStateProvider";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const DynamicHeader = dynamic(() => import("../Header/Navbar"));
const Layout = ({ children, currentMenu }) => {
  // const { currentMenu }: any = useAppStateProvider();

  useEffect(() => {}, [currentMenu]);
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="flex flex-col w-full min-h-full bg-transparent z-40"
    >
      {currentMenu === "contact" ||
      currentMenu === "infrastructure" ||
      currentMenu === "service" ? (
        <>
          <DynamicHeader
            bgHeader={"transparent"}
            colorMenu={"#fff"}
            fixed={true}
          />
        </>
      ) : (
        <>
          <DynamicHeader
            bgHeader={`transparent`}
            colorMenu={"#000"}
            fixed={true}
          />
        </>
      )}

      {children}
    </div>
  );
};

export default Layout;
