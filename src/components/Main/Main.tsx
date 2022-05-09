import { useEffect } from "react";
import { Page, useMainContext } from "../../contexts/MainContext";
import AboutUs from "../AboutUs/AboutUs";
import BoardDirectors from "../BoardDirectors/BoardDirectors";
import Career from "../Career/Career";
import Contact from "../Contact/Contact";
import GroupCompanies from "../GroupCompanies/GroupCompanies";
import Location from "../Location/Location";
import Header from "./Header";

function Main() {
  const { activePage } = useMainContext();

  useEffect(() => {
    document.title = "Topçu Holding";
  }, []);

  const renderSidePages = (pageType: Page) => {
    switch (pageType) {
      case "aboutus":
        return <AboutUs />;
      case "boardDirectors":
        return <BoardDirectors />;
      case "groupCompanies":
        return <GroupCompanies />;
      case "contact":
        return <Contact />;
      case "location":
        return <Location />;
      case "career":
        return <Career />;
      default:
        return <AboutUs />;
    }
  };

  return (
    <>
      <div
        id="nc-main"
        className="nc-main bg-cover bg-cc"
        data-bgcolor="rgba(8,55,110,0.4)"
      >
        <Header />
        <div className="full-wh">
          <div
            className="full-wh vide-widget"
            data-vide-src="images/video/holding-web"
          />
        </div>
        <div
          className="nc-main--bgoverlay min-vh-h100 w100"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <div className="nc-main--pagewrapper nc-activeintro">
            <div
              id="nc-intropage"
              className="nc-intropage introsection min-vh-h100 flex-cc w100 pd-t-small"
              data-nc-sm="flex-column"
            >
              {/* Beyaz logo buraya gelecek*/}
              <div
                className="nc-logo align-c absolute top left  w100 animated s008"
                data-animin="fadeInUp|0.1"
                data-animout="fadeOutUp|0.1"
                data-nc-sm="pos-inherit pd-0 mr-b-60"
              >
                <div style={{ marginTop: "3%" }}>
                  <a href="#" className="inline-block">
                    <img
                      src="/images/topcu-holding-beyaz-logo.png"
                      alt="Topçu Holding"
                      style={{ height: 240 }}
                    />
                  </a>
                </div>
              </div>
              <div className="container">
                <div className="introtext typo-light align-c">
                  {/* txt-upper */}
                  <h1
                    className="introtext--two fs60 f-1  bold-5 mr-tb-10 animated s008"
                    data-animin="fadeInUp|0.3"
                    data-animout="fadeOutUp|0.3"
                    data-nc-md="fs60"
                    data-nc-sm="fs40"
                    style={{
                      fontWeight: "300",
                      fontStyle: "italic",
                      wordSpacing: 9999,
                    }}
                  >
                    Yarınlar{" "}
                    <b
                      style={{
                        fontWeight: "500",
                        fontStyle: "italic",
                      }}
                    >
                      Kanatlarımızın
                    </b>{" "}
                    Altında...
                  </h1>
                </div>
              </div>
            </div>
            <div id="nc-ajaxpage" className="nc-ajaxpage">
              {activePage != "home" ? (
                <div
                  className="nc-page min-vh-h100 w100 flex-cc animated s008 pd-tb-small"
                  data-animin="fadeIn|0"
                  data-animout="fadeOut|0"
                  // data-bgcolor="rgba(8, 55, 110, 0.7)"
                >
                  {renderSidePages(activePage)}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div
          className="nc-main--pageoverlay"
          // data-bgcolor="rgba(8,55,110,0.6)"
        ></div>
      </div>
    </>
  );
}

export default Main;
