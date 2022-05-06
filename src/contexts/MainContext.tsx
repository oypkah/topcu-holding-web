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
  availableLanguages: string[];
  defaultLanguage: string;
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const defaultState = {
  availableLanguages: ["tr", "en", "ru"],
  defaultLanguage: "tr",
  activePage: "home",
};

export const MainContext = createContext<IMainContext>(
  defaultState as IMainContext
);

export const useMainContext = () => useContext(MainContext);

export const MainProvider = (props: any) => {
  const [activePage, setActivePage] = useState<Page>(
    defaultState.activePage as Page
  );

  const availableLanguages = defaultState.availableLanguages;
  const defaultLanguage = "tr";
  return (
    <MainContext.Provider
      value={{ availableLanguages, defaultLanguage, activePage, setActivePage }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
