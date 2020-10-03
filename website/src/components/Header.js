import React from "react";
import { Link } from "gatsby";

import Logo from "../images/kitura.svg";
import Twitter from "../images/twitter_icon.svg";
import GitHub from "../images/github_icon.svg";
import Slack from "../images/slack_icon.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="header--nav">
        <ul className="header--nav_list">
          <li>
            <Link className="header--logo header--nav_link" to="/">
              <img className="header--logo_img" src={Logo}></img>
              <h1 className="header--logo_title">KITURA</h1>
            </Link>
          </li>
          <li>
            <Link className="header--nav_link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header--nav_link" to="/learn">
              Learn
            </Link>
          </li>
          <li>
            <Link className="header--nav_link" to="/news">
              News
            </Link>
          </li>
        </ul>
        <ul className="header--nav_list">
          <li>
            <a
              className="header--nav_social_link"
              target="_blank"
              href="https://github.com/Kitura"
            >
              <img src={GitHub}></img>
            </a>
          </li>
          <li>
            <a
              className="header--nav_social_link"
              target="_blank"
              href="https://twitter.com/KituraDev"
            >
              <img src={Twitter}></img>
            </a>
          </li>
          <li>
            <a
              className="header--nav_social_link"
              target="_blank"
              href="https://swift-at-ibm.slack.com"
            >
              <img src={Slack}></img>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
