import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/case_study" element={<Casestudy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
