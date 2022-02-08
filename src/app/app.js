import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./styles.scss";
import Alert from "../_notification/alert/alert";
import RedirectHome from "./redirect";
const EnhancedTable = lazy(() => import("../contract-hub/contract-hub"));
const DocumentEditor = lazy(() => import("../document-editor/document-editor"));
const Drafting = lazy(() => import("../drafting/drafting-editor"));
const LoginPage = lazy(() => import("../login/login"));
const Canvas = lazy(() => import("../canvas/canvas"));
const HubHeader = lazy(() => import("../_header/hub-header"));

export default function App() {
  const authenticated = true;
  const [alertMessage, setAlertMessage] = useState(false);
  function authoriseLogin(newValue) {}
  function loginAlert(newValue) {
    setAlertMessage(newValue);
  }

  const loader = (
    <div className="loading-container">
      <span className="loading"></span>
    </div>
  );

  return (
    <main>
      <Router>
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
          <Route path="draft">
            <Suspense fallback={loader}>
              <>
                <HubHeader
                  platform="Draft Contracts"
                  homepage="/draft"
                  hubType="Drafting"
                />
                <Canvas page={<EnhancedTable feed="draft" />} />
              </>
            </Suspense>
            <Route path="editor">
              <Route path=":documentId">
                <Suspense fallback={loader}>
                  <>
                    <Canvas page={<Drafting />} />
                  </>
                </Suspense>
              </Route>
            </Route>
          </Route>
          <Route path="review">
            <Suspense fallback={loader}>
              <>
                <HubHeader
                  platform="Review Contracts"
                  homepage="/review"
                  hubType="Reviewing"
                />
                <Canvas page={<EnhancedTable feed="review" />} />
              </>
            </Suspense>
            <Route path="editor">
              <Route path=":documentId">
                <Suspense fallback={loader}>
                  <>
                    <Canvas page={<DocumentEditor />} />
                  </>
                </Suspense>
              </Route>
            </Route>
          </Route>

          {/* <Route path="/*">
            <Suspense fallback={loader}>
              <div>Page Not Found </div>
            </Suspense>
          </Route> */}
        </Routes>
      </Router>
    </main>
  );
}
