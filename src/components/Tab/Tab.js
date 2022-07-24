import React from "react";
import { Link } from "react-router-dom";
const Tab = (props) => {
  const { text, elUrlNav, className } = props;
  return (
    <Link
      className={className}
      // activeStyle={{ borderBottom: "2px solid white" }}
      to={elUrlNav}
      // isActive={() =>
      //   window.location.pathname + window.location.hash === { elUrlNav }
      // }
    >
      {text}
    </Link>
  );
};
export default Tab;
