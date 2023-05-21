import { useState, createContext } from "react";
import { IntlProvider } from "react-intl";
import Uzbek from "../lang/uz.json";
import Russian from "../lang/ru.json";
import English from "../lang/en.json";

export const Context = createContext();

const local = navigator.language;

let lang;
if (local === "En") {
  lang = English;
} else {
  if (local === "Uz") {
    lang = Uzbek;
  } else {
    lang = Russian;
  }
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);

  const [messages, setMessages] = useState(lang);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "En") {
      setMessages(English);
    } else {
      if (newLocale === "Uz") {
        setMessages(Uzbek);
      } else {
        if (newLocale === "Ru") {
          setMessages(Russian);
        }
      }
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
