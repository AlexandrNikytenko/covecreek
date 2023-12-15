import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Whyus from "./components/Whyus";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Casestudy from "./components/Casestudy";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import University from "./components/University";
import Privacy from "./components/Privacy";
import AllTours from "./components/AllTours";
import { SpeedInsights } from "@vercel/speed-insights/next";
function App() {
  const location = useLocation();

  return (
    <div
      className="App"
      style={
        location.pathname === "/privacy"
          ? { backgroundColor: "#FFFFFF" }
          : { backgroundColor: "#09131D" }
      }
    >
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/case_study" element={<Casestudy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/university" element={<University />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/all_tours" element={<AllTours />} />
      </Routes>
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
