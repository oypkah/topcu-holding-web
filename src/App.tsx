import { useEffect } from "react";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";
import { MainProvider } from "./contexts/MainContext";

function App() {
  const scripts: string[] = [
    "lib/jquery/jquery-1.12.4.min.js",
    "lib/bootstrap/js/bootstrap.min.js",
    "lib/jquery-validation/jquery.validate.min.js",
    "js/plugins.js",
    "lib/Swiper/js/swiper.jquery.min.js",
    "lib/pace/pace.min.js",
    "js/nc.js",
  ];

  useEffect(() => {
    scripts.forEach((scriptSrc) => {
      const script: HTMLScriptElement = document.createElement("script");

      script.src = scriptSrc;
      script.async = false;
      document.body.appendChild(script);
    });
  }, []);

  return (
    <MainProvider>
      <div className="nc-mainwrapper">
        <a href="#nc-navigation" className="nc-menutrigger">
          <span className="nc-menutrigger--span" />
        </a>
        <Main />
        <nav id="nc-navigation" className="nc-navigation bg-white shadow-large">
          <div className="min-vh-h100 flex-cc flex-column pd-tb-30">
            <div className="nc-navigation--header">
              <a
                href="#"
                className="nc-navigation--close flex-cc sq40 fs36 rd-50 btn-default solid bdr-1 mr-b-60"
              >
                <i className="pe-7s-close" />
              </a>
            </div>
            <SideBar />
          </div>
        </nav>
        <div id="subscribe" className="nc-popup nc-popup-effect1 flex-cc">
          <div
            className="nc-popup-content bg-white nc-scrollbar pd-80 px-w600"
            data-nc-md="px-w600"
            data-nc-sm="pd-30"
          >
            <div className="inner-wrapper w100">
              <div className="nc-popup-close flex-cc sq30 fs30 btn-color1 rd absolute top right pd-30">
                <i className="pe-7s-close-circle" />
              </div>
              <div className="nc-popup--header align-c">
                <div className="title-wrapper">
                  <span
                    className="flex-cc title--icon fs70 txt-default mr-b-10"
                    data-nc-sm="fs60"
                  >
                    <i className="pe-7s-bell" />
                  </span>
                  <h1
                    className="nc-titlewrapper--tile fs50 f-1 txt-upper"
                    data-nc-sm="fs40"
                  >
                    Subscribe
                  </h1>
                  <p
                    className="nc-titlewrapper--subtitle fs20 f-2 bold-1 mr-auto"
                    data-nc-md="fs20"
                    data-nc-sm="w100 fs18"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="nc-popup--body mr-t-60">
                <div className="nc-form-wrapper">
                  <form
                    action="form-data/notify-me.php"
                    className="form-widget form-widget-inputicon"
                    data-formtype="newsletter"
                    data-popup="popup-contact"
                  >
                    <div className="field-wrp">
                      <input
                        type="hidden"
                        name="to"
                        defaultValue="ncodeart@gmail.com"
                      />
                      <div className="flex-row gt20 mb5">
                        <div className="flex-col-md-12">
                          <div className="form-group">
                            <span className="form-widget--icon flex-cc txt-color1">
                              <i className="ti-email" />
                            </span>
                            <input
                              className="light form-control form-widget--form-control hov-bdr-color1"
                              data-label="Email"
                              data-msg="Please enter email."
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="form-widget--btn w100 btn solid btn-dark"
                    >
                      Submit
                    </button>
                  </form>
                  <div className="msg-block" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="nc-popup-overlay"
          data-gradient="y"
          data-g-colors="rgba(0, 0, 0,0.6)|rgba(0, 0, 0,0.9)"
        />
      </div>
    </MainProvider>
  );
}

export default App;
