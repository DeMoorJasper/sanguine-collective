import React, { Component } from "react";
import stylish from "tiny-stylish-components";

import Socials from "./Socials";

const LOGO = stylish.img`
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 75px;
  width: auto;
`;

export default class FanlinkHeader extends Component {
  render() {
    return (
      <header>
        <Socials />
        <a href="/">
          <LOGO
            src={"/static/images/styled_logo.png"}
            alt="Sanguine logo"
            title="Sanguine"
          />
        </a>
      </header>
    );
  }
}
