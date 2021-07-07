import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom/index";

const RedirectHome = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return <div>Returned to HP </div>;
};

export default RedirectHome;
