import { Page } from "../../contexts/MainContext";

export default interface ISideBarItem {
  id: number;
  icon: string;
  title: string;
  pageType: Page;
}
