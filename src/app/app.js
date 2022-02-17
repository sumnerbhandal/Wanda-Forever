import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom/index";
import "./styles.scss";
const EnhancedTable = lazy(() => import("../contract-hub/contract-hub"));
const TemplateSelect = lazy(() => import("../contract-hub/template"));
const DocumentEditor = lazy(() => import("../document-editor/document-editor"));
const Drafting = lazy(() => import("../drafting/drafting-editor"));
const LoginPage = lazy(() => import("../login/login"));
const NoMatch = lazy(() => import("./no-match"));
const Canvas = lazy(() => import("../canvas/canvas"));
const HubHeader = lazy(() => import("../_header/hub-header"));
// const FeedbackForm = lazy(() => import("../_forms/feedback-form"));
import FeedbackForm from "../_forms/feedback-form";

function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default function App() {
  const isAuthenticated = localStorage.getItem("authenticated");
  const loader = (
    <div className="loading-container">
      <span className="loading"></span>
    </div>
  );

  return (
    <main>
      <FeedbackForm />
      <Router>
        <Routes>
          <Route exact path="/">
            <Suspense fallback={loader}>
              <LoginPage />
            </Suspense>
          </Route>
          <PrivateRoute exact path="draft" isAuthenticated={isAuthenticated}>
            <>
              <Suspense fallback={loader}>
                <HubHeader
                  platform="Draft Contracts"
                  homepage="/draft"
                  hubType="Drafting"
                  primaryCTA="BrowseTemplates"
                />
                <Canvas
                  page={
                    <>
                      <TemplateSelect />
                      <EnhancedTable feed="draft" configureContract="false" />
                    </>
                  }
                />
              </Suspense>
              <Route path="editor">
                <Route path=":documentId">
                  <Suspense fallback={loader}>
                    <Canvas page={<Drafting />} />
                  </Suspense>
                </Route>
              </Route>
            </>
          </PrivateRoute>
          <PrivateRoute exact path="review" isAuthenticated={isAuthenticated}>
            <>
              <Suspense fallback={loader}>
                <>
                  <HubHeader
                    platform="Review Contracts"
                    homepage="/review"
                    hubType="Reviewing"
                    primaryCTA="UploadContract"
                  />
                  <Canvas
                    page={
                      <EnhancedTable feed="review" configureContract="true" />
                    }
                  />
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
            </>
          </PrivateRoute>

          <Route path="*">
            <Suspense fallback={loader}>
              <NoMatch />
            </Suspense>
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
