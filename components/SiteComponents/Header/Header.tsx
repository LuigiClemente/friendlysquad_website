import { Dialog } from "@headlessui/react";
import { useState } from "react";

import HeaderOptionsUi from "@/CustomPopover/HeaderOptionsUi";
import Bars from "@/icons/Bars";
import Globe from "@/icons/Globe";
import XMark from "@/icons/XMark";
import Logo from "@/Logo";
import { useAppProvider } from "@appProvider/AppProvider";
import { useAppStateProvider } from "@appProvider/AppStateProvider";
import { LANGUAGES, NAVIGATION } from "../constant";
import LangsModal from "../modals/LangsModal";

const navigation = NAVIGATION;

const Header = ({ bgHeader, colorMenu }: any) => {
  const {
    dialogOpenHeader,
    setDialogOpenHeader,
    setHeaderDBFormat,
    isReadOnly,
    // -------------------------- Header --------------------------
    fontSizeHeader,
    fontHeader,
    colorHeader,
    backgroundColorHeader,
    //  border
    borderBottomColorHeader,
    borderBottomWidthHeader,
    borderTopColorHeader,
    borderTopWidthHeader,
    borderLeftColorHeader,
    borderLeftWidthHeader,
    borderRightColorHeader,
    borderRightWidthHeader,
    // border style
    borderRightStyleHeader,
    borderLeftStyleHeader,
    borderTopStyleHeader,
    borderBottomStyleHeader,
    // border radius
    borderTopRightRadiusHeader,
    borderTopLeftRadiusHeader,
    borderBottomRightRadiusHeader,
    borderBottomLeftRadiusHeader,
    // padding
    paddingTopHeader,
    paddingBottomHeader,
    paddingLeftHeader,
    paddingRightHeader,
    // margin
    marginTopHeader,
    marginBottomHeader,
    marginLeftHeader,
    marginRightHeader,
    // header hight and width
    headerMenus,
    setHeaderMenus,
  }: any = useAppProvider();

  const { currentMenu, setCurrentMenu }: any = useAppStateProvider();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openLan, setOpenLan] = useState(false);
  const closeLanModals = () => {
    setOpenLan(false);
  };
  const [style, setStyle] = useState({ display: "none" });
  return (
    <header
      className={`absolute top-0 left-0 right-0 z-10 w-full overflow-hidden ${bgHeader} `}
      onMouseEnter={() => {
        setStyle({ display: "block" });
      }}
      onMouseLeave={() => {
        setStyle({ display: "none" });
      }}
    >
      <HeaderOptionsUi style={style}></HeaderOptionsUi>
      <nav
        style={{
          fontSize: fontSizeHeader,
          fontFamily: fontHeader,
          borderBottomColor: `${borderBottomColorHeader}px`,
          borderBottomWidth: `${borderBottomWidthHeader}px`,
          borderTopColor: borderTopColorHeader,
          borderTopWidth: `${borderTopWidthHeader}px`,
          borderLeftColor: borderLeftColorHeader,
          borderLeftWidth: `${borderLeftWidthHeader}px`,
          borderRightColor: borderRightColorHeader,
          borderRightWidth: `${borderRightWidthHeader}px`,
          // border style
          borderRightStyle: borderRightStyleHeader,
          borderLeftStyle: borderLeftStyleHeader,
          borderTopStyle: borderTopStyleHeader,
          borderBottomStyle: borderBottomStyleHeader,
          // border radius
          borderTopRightRadius: `${borderTopRightRadiusHeader}px`,
          borderTopLeftRadius: `${borderTopLeftRadiusHeader}px`,
          borderBottomRightRadius: `${borderBottomRightRadiusHeader}px`,
          borderBottomLeftRadius: `${borderBottomLeftRadiusHeader}px`,
          // padding
          paddingTop: `${paddingTopHeader}px`,
          paddingBottom: `${paddingBottomHeader}px`,
          paddingLeft: `${paddingLeftHeader}px`,
          paddingRight: `${paddingRightHeader}px`,
          // margin
          marginTop: `${marginTopHeader}px`,
          marginBottom: `${marginBottomHeader}px`,
          marginLeft: `${marginLeftHeader}px`,
          marginRight: `${marginRightHeader}px`,
          display: "flex",
          position: "relative",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        className="flex items-center justify-between p-6 mx-auto bg-transparent bg-opacity-25 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden ">
          <button
            type="button"
            className="inline-flex items-center justify-center text-gray-700 -m-2.5 rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars />
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                // href={item.href}
                className="text-sm font-semibold leading-6"
                style={{
                  fontSize: fontSizeHeader,
                  fontFamily: fontHeader,
                  textDecoration: "none",
                  color: colorMenu,
                }}
                onClick={() => {
                  setCurrentMenu(item.name);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ml-6">
            <button className="block px-3 -mx-3 text-base font-semibold text-gray-900 rounded-lg py-2.5 leading-7 "></button>
            <button
              onClick={() => {
                console.log("click on lan button");
                setOpenLan(true);
              }}
              className="text-sm font-semibold text-gray-900 leading-6"
            >
              <Globe color={colorMenu} />
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          style={{
            fontSize: fontSizeHeader,
            fontFamily: fontHeader,
            color: colorHeader,
            // backgroundColor: backgroundColorHeader,
            // border
            borderBottomColor: `${borderBottomColorHeader}px`,
            borderBottomWidth: `${borderBottomWidthHeader}px`,
            borderTopColor: borderTopColorHeader,
            borderTopWidth: `${borderTopWidthHeader}px`,
            borderLeftColor: borderLeftColorHeader,
            borderLeftWidth: `${borderLeftWidthHeader}px`,
            borderRightColor: borderRightColorHeader,
            borderRightWidth: `${borderRightWidthHeader}px`,
            // border style
            borderRightStyle: borderRightStyleHeader,
            borderLeftStyle: borderLeftStyleHeader,
            borderTopStyle: borderTopStyleHeader,
            borderBottomStyle: borderBottomStyleHeader,
            // border radius
            borderTopRightRadius: `${borderTopRightRadiusHeader}px`,
            borderTopLeftRadius: `${borderTopLeftRadiusHeader}px`,
            borderBottomRightRadius: `${borderBottomRightRadiusHeader}px`,
            borderBottomLeftRadius: `${borderBottomLeftRadiusHeader}px`,
            // padding
            paddingTop: `${paddingTopHeader}px`,
            paddingBottom: `${paddingBottomHeader}px`,
            paddingLeft: `${paddingLeftHeader}px`,
            paddingRight: `${paddingRightHeader}px`,
            // margin
            marginTop: `${marginTopHeader}px`,
            marginBottom: `${marginBottomHeader}px`,
            marginLeft: `${marginLeftHeader}px`,
            marginRight: `${marginRightHeader}px`,
          }}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="text-gray-700 -m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              {/* <XMark classCss={`h-6 w-6 text-black`} /> */}
              <XMark />
              close
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    // href={item.href}
                    className="block px-3 py-2 -mx-3 text-base font-semibold text-gray-900 rounded-lg leading-7"
                    style={{
                      fontSize: fontSizeHeader,
                      fontFamily: fontHeader,
                      color: colorHeader,
                      textDecoration: "none",
                    }}
                    onClick={() => {
                      setCurrentMenu(item.name);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <span
                  onClick={() => {
                    console.log("click on lan button");
                    setOpenLan(true);
                  }}
                  className="block px-3 -mx-3 text-base font-semibold text-gray-900 rounded-lg py-2.5 leading-7"
                >
                  <Globe />
                </span>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      {openLan && (
        <LangsModal
          title={`Languages`}
          content={LANGUAGES}
          handleClose={closeLanModals}
          open={openLan}
        />
      )}
    </header>
  );
};

export default Header;
