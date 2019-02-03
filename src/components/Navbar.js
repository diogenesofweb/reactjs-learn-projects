// rafc
import React from "react";
// imd
import { Link, NavLink, withRouter } from "react-router-dom";
import { MyConsomer } from "./MyContext";

const Navbar = props => {
  //console.log(props);
  return (
    <MyConsomer>
      {({ theme, lang, text, handleThemeClick, handleLangClick }) => (
        <nav className={`${theme} darken-4`}>
          <div className="nav-wrapper ">
            <ul className="left">
              <li>
                <a href="#!" onClick={handleLangClick}>
                  {lang === "en" ? "UA" : "EN"}
                </a>
              </li>
              <li>
                <a href="#!" onClick={handleThemeClick}>
                  <i className="material-icons">
                    {theme === "blue-grey" ? "brightness_5" : "brightness_3"}
                  </i>
                </a>
              </li>
            </ul>
            <ul className="right">
              <li>
                <Link to="/">{text.home[lang]}</Link>
              </li>
              <li>
                <NavLink to="/quote">{text.quote[lang]}</NavLink>
              </li>
              <li>
                <NavLink to="/todos">{text.todos[lang]}</NavLink>
              </li>
              <li>
                <NavLink to="/calculator">{text.calculator[lang]}</NavLink>
              </li>
              <li>
                <NavLink to="/pomodoro">{text.pomodoro[lang]}</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </MyConsomer>
  );
};

export default withRouter(Navbar);
