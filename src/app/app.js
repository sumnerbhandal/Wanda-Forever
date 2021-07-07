import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./styles.scss";
import RedirectHome from "./redirect";
const EnhancedTable = lazy(() => import("../demo"));
const LoginPage = lazy(() => import("../login/login"));
const Canvas = lazy(() => import("../canvas/canvas"));

export default function App() {
  const [authenticated, setAuthenticate] = useState(false);

  useEffect(() => {
    // let keyToken = false;
    // let timestamp = 0;

    // const getKey = localStorage.getItem("validationTime");
    // const validKey = getKey === null;

    // validKey ? (keyToken = false) : (keyToken = true);
    // keyToken ? (timestamp = getKey) : (timestamp = 0);
    // const day = 86400000;
    // const now = new Date().getTime().toString();

    // const validToken = now - timestamp < day;
    // validToken ? setAuthenticate(true) : setAuthenticate(false);

    const day = 86400000;
    const now = new Date().getTime().toString();
    const getKey = localStorage.getItem("validationTime");

    console.log(now);
    console.log(getKey);
    console.log(now - getKey < day);
    const validToken = now - getKey < day;
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
          {/* <PrivateRoute
            path="/contracts"
            authenticated={authenticated}
            component={Landing}
          /> */}
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
