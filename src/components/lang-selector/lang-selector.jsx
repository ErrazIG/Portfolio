import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../lang/lang.js";
import style from "./lang-selector.module.css";

const Header = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleChangeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const getNextLanguage = (currentLang) => {
    const currentIndex = LANGUAGES.findIndex(
      (lang) => lang.code === currentLang
    );
    const nextIndex = (currentIndex + 1) % LANGUAGES.length;
    return LANGUAGES[nextIndex].code;
  };

  const handleImageClick = () => {
    const nextLanguage = getNextLanguage(currentLanguage);
    handleChangeLanguage(nextLanguage);
  };

  const currentLangData = LANGUAGES.find(
    (lang) => lang.code !== currentLanguage
  );

  return (
    <img
      className={style.flag}
      src={currentLangData.flag}
      alt={currentLangData.label}
      title={currentLangData.label}
      onClick={handleImageClick}
    />
  );
};

export default Header;
