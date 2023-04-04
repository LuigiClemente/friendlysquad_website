import { createContext, useContext, useState } from "react";

const Context = createContext({});

export const PageProvider = ({ children }: any) => {
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const usePageProvider = () => useContext(Context);
