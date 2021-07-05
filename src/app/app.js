import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./styles.scss";
const EnhancedTable = lazy(() => import("../demo"));
const LoginPage = lazy(() => import("../login/login"));

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/">
            <Suspense
              fallback={
                <div className="loading-container">
                  <span className="loading"></span>
                </div>
              }
            >
              <LoginPage />
            </Suspense>
          </Route>
          <Route path="/contracts">
            <Suspense
              fallback={
                <div className="loading-container">
                  <span className="loading"></span>
                </div>
              }
            >
              <EnhancedTable />
            </Suspense>
          </Route>
          <Route path="/*">
            <Suspense
              fallback={
                <div className="loading-container">
                  <span className="loading"></span>
                </div>
              }
            >
              <div>Page Not Found </div>
            </Suspense>
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
