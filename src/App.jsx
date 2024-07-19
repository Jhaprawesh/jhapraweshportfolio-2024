import { useEffect } from "react";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Portfolio from "./Portfolio";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import SinglePage from "./SinglePage";
import List from "./List";
import Header from "./Header";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./DarkMode.css";

function App() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className={`${theme ? "dark-mode" : "app"} p-0`}>
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <AboutMe />
              <Services />
              <Portfolio />
              <List />
              <ContactUs />
            </>
          }
        />
        <Route path="/blog" element={<List />} />
        <Route path="/blog/:name" element={<SinglePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
