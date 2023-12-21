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
import PAGES from "./constants/pages";
function App() {
  const location = useLocation();

  return (
    <div
      className="App"
      style={
        location.pathname === PAGES.Privacy.path
          ? { backgroundColor: "#FFFFFF" }
          : { backgroundColor: "#09131D" }
      }
    >
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path={PAGES.Home.path}
          element={
            <Page title={PAGES.Home.title}>
              <Home />
            </Page>
          }
        />

        <Route
          path={PAGES.Portfolio.path}
          element={
            <Page title={PAGES.Portfolio.title}>
              <Portfolio />
            </Page>
          }
        />
        <Route
          path={PAGES.WhyUs.path}
          element={
            <Page title={PAGES.WhyUs.title}>
              <Whyus />
            </Page>
          }
        />
        <Route
          path={PAGES.CaseStudy.path}
          element={
            <Page title={PAGES.CaseStudy.title}>
              <Casestudy />
            </Page>
          }
        />
        <Route
          path={PAGES.Careers.path}
          element={
            <Page title={PAGES.Careers.title}>
              <Careers />
            </Page>
          }
        />

        <Route
          path={PAGES.Contact.path}
          element={
            <Page title={PAGES.Contact.title}>
              <Contact />
            </Page>
          }
        />
        <Route
          path={PAGES.University.path}
          element={
            <Page title={PAGES.University.title}>
              <University />
            </Page>
          }
        />
        <Route
          path={PAGES.Privacy.path}
          element={
            <Page title={PAGES.Privacy.title}>
              <Privacy />
            </Page>
          }
        />
        <Route
          path={PAGES.AllTours.path}
          element={
            <Page title={PAGES.AllTours.title}>
              <AllTours />
            </Page>
          }
        />
        <Route
          path={PAGES.SummerCamp.path}
          element={
            <Page title={PAGES.SummerCamp.title}>
              <SummerCampTours />
            </Page>
          }
        />

        <Route
          path={PAGES.YouVisit.path}
          element={
            <Page title={PAGES.YouVisit.title}>
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
