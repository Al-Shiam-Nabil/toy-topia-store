import React from "react";
import { NavLink } from "react-router";

const ActiveLink = ({ children, className, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-secondary font-semibold text-base hover:text-secondary"
            : `${className} lg:text-white text-base hover:text-secondary `
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default ActiveLink;
