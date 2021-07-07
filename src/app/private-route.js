import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import RedirectHome from "./redirect";

function PrivateRoute(props) {
  return (
    <Route path={props.path}>
      <Suspense
        fallback={
          <div className="loading-container">
            <span className="loading"></span>
          </div>
        }
      >
        {props.authenticated ? props.component : <RedirectHome />}
      </Suspense>
    </Route>
  );
}
export default PrivateRoute;
