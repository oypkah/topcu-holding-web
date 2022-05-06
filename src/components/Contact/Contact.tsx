import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import changeTitle from "../../helpers/changeTitle";
import TitleWrapper from "../TitleWrapper/TitleWrapper";

function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    changeTitle(t("translations:PageTitles:ContactUs"));
  }, []);

  return (
    <>
      <div className="container">
        <TitleWrapper>{t("translations:PageTitles:ContactUs")}</TitleWrapper>
        <div className="nc-pagebody">
          <div className="flex-row gt60 middle-md">
            <div className="flex-col-md-6" data-nc-sm="mr-b-40">
              <div
                className="info-obj mr-0 img-l middle-md g20 tiny typo-light animated s008"
                data-animin="fadeInUp|0.3"
                data-animout="fadeOut|0.1"
              >
                <div className="img txt-default">
                  <span className="iconwrp">
                    <i className="pe-7s-mail-open-file" />
                  </span>
                </div>
                <div className="info">
                  <h3 className="title mini mr-b-0 f-2 bold-1">
                    <a href="mailto:info@topcuholding.com">
                      info@topcuholding.com
                    </a>
                  </h3>
                </div>
              </div>
              <hr
                className="light mr-tb-20 animated s008"
                data-animin="fadeInUp|0.3"
                data-animout="fadeOut|0.1"
              />
              <div
                className="info-obj mr-0 img-l middle-md g20 tiny typo-light animated s008"
                data-animin="fadeInUp|0.4"
                data-animout="fadeOut|0.1"
              >
                <div className="img txt-default">
                  <span className="iconwrp">
                    <i className="pe-7s-call" />
                  </span>
                </div>
                <div className="info">
                  <h3 className="title mini mr-b-0 f-2 bold-1">
                    +90 850 222 73 47
                  </h3>
                </div>
              </div>
              <hr
                className="light mr-tb-20 animated s008"
                data-animin="fadeInUp|0.4"
                data-animout="fadeOut|0.1"
              />
              <div
                className="info-obj mr-0 img-l middle-md g20 tiny typo-light animated s008"
                data-animin="fadeInUp|0.5"
                data-animout="fadeOut|0.1"
              >
                <div className="img txt-default">
                  <span className="iconwrp">
                    <i className="pe-7s-global" />
                  </span>
                </div>
                <div className="info">
                  <h3 className="title mini mr-b-0 f-2 bold-1">
                    www.topcuholding.com
                  </h3>
                </div>
              </div>
              <div
                className="light mr-tb-20 animated s008"
                data-animin="fadeInUp|0.5"
                data-animout="fadeOut|0.1"
              />
              <div
                className="info-obj mr-0 img-l middle-md g20 tiny typo-light animated s008"
                data-animin="fadeInUp|0.6"
                data-animout="fadeOut|0.1"
              >
                <div className="img txt-default">
                  <span className="iconwrp">
                    <i className="pe-7s-map-marker" />
                  </span>
                </div>
                <div className="info">
                  <h3 className="title mini mr-b-0 f-2 bold-1">
                    Abdurrahmangazi, İmamoğlu Sokak, Sancaktepe/İstanbul
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex-col-md-6">
              <div
                className="nc-form-wrapper animated s008"
                data-animin="fadeIn|0.4"
                data-animout="fadeOut|0.1"
              >
                <form
                  action="form-data/formdata.php"
                  className="form-widget form-widget-inputicon"
                  data-popup="popup-contact"
                >
                  <div className="field-wrp">
                    <input
                      type="hidden"
                      name="to"
                      defaultValue="ncodeart.newsletter@gmail.com"
                    />
                    <div className="flex-row gt20 mb5">
                      <div className="flex-col-md-6">
                        <div className="form-group">
                          <span className="form-widget--icon flex-cc txt-default">
                            <i className="ti-user" />
                          </span>
                          <input
                            className="form-control form-widget--form-control form-control-light"
                            data-label="Name"
                            data-msg={t(
                              "translations:FormItemRequireValidate:Name",
                              { Name: t("translations:FormItems:Name") }
                            )}
                            type="text"
                            name="fname"
                            placeholder={t("translations:FormItems:Name")}
                          />
                        </div>
                      </div>
                      <div className="flex-col-md-6">
                        <div className="form-group">
                          <span className="form-widget--icon flex-cc txt-default">
                            <i className="ti-user" />
                          </span>
                          <input
                            className="form-control form-widget--form-control form-control-light"
                            data-label="Name"
                            data-msg={t(
                              "translations:FormItemRequireValidate:Surname",
                              { Name: t("translations:FormItems:Surname") }
                            )}
                            type="text"
                            name="lname"
                            placeholder={t("translations:FormItems:Surname")}
                          />
                        </div>
                      </div>
                      <div className="flex-col-md-12">
                        <div className="form-group">
                          <span className="form-widget--icon flex-cc txt-default">
                            <i className="ti-email" />
                          </span>
                          <input
                            className="form-control form-widget--form-control form-control-light"
                            data-label={t(
                              "translations:FormItemRequireValidate:Email",
                              { Name: t("translations:FormItems:Email") }
                            )}
                            data-msg="Lütfen e-postanızı girin"
                            type="email"
                            name="email"
                            placeholder={t("translations:FormItems:Email")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-col-md-12">
                      <div className="form-group">
                        <span className="form-widget--icon flex-cc txt-default">
                          <i className="ti-text" />
                        </span>
                        <textarea
                          className="form-control form-widget--form-control form-control-light"
                          data-label="Message"
                          data-msg={t(
                            "translations:FormItemRequireValidate:Message",
                            { Name: t("translations:FormItems:Message") }
                          )}
                          name="message"
                          placeholder={t("translations:FormItems:Message")}
                          cols={30}
                          rows={10}
                          minLength={10}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="form-widget--btn w100 btn solid btn-white"
                  >
                    {t("translations:FormItems:Send")}
                  </button>
                </form>
                <div className="msg-block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
