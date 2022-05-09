import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ISideBarItem from "../../types/SideBar/ISideBarItem";
import SideBarItem from "./SideBarItem";

function SideBar() {
  const { t } = useTranslation();

  const SIDE_BAR_ITEMS: ISideBarItem[] = [
    {
      id: 1,
      icon: "pe-7s-home",
      title: t("translations:SideMenuItemTitle:Home"),
      pageType: "home",
    },
    {
      id: 2,
      icon: "pe-7s-notebook",
      title: t("translations:SideMenuItemTitle:AboutUs"),
      pageType: "aboutus",
    },
    {
      id: 3,
      icon: "pe-7s-users",
      title: t("translations:SideMenuItemTitle:BoardDirectors"),
      pageType: "boardDirectors",
    },
    {
      id: 4,
      icon: "pe-7s-note2",
      title: t("translations:SideMenuItemTitle:GroupCompanies"),
      pageType: "groupCompanies",
    },
    {
      id: 5,
      icon: "pe-7s-mail-open-file",
      title: t("translations:SideMenuItemTitle:ContactUs"),
      pageType: "contact",
    },
    {
      id: 6,
      icon: "pe-7s-map-marker",
      title: t("translations:SideMenuItemTitle:Location"),
      pageType: "location",
    },
    // {
    //   id: 7,
    //   icon: "pe-7s-camera",
    //   title: t("translations:PageTitles:Career"),
    //   pageType: "career",
    // },
  ];

  const [sideBarItems, setSideBarItems] = useState<ISideBarItem[]>([]);

  useEffect(() => {
    setSideBarItems(SIDE_BAR_ITEMS);
  }, [t]);

  return (
    <ul className="nc-navigation--ul list-reset w100">
      {sideBarItems.length > 0 &&
        sideBarItems.map((item) => (
          <SideBarItem key={item.id} sideBarItem={item} />
        ))}
    </ul>
  );
}

export default SideBar;
