import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./styles.scss";
const EnhancedTable = lazy(() => import("../demo"));
const LoginPage = lazy(() => import("../login/login"));
const Canvas = lazy(() => import("../canvas/canvas"));

export default function App() {
  const [authenticated, setAuthenticate] = useState(false);
  const [validToken, setValidToken] = useState(false);

  useEffect(() => {
    var authenticatedTime = JSON.parse(localStorage.getItem("key")),
      now = new Date().getTime().toString();
    const day = 86400000;
    const fiveMins = 300000;
    setAuthenticate(false);
    const invalidDate = authenticatedTime.timestamp === null;
    // console.log(now - dateStored);
    // console.log("Is the date invalid " + invalidDate);
    // console.log(
    //   "Is it authenticated for longer than 5 mins " + now - dateStored <
    //     fiveMins
    // );
    invalidDate
      ? setValidToken(false)
      : setValidToken(now - dateStored < fiveMins);
    validToken ? setAuthenticate(true) : setAuthenticate(false);
  }, []);

  function authoriseLogin(newValue) {
    setAuthenticate(newValue);
  }

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
          {authenticated ? (
            <Route path="/contracts">
              <Suspense
                fallback={
                  <div className="loading-container">
                    <span className="loading"></span>
                  </div>
                }
              >
                <Canvas page={<EnhancedTable />} />
              </Suspense>
            </Route>
          ) : (
            <div>Not Logged In</div>
          )}
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
