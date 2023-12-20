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
import SummerCampTours from "./components/SummerCampTours";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { Page } from "./components/Page";
import YouvisitTours from "./components/YouvisitTours";
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
        <Route
          path="/"
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <Home />
            </Page>
          }
        />
        {/* /virtual-tours */}
        <Route
          path="/portfolio"
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <Portfolio />
            </Page>
          }
        />
        <Route
          path="/why-us"
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <Whyus />
            </Page>
          }
        />
        <Route
          path="/case-study"
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <Casestudy />
            </Page>
          }
        />
        <Route
          path="/careers"
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <Careers />
            </Page>
          }
        />
        {/* /schedule-demo */}
        <Route
          path="/contact"
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <Contact />
            </Page>
          }
        />
        <Route
          path="/school-virtual-tours"
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <University />
            </Page>
          }
        />
        <Route
          path="/privacy"
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <Privacy />
            </Page>
          }
        />
        <Route
          path="/all-tours"
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <AllTours />
            </Page>
          }
        />
        <Route
          path="/summer-camp-virtual-tours"
          element={
            <Page title={"Summer Camp Virtual Tours"}>
              <SummerCampTours />
            </Page>
          }
        />

        <Route
          path="/youvisit-pricing"
          element={
            <Page title={"YouVisit Pricing | Cove Creek Productions"}>
              <YouvisitTours />
            </Page>
          }
        />
      </Routes>
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
