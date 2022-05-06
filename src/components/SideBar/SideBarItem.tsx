import { useMainContext } from "../../contexts/MainContext";
import ISideBarItem from "../../types/SideBar/ISideBarItem";

interface IProp {
  sideBarItem: ISideBarItem;
}

function SideBarItem({ sideBarItem }: IProp) {
  const { setActivePage } = useMainContext();

  return (
    <li
      className="nc-navigation--li"
      onClick={(e) => setActivePage(sideBarItem.pageType)}
    >
      <div className="nc-navigation--box info-obj img-t g10 tiny align-c mr-b-0 pd-tiny bdr-b bdr-op-1">
        <a
          href="#"
          data-pgtype={sideBarItem.pageType == "home" ? "intropage" : "ncajax"}
          className="nc-pagelink nc-navigation--boxlink nc-active nc-navigation--boxlink"
        />
        <div className="img txt-default">
          <span className="iconwrp">
            <i className={sideBarItem.icon} />
          </span>
        </div>
        <div className="info">
          <h3 className="title mini mr-b-0 bold-3 f-2">{sideBarItem.title}</h3>
        </div>
      </div>
    </li>
  );
}

export default SideBarItem;
