import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom/index";

const RedirectHome = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
    props.loginAlert({
      message: "Your session has expired. Please log in.",
      color: "var(--robin-blue)",
      background: "var(--information)"
    });
  }, [props]);
  return <div>Returned to HP </div>;
};

export default RedirectHome;
