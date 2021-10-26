import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./styles.scss";
import Alert from "../_notification/alert/alert";
import RedirectHome from "./redirect";
const EnhancedTable = lazy(() => import("../contract-hub/contract-hub"));
const DocumentEditor = lazy(() => import("../document-editor/document-editor"));
const LoginPage = lazy(() => import("../login/login"));
const Canvas = lazy(() => import("../canvas/canvas"));
const HubHeader = lazy(() => import("../_header/hub-header"));

export default function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const authenticated = true;
  const [alertMessage, setAlertMessage] = useState(false);
  function authoriseLogin(newValue) {
    // setAuthenticated(newValue);
  }
  function loginAlert(newValue) {
    setAlertMessage(newValue);
  }
  useEffect(() => {
    const day = 86400000;
    const now = new Date().getTime().toString();
    const getKey = localStorage.getItem("validationTime");
    const validToken = now - getKey < day;
    validToken ? authoriseLogin(true) : authoriseLogin(false);
  }, []);

  const loader = (
    <div className="loading-container">
      <span className="loading"></span>
    </div>
  );

  return (
    <main>
      <Router>
        {!alertMessage ? null : (
          <Alert message={alertMessage} setAlertMessage={setAlertMessage} />
        )}
        <Routes>
          <Route path="/">
            <Suspense fallback={loader}>
              <LoginPage
                authenticated={authenticated}
                authoriseLogin={authoriseLogin}
                loginAlert={loginAlert}
              />
            </Suspense>
          </Route>
          <Route path="/contracts">
            <Suspense fallback={loader}>
              {authenticated ? (
                <>
                  <HubHeader />
                  <Canvas page={<EnhancedTable />} />
                </>
              ) : (
                <RedirectHome loginAlert={loginAlert} />
              )}
            </Suspense>
          </Route>
          <Route path="/editor">
            <Suspense fallback={loader}>
              <DocumentEditor />
            </Suspense>
          </Route>
          <Route path="/*">
            <Suspense fallback={loader}>
              <div>Page Not Found </div>
            </Suspense>
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
