import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import GettingStarted from "./pages/GettingStarted";
import Footer from "./components/footer/Footer";
import FunctionPage from "./pages/FunctionPage";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import CreateItem from "./pages/CreateItem";
import CreateRecruitmentTrackPage from "./pages/createRecruitmentTrackPage/CreateRecruitmentTrackPage";
import RecruitmentTracksStepPage from "./pages/TrackStepPage";
import RecruitmentTrackPage from "./pages/RecruitmentTrackPage";
import "./App.css";
import CreateStepPage from "./pages/CreateStepPage";
import CVs from "./pages/Cvs";
import CreateCompanyPage from "./pages/CreateCompanyPage";
import CompanyListPage from "./pages/CompanyListPage";
import CreatePositionPage from "./pages/CreatePostionPage";
import PositionsListPage from "./pages/PositionsListPage";
import PositionPage from "./pages/PositionPage";
import ProfilePage from "./pages/ProfilePage";
import MatchesPage from "./pages/MatchesPage";
import AddStepToTemplatePage from "./pages/AddStepToTemplatePage";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./components/logout/Logout";

const App: React.FC = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Header brandName="Jobsy" />
      <Router>
        <Routes>
          <Route path="/functional-page" element={<FunctionPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/logout" element={<Logout />} />
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
          <Route
            path="/recruitment-track-page"
            element={<RecruitmentTrackPage />}
          />
          <Route path="/create-step" element={<CreateStepPage />} />
          <Route path="/cvs" element={<CVs />} />
          <Route path="/create-new-company" element={<CreateCompanyPage />} />
          <Route path="/companys" element={<CompanyListPage />} />
          <Route path="/create-position" element={<CreatePositionPage />} />
          <Route path="/positions" element={<PositionsListPage />} />
          <Route path="/position" element={<PositionPage />} />
          <Route
            path="/add-step-template"
            element={<AddStepToTemplatePage />}
          />
          <Route path="/" element={<GettingStarted />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/matches" element={<MatchesPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
