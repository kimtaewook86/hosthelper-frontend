import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectDetail from "./components/ProjectDetail";
import SuccessStories from "./components/SuccessStories";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CrowdfundingPage from "./components/CrowdfundingPage";
import Header from "./components/Header"; // 헤더 추가

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header /> {/* 공통 헤더 추가 */}
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/project/:id"
              element={
                <div className="pt-16">
                  {" "}
                  {/* 헤더 높이만큼 상단 여백 추가 */}
                  <ProjectDetail />
                </div>
              }
            />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/crowdfunding" element={<CrowdfundingPage />} />
            {/* 투자하기, 프로젝트, 이용안내 페이지 라우트 추가 */}
            <Route path="/invest" element={<CrowdfundingPage />} />
            <Route path="/projects" element={<CrowdfundingPage />} />
            <Route path="/guide" element={<CrowdfundingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
