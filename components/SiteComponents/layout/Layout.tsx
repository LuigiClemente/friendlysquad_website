import { useAppStateProvider } from "@appProvider/AppStateProvider";
import dynamic from "next/dynamic";
const DynamicHeader = dynamic(() => import("../Header/Header"));
const Layout = ({ children }) => {
  const { currentMenu }: any = useAppStateProvider();
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="flex flex-col w-full min-h-full overflow-hidden bg-transparent"
    >
      <DynamicHeader
        customStyle={currentMenu === "HOME" ? `bg-transparent` : `bg-white`}
      />
      {children}
    </div>
  );
};

export default Layout;
