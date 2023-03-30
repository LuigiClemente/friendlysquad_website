import { useAppStateProvider } from "@appProvider/AppStateProvider";
import dynamic from "next/dynamic";
import Navbar from "../Header/Navbar";
const DynamicHeader = dynamic(() => import("../Header/Header"));
const Layout = ({ children }) => {
  const { currentMenu }: any = useAppStateProvider();
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="flex flex-col w-full min-h-full bg-transparent z-40"
    >
      {currentMenu === "CONTACT US" ||
      currentMenu === "INFRASTUCTURE" ||
      currentMenu === "SERVICE" ? (
        <>
          {/* <DynamicHeader bgHeader={`bg-transparent`} colorMenu={"#fff"} /> */}
          <Navbar bgHeader={"transparent"} colorMenu={"#fff"} fixed={true} />
        </>
      ) : (
        <>
          <Navbar bgHeader={`transparent`} colorMenu={"#000"} fixed={true} />
        </>
      )}

      {children}
    </div>
  );
};

export default Layout;
