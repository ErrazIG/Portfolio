import { useTranslation } from "react-i18next";
import "./App.css";
import Header from "./components/header/header";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main>
        <p>{t("main.desc")}</p>
      </main>
    </>
  );
}

export default App;
