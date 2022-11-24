import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import En from "./en/En";
import Fa from "./fa/Fa";

const langContext = React.createContext();

function App() {
  const [lang, setLang] = useState("fa");

  if (lang === 'en') {
    document.documentElement.setAttribute('lang' , 'en')
    document.documentElement.setAttribute('dir' , 'ltr')
  } else if (lang === 'fa') {
    document.documentElement.setAttribute('lang' , 'fa')
    document.documentElement.setAttribute('dir' , 'rtl')
    document.body.style.fontFamily = `'YekanBakh' , 'Roboto', 'Arial'`
  }

  return (
    <langContext.Provider value={{ lang, setLang }}>
      {lang === "en" ? <En /> : lang === "fa" && <Fa />}
      <ToastContainer />
    </langContext.Provider>
  );
}

export default App;
