import { NOTE_CLOUD_SECTION } from "@/SiteComponents/constant";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({});

export const PageProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");
  const [themeChecker, setThemeChecker] = useState("light");
  const [currentPage, setCurrentPage] = useState("light");
  const [pageModalData, setPageModalData] = useState({
    title: "",
    dataModal: "",
  });
  const [siteTitle, setSiteTitle] = useState("");

  const [pageModalAboutData, setPageModalAboutData] = useState({
    title: "",
    dataModal: "",
    description: "",
  });

  const [pageModalContactUsData, setPageModalContactUsData] = useState({
    title: "",
    dataModal: "",
    description: "",
  });

  const [pageModalServiceData, setPageModalServiceData] = useState({
    title: "",
    dataModal: "",
    description: "",
  });

  const [bookingBigModalData, setBookingBigModalData] = useState({
    title: "",
    description: "",
  });

  const [cloudData, setCloudData]: any = useState([]);
  const [globeData, setGlobeData]: any = useState([]);
  const [infrastructureData, setInfrastructureData]: any = useState([]);
  return (
    <Context.Provider
      value={{
        pageModalData,
        setPageModalData,
        bookingBigModalData,
        setBookingBigModalData,
        pageModalAboutData,
        setPageModalAboutData,
        pageModalServiceData,
        setPageModalServiceData,
        pageModalContactUsData,
        setPageModalContactUsData,
        cloudData,
        setCloudData,
        globeData,
        setGlobeData,
        theme,
        setTheme,
        themeChecker,
        setThemeChecker,
        currentPage,
        setCurrentPage,
        infrastructureData,
        setInfrastructureData,
        siteTitle,
        setSiteTitle,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const usePageProvider = () => useContext(Context);
