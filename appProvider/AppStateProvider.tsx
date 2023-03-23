import { createContext, useContext, useEffect, useState } from "react";
import { useModalsAppProvider } from "./ModalsAppProvider";

const Context = createContext({});

export const AppStateProvider = ({ children }: any) => {
  const [currentMenu, setCurrentMenu]: any = useState("HOME");
  const [isEndSlide, setIsEndSlide]: any = useState(false);
  const [isEndCloud, setIsEndCloud]: any = useState(false);
  const { setButtonFormat, buttonFormat }: any = useModalsAppProvider();

  useEffect(() => {
    if (buttonFormat) {
      console.log("buttonFormat", buttonFormat?.fontSizeButtons);
    }
  }, []);
  return (
    <Context.Provider
      value={{
        currentMenu,
        setCurrentMenu,
        isEndSlide,
        setIsEndSlide,
        isEndCloud,
        setIsEndCloud,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppStateProvider = () => useContext(Context);
