import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import FunctionPage from "./pages/FunctionPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateItem from "./pages/CreateItem";
import CreateRecruitmentTrackPage from "./pages/createRecruitmentTrackPage/CreateRecruitmentTrackPage";
import RecruitmentTracksStepPage from "./pages/TrackStepPage";
import RecruitmentTrackPage from "./pages/RecruitmentTrackPage";
import ApplyJob from "./pages/ApplyJob";
import "./App.css";
import CreateStepPage from "./pages/CreateStepPage";
import CVs from "./pages/Cvs";
import CreateCompanyPage from "./pages/CreateCompanyPage";
import CompanyListPage from "./pages/CompanyListPage";
import CreatePositionPage from "./pages/CreatePostionPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header brandName="Jobsy" />
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
            path="/apply-job"
            element={<ApplyJob />}
          />
          <Route
            path="/recruitment-track-step-page"
            element={<RecruitmentTracksStepPage />}
          />
          <Route
            path="/recruitment-track-page"
            element={<RecruitmentTrackPage />}
          />
          <Route path="/create-step" element={<CreateStepPage />} />
          <Route path="/cvs" element={<CVs />} />
          <Route path="/create-new-company" element={<CreateCompanyPage />} />
          <Route path="/companys" element={<CompanyListPage />} />
          <Route path="/create-position" element={<CreatePositionPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
