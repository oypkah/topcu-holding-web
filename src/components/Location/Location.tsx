import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import changeTitle from "../../helpers/changeTitle";
import TitleWrapper from "../TitleWrapper/TitleWrapper";

function Location() {
  const { t } = useTranslation();

  useEffect(() => {
    changeTitle(t("translations:PageTitles:Location"));
  }, []);

  return (
    <>
      <div className="container">
        <TitleWrapper>{t("translations:PageTitles:Location")}</TitleWrapper>
        <div className="nc-map" style={{ height: "65vh" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.318494059441!2d29.232368842170803!3d40.9964016554319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad1d523220c05%3A0x51479d5ba23a1114!2zUkXEsFMgTUFLxLBOQQ!5e0!3m2!1str!2str!4v1652079412635!5m2!1str!2str"
            style={{ border: 0, width: "100%", height: "100%" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
}

export default Location;
