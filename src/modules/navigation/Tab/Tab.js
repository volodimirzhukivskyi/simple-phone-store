import React from "react";
import { NavLink } from "react-router-dom";
const Tab = (props) => {
  const { text, elUrlNav, className } = props;
  return (
    <NavLink
      exact
      className={className}
      activeStyle={{ borderBottom: "2px solid white" }}
      to={elUrlNav}
      isActive={() =>
        window.location.pathname + window.location.hash === { elUrlNav }
      }
    >
      {text}
    </NavLink>
  );
};
export default Tab;
