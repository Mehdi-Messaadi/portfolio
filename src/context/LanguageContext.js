import React, { createContext, useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLanguage }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(initialLanguage || i18n.language);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const changeLang = async (lang) => {
      setIsLoading(true);
      await i18n.changeLanguage(lang);
      setLanguage(lang);
      setIsLoading(false);
    };

    if (initialLanguage && initialLanguage !== i18n.language) {
      changeLang(initialLanguage);
    } else {
      setIsLoading(false);
    }
  }, [initialLanguage, i18n]);

  const changeLanguage = async (lng) => {
    setIsLoading(true);
    await i18n.changeLanguage(lng);
    setLanguage(lng);
    setIsLoading(false);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
