import React, { lazy, Suspense, useState, useEffect, useNavigate } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./styles.scss";
import RedirectHome from "./redirect";
import PrivateRoute from "./private-route";
const EnhancedTable = lazy(() => import("../demo"));
const LoginPage = lazy(() => import("../login/login"));
const Canvas = lazy(() => import("../canvas/canvas"));

export default function App() {
  const [authenticated, setAuthenticate] = useState(false);

  useEffect(() => {
    let keyToken = false;
    let timestamp = 0;

    setAuthenticate(false);

    const getKey = localStorage.getItem("validationTime");
    const validKey = getKey === null;

    validKey ? (keyToken = false) : (keyToken = true);
    keyToken ? (timestamp = getKey) : (timestamp = 0);
    const day = 300000;
    const now = new Date().getTime().toString();

    const validToken = now - timestamp < day;

    validToken
      ? setAuthenticate(true)
      : setAuthenticate(false) + localStorage.removeItem("validationTime");
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
            // <Route path="/">
            //   <div>Not Logged In</div>
            // </Route>
            <RedirectHome />
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
