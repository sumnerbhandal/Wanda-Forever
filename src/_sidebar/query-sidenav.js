import * as React from "react";
import "./styles.scss";
// import UploadDark from "./_assets/Upload-Dark.svg";
import Query from "./_assets/Query.svg";
import Reminders from "./_assets/Reminders.svg";
import Group from "./_assets/Group.svg";
import User from "./_assets/User.svg";
import Obligation from "./_assets/Obligations.svg";
import Upload from "./_assets/Upload.svg";
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
        <span>Query</span>
      </NavLink>
      <NavLink
        className="side-link"
        to="/query/users"
        activeClassName="selected"
      >
        <img alt="User Icon" src={User} />
        <span>Users</span>
      </NavLink>
      <NavLink
        className="side-link"
        to="/query/groups"
        activeClassName="selected"
      >
        <img alt="Group Icon" src={Group} />
        <span>Groups</span>
      </NavLink>
      <NavLink
        className="side-link"
        to="/query/reminders"
        activeClassName="selected"
      >
        <img alt="Reminders Icon" src={Reminders} />
        <span>Reminders</span>
      </NavLink>
      <NavLink
        className="side-link"
        to="/query/obligations"
        activeClassName="selected"
      >
        <img alt="Obligations Icon" src={Obligation} />
        <span>Obligations</span>
      </NavLink>
      <NavLink
        disabled={props.uploadPresent}
        className={!props.uploadPresent ? "side-link active" : "side-link"}
        to="/query/upload"
        activeClassName="selected"
      >
        <img alt="Upload Icon" src={Upload} />
        <span>Upload Queue</span>
      </NavLink>
    </nav>
  );
}
