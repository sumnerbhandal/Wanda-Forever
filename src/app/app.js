import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
  Navigate,
  useNavigate
} from "react-router-dom/index";
import "./styles.scss";
const EnhancedTable = lazy(() => import("../contract-hub/contract-hub"));
const DocumentEditor = lazy(() => import("../document-editor/document-editor"));
const Drafting = lazy(() => import("../drafting/drafting-editor"));
const LoginPage = lazy(() => import("../login/login"));
const Canvas = lazy(() => import("../canvas/canvas"));
const HubHeader = lazy(() => import("../_header/hub-header"));

const PrivateRoute = (props) => {
  const history = useNavigate();
  if (props.authenticated) {
    return <Route path={props.path}>{props.children}</Route>;
  } else {
    return <Navigate to="/" />;
  }
};

export default function App() {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated")
  );
  console.log(authenticated);

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
                setAuthenticated={setAuthenticated}
              />
            </Suspense>
          </Route>
          <PrivateRoute
            path="draft"
            authenticated={authenticated}
            children={
              <>
                <Suspense fallback={loader}>
                  <HubHeader
                    platform="Draft Contracts"
                    homepage="/draft"
                    hubType="Drafting"
                    setAuthenticated={setAuthenticated}
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
            }
          />

          <PrivateRoute
            path="review"
            authenticated={authenticated}
            children={
              <>
                <Suspense fallback={loader}>
                  <>
                    <HubHeader
                      platform="Review Contracts"
                      homepage="/review"
                      hubType="Reviewing"
                      setAuthenticated={setAuthenticated}
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
            }
          />

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
