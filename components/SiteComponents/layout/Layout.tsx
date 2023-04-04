import dynamic from "next/dynamic";
const DynamicHeader = dynamic(() => import("../Header/Navbar"));
const Layout = ({ children, currentMenu }) => {
  // const { currentMenu }: any = useAppStateProvider();

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
            navbarOpenBg={
              currentMenu === "about" || currentMenu === "home"
                ? "rgb(255,255,255,0.5)"
                : "rgb(0,0,0,0.5)"
            }
            fixed={true}
            currentMenu={currentMenu}
          />
        </>
      ) : (
        <>
          <DynamicHeader
            bgHeader={`transparent`}
            colorMenu={"#000"}
            navbarOpenBg={
              currentMenu === "about" || currentMenu === "home"
                ? "rgb(255,255,255,0.5)"
                : "rgb(0,0,0,0.5)"
            }
            fixed={true}
            currentMenu={currentMenu}
          />
        </>
      )}

      {children}
    </div>
  );
};

export default Layout;
