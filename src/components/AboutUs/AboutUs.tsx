import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const [paragraphs, setParagraphs] = useState<string[]>();

  const { t } = useTranslation();

  useEffect(() => {
    document.title = `Topçu Holding - ${t("translations:PageTitles:AboutUs")}`;
    setParagraphs(t("translations:AboutUs", { returnObjects: true }));
  }, []);

  useEffect(() => {
    setParagraphs(t("translations:AboutUs", { returnObjects: true }));
  }, [t]);

  return (
    <>
      <div className="container">
        <div className="nc-titlewrapper align-c typo-light mr-b-60">
          <h3
            className="nc-titlewrapper--tile fs26 f-1 txt-upper animated s008"
            data-animin="fadeInUp|0.1"
            data-animout="fadeOut|0.1"
          >
            {t("translations:PageTitles:AboutUs")}
          </h3>
        </div>
        <div className="nc-pagebody">
          <div className="flex-row gt60">
            <div
              className="flex-col-md-5"
              data-nc-sm="mr-b-40"
              style={{ alignSelf: "center" }}
            >
              <div
                className="nc-left animated s008"
                data-animin="fadeInLeft|0.3"
                data-animout="fadeOut|0.1"
                style={{ textAlign: "center" }}
              >
                <img
                  src="/images/topcu-holding-beyaz-logo.png"
                  alt="Topçu Holding Beyaz Logo"
                  style={{ display: "inline-block" }}
                />
              </div>
            </div>
            <div className="flex-col-md-7 typo-light">
              {paragraphs?.map((paragraph) => {
                return (
                  <p
                    className="fs18 f-2 op-08 bold-1 animated s008"
                    data-animin="fadeIn|0.4"
                    data-animout="fadeOut|0.1"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
