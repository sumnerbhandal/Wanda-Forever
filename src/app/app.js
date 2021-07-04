import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./styles.scss";
const EnhancedTable = lazy(() => import("../demo"));
const LoginPage = lazy(() => import("../login/login"));

export default function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="loading-container">
            <span className="loading"></span>
          </div>
        }
      >
        {/* <nav>Navigation</nav> */}
      </Suspense>
      <Routes>
        <main>
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <div className="loading-container">
                    <span className="loading"></span>
                  </div>
                }
              >
                <LoginPage />
              </Suspense>
            }
          />
        </main>
      </Routes>
    </Router>
  );
}
