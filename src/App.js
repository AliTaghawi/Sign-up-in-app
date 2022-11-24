import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import En from "./en/En";
import Fa from "./fa/Fa";

export const langContext = React.createContext();

function App() {
  const [lang, setLang] = useState("FA");

  if (lang === "EN") {
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");
  } else if (lang === "FA") {
    document.documentElement.setAttribute("lang", "fa");
    document.documentElement.setAttribute("dir", "rtl");
    document.body.style.fontFamily = `'YekanBakh' , 'Roboto', 'Arial'`;
  }

  return (
    <langContext.Provider value={{ lang, setLang }}>
      {lang === "EN" ? <En /> : lang === "FA" && <Fa />}
      <ToastContainer />
    </langContext.Provider>
  );
}

export default App;
