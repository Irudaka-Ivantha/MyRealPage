import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SideBar from "./components/Dashboard_component/SideBar";
import Dashboard from "./components/Dashboard_component/Dashboard.js/Dashboard";
import News from "./components/Dashboard_component/News/News";
import './index.css';

function App() {
  return (
    <Router>
      <div className="Main">
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/dashboard" element={
            <>
              <SideBar />
              <div className="content">
                <Dashboard />
              </div>
              <News />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
