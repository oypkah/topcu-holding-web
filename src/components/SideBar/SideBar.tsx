import { useEffect, useState } from "react";
import ISideBarItem from "../../types/SideBar/ISideBarItem";
import SideBarItem from "./SideBarItem";

function SideBar() {
  const SIDE_BAR_ITEMS: ISideBarItem[] = [
    { id: 1, icon: "pe-7s-home", title: "Anasayfa", pageType: "home" },
    { id: 2, icon: "pe-7s-notebook", title: "Hakkımızda", pageType: "aboutus" },
    {
      id: 3,
      icon: "pe-7s-users",
      title: "Yönetim Kurulu",
      pageType: "boardDirectors",
    },
    {
      id: 4,
      icon: "pe-7s-note2",
      title: "Grup Şirketleri",
      pageType: "groupCompanies",
    },
    // { icon: "pe-7s-camera", title: "Portfolio", pageType: "another" },
    // { icon: "pe-7s-timer", title: "when", pageType: "another" },
    {
      id: 5,
      icon: "pe-7s-mail-open-file",
      title: "İletişim",
      pageType: "contact",
    },
    {
      id: 6,
      icon: "pe-7s-map-marker",
      title: "Lokasyonumuz",
      pageType: "location",
    },
    // {
    //   id: 7,
    //   icon: "pe-7s-camera",
    //   title: "Kariyer",
    //   pageType: "career",
    // },
  ];

  const [sideBarItems, setSideBarItems] = useState<ISideBarItem[]>([]);

  useEffect(() => {
    setSideBarItems(SIDE_BAR_ITEMS);
  }, []);

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
