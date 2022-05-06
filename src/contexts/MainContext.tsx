import { createContext, useContext, useState } from "react";

export type Page =
  | "home"
  | "aboutus"
  | "contact"
  | "boardDirectors"
  | "groupCompanies"
  | "location"
  | "career";

interface IRgbColor {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

interface IMainContext {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

export const MainContext = createContext<IMainContext>({} as IMainContext);

export const useMainContext = () => useContext(MainContext);

export const MainProvider = (props: any) => {
  const [activePage, setActivePage] = useState<Page>("home");

  return (
    <MainContext.Provider value={{ activePage, setActivePage }}>
      {props.children}
    </MainContext.Provider>
  );
};
