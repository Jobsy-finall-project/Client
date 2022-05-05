import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import FunctionPage from "./pages/FunctionPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateItem from "./pages/CreateItem";
import CreateRecruitmentTrackPage from "./pages/CreateRecruitmentTrackPage";
import RecruitmentTracksStepPage from "./pages/TrackStepPage";
import "./App.css";
import CreateStepPage from "./pages/CreateStepPage";
import CVs from "./pages/Cvs";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header brandName="Brand Name & Logo" />
      <Router>
        <Routes>
          <Route path="/functional-page" element={<FunctionPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/create-new-item" element={<CreateItem />} />
          <Route
            path="/create-recruitment-track-page"
            element={<CreateRecruitmentTrackPage />}
          />
          <Route
            path="/recruitment-track-step-page"
            element={<RecruitmentTracksStepPage />}
          />
          <Route path="/create-step" element={<CreateStepPage />} />
          <Route path="/cvs" element={<CVs />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
