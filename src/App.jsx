import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectDetail from "./components/ProjectDetail";
import SuccessStories from "./components/SuccessStories";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
