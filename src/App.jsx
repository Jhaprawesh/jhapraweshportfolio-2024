import { useEffect, useContext } from "react";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "aos/dist/aos.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ThemeContext } from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";
import { Buffer } from "buffer";
window.Buffer = Buffer;

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className={`${theme} p-0`}>
      <Navigation />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
