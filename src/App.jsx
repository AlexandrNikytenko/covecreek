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
import ROUTES from "./constants/routes";
function App() {
  const location = useLocation();

  return (
    <div
      className="App"
      style={
        location.pathname === ROUTES.Privacy
          ? { backgroundColor: "#FFFFFF" }
          : { backgroundColor: "#09131D" }
      }
    >
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path={ROUTES.Home}
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <Home />
            </Page>
          }
        />

        <Route
          path={ROUTES.Portfolio}
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <Portfolio />
            </Page>
          }
        />
        <Route
          path={ROUTES.WhyUs}
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <Whyus />
            </Page>
          }
        />
        <Route
          path={ROUTES.CaseStudy}
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <Casestudy />
            </Page>
          }
        />
        <Route
          path={ROUTES.Careers}
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <Careers />
            </Page>
          }
        />

        <Route
          path={ROUTES.Contact}
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <Contact />
            </Page>
          }
        />
        <Route
          path={ROUTES.University}
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <University />
            </Page>
          }
        />
        <Route
          path={ROUTES.Privacy}
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <Privacy />
            </Page>
          }
        />
        <Route
          path={ROUTES.AllTours}
          element={
            <Page title={"Cove Creek Productions | 360° Campus Virtual Tours"}>
              <AllTours />
            </Page>
          }
        />
        <Route
          path={ROUTES.SummerCampTours}
          element={
            <Page title={"Summer Camp Virtual Tours"}>
              <SummerCampTours />
            </Page>
          }
        />

        <Route
          path={ROUTES.YouVisit}
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
