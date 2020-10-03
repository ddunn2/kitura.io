import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Kitura</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/learn">Learn</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>GitHub</li>
          <li>Slack</li>
          <li>Twitter</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
