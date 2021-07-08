import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./styles.scss";
import RedirectHome from "./redirect";
const EnhancedTable = lazy(() => import("../demo"));
const LoginPage = lazy(() => import("../login/login"));
const Canvas = lazy(() => import("../canvas/canvas"));

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  function authoriseLogin(newValue) {
    setAuthenticated(newValue);
  }
  useEffect(() => {
    const day = 86400000;
    const now = new Date().getTime().toString();
    const getKey = localStorage.getItem("validationTime");
    const validToken = now - getKey < day;
    validToken ? authoriseLogin(true) : authoriseLogin(false);
  }, []);

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
              <LoginPage
                authenticated={authenticated}
                authoriseLogin={authoriseLogin}
              />
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
              {console.log(authenticated)}
              {authenticated ? (
                <Canvas page={<EnhancedTable />} />
              ) : (
                <RedirectHome />
              )}
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
