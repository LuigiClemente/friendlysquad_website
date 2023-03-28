import HeaderOptionsUi from "@/CustomPopover/HeaderOptionsUi";
import BarrIcon from "@/icons/BarrIcon";
import Globe from "@/icons/Globe";
import Logo from "@/Logo";
import { useAppProvider } from "@appProvider/AppProvider";
import { useAppStateProvider } from "@appProvider/AppStateProvider";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES, NAVIGATION } from "../constant";
import LangsModal from "../modals/LangsModal";

const Navbar = ({ bgHeader, colorMenu, fixed }: any) => {
  const { currentMenu, setCurrentMenu }: any = useAppStateProvider();

  const [openLan, setOpenLan] = useState(false);
  const closeLanModals = () => {
    setOpenLan(false);
  };
  const [style, setStyle] = useState({ display: "none" });
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [backgroundHeader, setBackgroundHeader] = useState("bg-transparent");
  const {
    isReadOnly,
    fontSizeHeader,
    fontHeader,
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
  }: any = useAppProvider();
  const { t } = useTranslation();

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => {
        setStyle({ display: "block" });
      }}
      onMouseLeave={() => {
        setStyle({ display: "none" });
      }}
    >
      <HeaderOptionsUi style={style} />
      <nav
        className={
          "z-30 flex flex-wrap items-center justify-between absolute top-0 left-0 right-0  w-full" +
          bgHeader
        }
        style={{
          backgroundColor: navbarOpen ? "rgb(255, 255, 255, 0.9)" : bgHeader,
        }}
      >
        <div
          className="w-full mx-auto flex flex-wrap items-center justify-between"
          style={{
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
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <Logo />
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              style={{ color: colorMenu }}
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <BarrIcon color={colorMenu} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {NAVIGATION.map((item) => (
                <li className="nav-item" key={item.name}>
                  <a
                    className="font-bold leading-6  text-sm px-2 py-2 flex items-center hover:opacity-75"
                    style={{
                      fontSize: fontSizeHeader,
                      // fontFamily: fontHeader,
                      textDecoration: "none",
                      color: colorMenu,
                      cursor: "pointer",
                      fontFamily: "Ppneuemontreal",
                    }}
                    onClick={() => {
                      setCurrentMenu(item.name);
                    }}
                  >
                    {t(`header.${item.tag}`)}
                    {/* {item.name} */}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a
                  className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  onClick={() => {
                    console.log("click");
                    setOpenLan(true);
                  }}
                >
                  <Globe color={colorMenu} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {openLan && (
          <LangsModal
            title={`Languages`}
            content={LANGUAGES}
            handleClose={closeLanModals}
            open={openLan}
          />
        )}
      </nav>
    </div>
  );
};
export default Navbar;
