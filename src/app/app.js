import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./styles.css";
const EnhancedTable = lazy(() => import("../demo"));

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
        <nav>Navigation</nav>
      </Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <div className="section theme">
              <div>Example Content</div>
              <main>
                <Suspense
                  fallback={
                    <div className="loading-container">
                      <span className="loading"></span>
                    </div>
                  }
                >
                  <div>Example Content</div>
                </Suspense>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
