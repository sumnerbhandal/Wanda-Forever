import React, { lazy, Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate
} from "react-router-dom/index";
import "./styles.scss";
const EnhancedTable = lazy(() => import("../contract-hub/contract-hub"));
const WorkflowTable = lazy(() => import("../contract-hub/workflow-hub"));
const QueryTable = lazy(() => import("../contract-hub/query-hub"));
const TemplateSelect = lazy(() => import("../contract-hub/template"));
const DocumentEditor = lazy(() => import("../document-editor/document-editor"));
const QueryEditor = lazy(() => import("../query-editor/query-editor"));
const Drafting = lazy(() => import("../drafting/drafting-editor"));
const LoginPage = lazy(() => import("../login/login"));
const NoMatch = lazy(() => import("./no-match"));
const Canvas = lazy(() => import("../canvas/canvas"));
const HubHeader = lazy(() => import("../_header/hub-header"));
const QueryHubHeader = lazy(() => import("../_header/query-hub-header"));
const WorkflowHeader = lazy(() => import("../_header/workflow-header"));
const SideBarNav = lazy(() => import("../_sidebar/query-sidenav"));
const HistoryHeader = lazy(() => import("../_header/version-header"));
const SalesForm = lazy(() => import("../_modal/salesform.js"));
const WorkFlowForm = lazy(() => import("../_modal/workflow.js"));
// const FeedbackForm = lazy(() => import("../_forms/feedback-form"));
import FeedbackForm from "../_forms/feedback-form";
import WorkflowDrawer from "../_drawer/workflow-drawer";
// import Upload from "../_upload/upload";
import QueryUploadPage from "../_upload/query-upload-page";

import { Userpilot } from "userpilot";

// Initialize Userpilot
Userpilot.initialize("NX-a565de97");

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
  const [historyView, setHistoryView] = useState(false);
  const [open, setOpen] = useState(false);
  const [uploadPresent, setUploadPresent] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [userType, setUserType] = useState("Admin");
  const loader = (
    <div className="loading-container">
      <span className="loading"></span>
    </div>
  );

  React.useEffect(() => {
    Userpilot.identify("production-Sumner", {
      name: "Sumner",
      email: "sumner@robinai.com",
      role: "admin",
      internal: true,
      plan: "paid",
      company: {
        id: "0001", // Required, used to identify the company
        name: "Robin AI"
      }
    });
  }, []);

  React.useEffect(() => {
    Userpilot.reload();
  }, []);

  return (
    <main>
      {/* <FeedbackForm /> */}
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
                  platform="Draft"
                  homepage="/draft"
                  hubType="Drafting"
                  primaryCTA="BrowseTemplates"
                  secondaryOnClick=""
                  user="SB"
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
                    <Canvas page={<Drafting user="SB" />} />
                  </Suspense>
                </Route>
              </Route>
            </>
          </PrivateRoute>
          <PrivateRoute
            exact
            path="draft/repligen"
            isAuthenticated={isAuthenticated}
          >
            <>
              <Suspense fallback={loader}>
                <HubHeader
                  platform="Draft"
                  homepage="/draft/repligen"
                  hubType="Drafting"
                  primaryCTA="BrowseTemplates"
                  content={<SalesForm />}
                  secondaryOnClick="/draft/workflow"
                  user="JC"
                />
                <Canvas
                  page={
                    <>
                      <TemplateSelect />
                      <EnhancedTable feed="empty" configureContract="false" />
                    </>
                  }
                />
              </Suspense>
              <Route path="editor">
                <Route path=":documentId">
                  <Suspense fallback={loader}>
                    <WorkflowDrawer
                      feed="workflowStageOne"
                      open={open}
                      setOpen={setOpen}
                    />
                    <Canvas page={<Drafting user="KB" />} />
                  </Suspense>
                </Route>
              </Route>
            </>
          </PrivateRoute>
          <PrivateRoute
            exact
            path="draft/workflow"
            isAuthenticated={isAuthenticated}
          >
            <>
              <Suspense fallback={loader}>
                <WorkflowHeader
                  platform="Draft"
                  homepage="/draft/repligen"
                  hubType="Drafting"
                  primaryCTA="NewWorkflow"
                  modalContent={<WorkFlowForm />}
                  classes="template-library"
                  user="KB"
                />
                <WorkflowDrawer
                  feed="workflowStageOne"
                  open={open}
                  setOpen={setOpen}
                />
                <Canvas
                  page={
                    <>
                      <WorkflowTable
                        feed="workflow"
                        configureContract="false"
                        setOpen={setOpen}
                      />
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
          <PrivateRoute
            exact
            path="draft/workflow/kb"
            isAuthenticated={isAuthenticated}
          >
            <>
              <Suspense fallback={loader}>
                <WorkflowHeader
                  platform="Draft"
                  homepage="/draft/workflow/kb"
                  hubType="Drafting"
                  primaryCTA="NewWorkflow"
                  modalContent={<WorkFlowForm />}
                  classes="template-library"
                  user="KB"
                />
                <WorkflowDrawer
                  feed="workflowStageOne"
                  open={open}
                  setOpen={setOpen}
                />
                <Canvas
                  page={
                    <>
                      <WorkflowTable
                        feed="workflow-kb"
                        configureContract="false"
                        setOpen={setOpen}
                      />
                    </>
                  }
                />
              </Suspense>
              <Route path="editor">
                <Route path=":documentId">
                  <Suspense fallback={loader}>
                    <WorkflowDrawer
                      feed="workflow-kb"
                      open={open}
                      setOpen={setOpen}
                    />
                    <Canvas page={<Drafting user="KB" />} />
                  </Suspense>
                </Route>
              </Route>
              <Route path="2">
                <Suspense fallback={loader}>
                  <WorkflowHeader
                    platform="Draft"
                    homepage="/draft/workflow/kb"
                    hubType="Drafting"
                    primaryCTA="NewWorkflow"
                    modalContent={<WorkFlowForm />}
                    classes="template-library"
                    user="KB"
                  />
                  <WorkflowDrawer
                    feed="workflow-kb"
                    open={open}
                    setOpen={setOpen}
                  />
                  <Canvas
                    page={
                      <>
                        <WorkflowTable
                          feed="workflow-kb2"
                          configureContract="false"
                          setOpen={setOpen}
                        />
                      </>
                    }
                  />
                </Suspense>
              </Route>
            </>
          </PrivateRoute>
          <PrivateRoute
            exact
            path="draft/workflow/jf"
            isAuthenticated={isAuthenticated}
          >
            <>
              <Suspense fallback={loader}>
                <WorkflowHeader
                  platform="Draft"
                  homepage="/draft/workflow/kb"
                  hubType="Drafting"
                  primaryCTA="NewWorkflow"
                  modalContent={<WorkFlowForm />}
                  classes="template-library"
                  user="JF"
                />
                <WorkflowDrawer
                  feed="workflow-jf"
                  open={open}
                  setOpen={setOpen}
                />
                <Canvas
                  page={
                    <>
                      <WorkflowTable
                        feed="workflow-jf"
                        configureContract="false"
                        setOpen={setOpen}
                      />
                    </>
                  }
                />
              </Suspense>
              <Route path="editor">
                <Route path=":documentId">
                  <Suspense fallback={loader}>
                    <WorkflowDrawer
                      feed="workflow-jf"
                      open={open}
                      setOpen={setOpen}
                    />
                    <Canvas page={<Drafting user="JF" />} />
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
                    platform="Review"
                    homepage="/review"
                    hubType="Reviewing"
                    primaryCTA="UploadContract"
                    user="SB"
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
                      <Canvas page={<DocumentEditor user="SB" />} />
                    </>
                  </Suspense>
                </Route>
              </Route>
            </>
          </PrivateRoute>
          <PrivateRoute exact path="query" isAuthenticated={isAuthenticated}>
            <>
              element={<Navigate to="/query/search" replace />}
              <Route path="search">
                <Suspense fallback={loader}>
                  <>
                    {/* <Upload /> */}
                    <QueryHubHeader
                      platform="Query"
                      homepage="/query/search"
                      hubType="Query Contracts"
                      secondaryCTA="UploadContract"
                      user="SB"
                      setUploadPresent={setUploadPresent}
                      setUploadedFiles={setUploadedFiles}
                      setUserType={setUserType}
                      userType={userType}
                    />
                    <SideBarNav
                      uploadPresent={uploadPresent}
                      userType={userType}
                    />

                    <Canvas
                      className="query"
                      page={
                        <QueryTable feed="query" configureContract="true" />
                      }
                    />
                  </>
                </Suspense>
              </Route>
              <Route path="users">
                <Suspense fallback={loader}>
                  <QueryHubHeader
                    platform="Query"
                    homepage="/query/search"
                    hubType="Users"
                    secondaryCTA="UploadContract"
                    user="SB"
                    setUploadPresent={setUploadPresent}
                    setUploadedFiles={setUploadedFiles}
                    setUserType={setUserType}
                    userType={userType}
                  />
                  <SideBarNav
                    uploadPresent={uploadPresent}
                    userType={userType}
                  />
                  <Canvas className="query" page={"User Page"} />
                </Suspense>
              </Route>
              <Route path="label">
                <Route path=":documentId">
                  <Suspense fallback={loader}>
                    <>
                      <SideBarNav
                        uploadPresent={uploadPresent}
                        userType={userType}
                      />
                      <QueryHubHeader
                        platform="Query"
                        homepage="/query/search"
                        hubType="Users"
                        secondaryCTA="UploadContract"
                        user="SB"
                        setUploadPresent={setUploadPresent}
                        setUploadedFiles={setUploadedFiles}
                        setUserType={setUserType}
                        userType={userType}
                      />
                      <Canvas
                        className="query"
                        page={<QueryEditor user="SB" />}
                      />
                    </>
                  </Suspense>
                </Route>
              </Route>
              <Route path="groups">
                <Suspense fallback={loader}>
                  <QueryHubHeader
                    platform="Query"
                    homepage="/query/search"
                    hubType="Groups"
                    secondaryCTA="UploadContract"
                    user="SB"
                    setUploadPresent={setUploadPresent}
                    setUploadedFiles={setUploadedFiles}
                    setUserType={setUserType}
                    userType={userType}
                  />
                  <SideBarNav
                    uploadPresent={uploadPresent}
                    userType={userType}
                  />
                  <Canvas className="query" page={"Group Page"} />
                </Suspense>
              </Route>
              <Route path="reminders">
                <Suspense fallback={loader}>
                  <QueryHubHeader
                    platform="Query"
                    homepage="/query/search"
                    hubType="Reminders"
                    secondaryCTA="UploadContract"
                    user="SB"
                    setUploadPresent={setUploadPresent}
                    setUploadedFiles={setUploadedFiles}
                    setUserType={setUserType}
                    userType={userType}
                  />
                  <SideBarNav
                    uploadPresent={uploadPresent}
                    userType={userType}
                  />
                  <Canvas className="query" page={"Reminders Page"} />
                </Suspense>
              </Route>
              <Route path="obligations">
                <Suspense fallback={loader}>
                  <QueryHubHeader
                    platform="Query"
                    homepage="/query/search"
                    hubType="Obligations"
                    secondaryCTA="UploadContract"
                    user="SB"
                    setUploadPresent={setUploadPresent}
                    setUploadedFiles={setUploadedFiles}
                    setUserType={setUserType}
                    userType={userType}
                  />
                  <SideBarNav
                    uploadPresent={uploadPresent}
                    userType={userType}
                  />
                  <Canvas className="query" page={"Obligations Page"} />
                </Suspense>
              </Route>
              <Route path="upload">
                <Suspense fallback={loader}>
                  <QueryHubHeader
                    platform="Query"
                    homepage="/query/search"
                    hubType="Upload Queue"
                    secondaryCTA="UploadContract"
                    user="SB"
                    setUploadPresent={setUploadPresent}
                    setUploadedFiles={setUploadedFiles}
                    setUserType={setUserType}
                    userType={userType}
                  />
                  <SideBarNav
                    uploadPresent={uploadPresent}
                    userType={userType}
                  />
                  {/* <Canvas className="query" page={<Upload />} /> */}
                  <Canvas
                    className="query"
                    page={<QueryUploadPage uploadedFiles={uploadedFiles} />}
                  />
                </Suspense>
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
