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

  const [bookingListModalData, setBookingListModalData] = useState({
    title: "",
    description: "",
  });

  const [cloudData, setCloudData]: any = useState([]);
  const [globeData, setGlobeData]: any = useState([]);
  return (
    <Context.Provider
      value={{
        pageModalData,
        setPageModalData,
        bookingListModalData,
        setBookingListModalData,
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const usePageProvider = () => useContext(Context);
