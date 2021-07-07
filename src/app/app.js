import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./styles.scss";
const EnhancedTable = lazy(() => import("../demo"));
const LoginPage = lazy(() => import("../login/login"));
const Canvas = lazy(() => import("../canvas/canvas"));

export default function App() {
  const [authenticated, setAuthenticate] = useState(false);
  const [keyToken, setKeyToken] = useState(false);
  const [timestamp, setTimestamp] = useState();

  useEffect(() => {
    const getKey = localStorage.getItem("key");
    // console.log(getKey);
    const validKey = getKey === null;
    // console.log(validKey);
    validKey ? setKeyToken(false) : setKeyToken(true);
    keyToken ? setTimestamp(JSON.parse(getKey).timestamp) : setTimestamp(0);
    const fiveMins = 300000;
    const now = new Date().getTime().toString();
    setAuthenticate(false);
    // console.log(now);
    // console.log(timestamp);
    // console.log(now - timestamp < fiveMins);
    const validToken = now - timestamp < fiveMins;
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
