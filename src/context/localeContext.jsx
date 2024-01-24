import { createContext, useState, useContext, useMemo } from 'react';

const LocaleContext = createContext('en-IN');

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('en-IN');

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};

export const useLocaleContext = () => useContext(LocaleContext);
