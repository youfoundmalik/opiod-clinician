import React from "react";
import './index.scss'
import { Link as NavLink } from "react-scroll";

const Nav = () => {
  return (
    <header className="navigation__">
      <div className="links">
        <NavLink
          to="welcome"
          activeclassname="active"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-51}
        >
          Home
        </NavLink>
        <NavLink
          to="consideration"
          activeclassname="active"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-51}
        >
          {window.screen.width > 850 ? "Considerations" : "Consider"}
        </NavLink>
        <NavLink
          to="guidance"
          activeclassname="active"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-51}
        >
          Guidance
        </NavLink>
        <NavLink
          to="talking"
          activeclassname="active"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-51}
        >
          {window.screen.width > 850 ? "Talking with patients" : "Talking"}
        </NavLink>
        <NavLink
          to="usage"
          activeclassname="active"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-51}
        >
          {window.screen.width > 850 ? "Safe Usage" : "Usage"}
        </NavLink>
        <NavLink
          to="storage"
          activeclassname="active"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-51}
        >
          Storage
        </NavLink>
        <NavLink
          to="links"
          id="last"
          activeclassname="active"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-51}
        >
          {window.screen.width > 850 ? "Useful Links" : "Links"}
        </NavLink>
      </div>
    </header>
  );
};

export default Nav;
