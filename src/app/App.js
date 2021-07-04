import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./styles.css";
import EnhancedTable from "../demo";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="section theme">
              <main>
                <Suspense
                  fallback={
                    <div className="loading-container">
                      <span className="loading"></span>
                    </div>
                  }
                >
                  <EnhancedTable />
                </Suspense>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
