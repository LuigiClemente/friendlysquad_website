import dynamic from "next/dynamic";
const DynamicHeader = dynamic(() => import("../Header/Header"));

const Layout = ({ children }) => {
  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative" }}
      className="flex relative flex-col w-full min-h-full overflow-hidden bg-transparent"
    >
      <DynamicHeader />
      {children}
    </div>
  );
};

export default Layout;
