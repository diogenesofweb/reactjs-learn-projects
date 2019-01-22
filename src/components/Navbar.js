// rafc
import React from "react";
// imd
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  //console.log(props);
  return (
    <nav className="container">
      <div className="nav-wrapper blue-grey darken-4">
        <a href="#!" className="brand-logo left">
          <i className="material-icons right">waves</i>
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/calculator">Calculator</NavLink>
          </li>
          <li>
            <NavLink to="/pomodoro">Pomodoro</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
