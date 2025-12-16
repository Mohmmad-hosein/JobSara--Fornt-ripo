import React, { createContext, useState, useContext } from "react";


interface AppContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  toggleDarkMode: () => void;
}

interface ApplicationDataProviderProps {
  children: React.ReactNode;
}

export const NewContext = createContext<AppContextType | undefined>(undefined);


export const ApplicationDataProvider: React.FC<
  ApplicationDataProviderProps
> = ({ children }) => {
  const [dark, setDark] = useState<boolean>(false);

  const toggleDark = (): void => {
    setDark((prev) => !prev);
  };

  const data: AppContextType = {
    darkMode: dark,
    setDarkMode: setDark,
    toggleDarkMode: toggleDark,
  };

  return <NewContext.Provider value={data}>{children}</NewContext.Provider>;
};


export const useAppContext = (): AppContextType => {
  const context = useContext(NewContext);
  if (context === undefined) {
    throw new Error(
      "useAppContext must be used within an ApplicationDataProvider"
    );
  }
  return context;
};
