import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import changeTitle from "../../helpers/changeTitle";
import FormGroup from "../Form/FormGroup";
import Input from "../Form/Input";
import Textarea from "../Form/Textarea";
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
                        <FormGroup icon="ti-user">
                          <Input
                            dataLabel="Name"
                            dataMessage={t(
                              "translations:FormItemRequireValidate:Name",
                              { Name: t("translations:FormItems:Name") }
                            )}
                            type="text"
                            name="firstname"
                            placeholder={t("translations:FormItems:Name")}
                          />
                        </FormGroup>
                      </div>
                      <div className="flex-col-md-6">
                        <FormGroup icon="ti-user">
                          <Input
                            dataLabel="Surname"
                            dataMessage={t(
                              "translations:FormItemRequireValidate:Surname",
                              { Name: t("translations:FormItems:Surname") }
                            )}
                            type="text"
                            name="lastname"
                            placeholder={t("translations:FormItems:Surname")}
                          />
                        </FormGroup>
                      </div>
                      <div className="flex-col-md-12">
                        <FormGroup icon="ti-email">
                          <Input
                            dataLabel="Email"
                            dataMessage={t(
                              "translations:FormItemRequireValidate:Email",
                              { Name: t("translations:FormItems:Email") }
                            )}
                            type="email"
                            name="email"
                            placeholder={t("translations:FormItems:Email")}
                          />
                        </FormGroup>
                      </div>
                    </div>
                    <div className="flex-col-md-12">
                      <FormGroup icon="ti-text">
                        <Textarea
                          dataLabel="Message"
                          dataMessage={t(
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
                      </FormGroup>
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
