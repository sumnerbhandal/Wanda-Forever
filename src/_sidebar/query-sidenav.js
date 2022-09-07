import * as React from "react";
import "./styles.scss";
// import UploadDark from "./_assets/Upload-Dark.svg";
import Query from "./_assets/Query.svg";
import Reminders from "./_assets/Reminders.svg";
import Group from "./_assets/Group.svg";
import User from "./_assets/User.svg";
import { NavLink, Route } from "react-router-dom";

export default function SideBarNav(props) {
  return (
    <nav>
      <NavLink
        className="side-link"
        to="/query/search"
        activeClassName="selected"
      >
        <img alt="Query Icon" src={Query} />
        Query
      </NavLink>
      <NavLink
        className="side-link"
        to="/query/users"
        activeClassName="selected"
      >
        <img alt="Query Icon" src={User} />
        Users
      </NavLink>
      <NavLink
        className="side-link"
        to="/query/groups"
        activeClassName="selected"
      >
        <img alt="Query Icon" src={Group} />
        Groups
      </NavLink>
      <NavLink
        className="side-link"
        to="/query/reminders"
        activeClassName="selected"
      >
        <img alt="Query Icon" src={Reminders} />
        Reminders
      </NavLink>
    </nav>
  );
}
