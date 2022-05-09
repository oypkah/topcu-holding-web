import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import changeTitle from "../../helpers/changeTitle";
import TitleWrapper from "../TitleWrapper/TitleWrapper";
import ContactInfo from "./ContactInfo";

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
              <ContactInfo />
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
