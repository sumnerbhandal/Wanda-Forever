import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
  Navigate,
  useNavigate,
  Outlet
} from "react-router-dom/index";
import "./styles.scss";
const EnhancedTable = lazy(() => import("../contract-hub/contract-hub"));
const DocumentEditor = lazy(() => import("../document-editor/document-editor"));
const Drafting = lazy(() => import("../drafting/drafting-editor"));
const LoginPage = lazy(() => import("../login/login"));
const Canvas = lazy(() => import("../canvas/canvas"));
const HubHeader = lazy(() => import("../_header/hub-header"));

const routes = [
  {
    path: "home",
    component: lazy(() => import("components/Home")),
    exact: true
  },
  {
    path: "users",
    component: lazy(() => import("components/Users")),
    exact: true
  }
];

function PrivateRoute({ children, isAuthenticated, ...rest }) {
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? children : <Navigate to="/" />
      }
    />
  );
}

export default function App() {
  const isAuthenticated = localStorage.getItem("authenticated");
  console.log(isAuthenticated);
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
              <LoginPage />
            </Suspense>
          </Route>
          <PrivateRoute path="draft" isAuthenticated={isAuthenticated}>
            <>
              <Suspense fallback={loader}>
                <HubHeader
                  platform="Draft Contracts"
                  homepage="/draft"
                  hubType="Drafting"
                />
                <Canvas
                  page={
                    <EnhancedTable feed="draft" configureContract="false" />
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
          <PrivateRoute path="review" isAuthenticated={isAuthenticated}>
            <>
              <Suspense fallback={loader}>
                <>
                  <HubHeader
                    platform="Review Contracts"
                    homepage="/review"
                    hubType="Reviewing"
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
