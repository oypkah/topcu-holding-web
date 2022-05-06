import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMainContext } from "../../contexts/MainContext";

interface IProps {
  lang: string;
}

const LanguageSelector = () => {
  const { availableLanguages, defaultLanguage } = useMainContext();

  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  const handleChangeLanguage = (event: any) => {
    let lang = event.target.value;
    if (!availableLanguages.includes(lang)) {
      i18n.changeLanguage(defaultLanguage);
      return;
    }

    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const LanguageListItem = (props: IProps) => {
    return (
      <li>
        <label>
          <input
            type="radio"
            value={props.lang}
            name="language"
            checked={selectedLanguage === props.lang}
            style={{ display: "none" }}
            readOnly
          />
          {props.lang.toUpperCase()}
        </label>
      </li>
    );
  };

  return (
    <div className="lang-container fs20">
      <ul onChange={handleChangeLanguage}>
        {availableLanguages.length > 0 &&
          availableLanguages.map((lang) => (
            <LanguageListItem key={lang} lang={lang} />
          ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
