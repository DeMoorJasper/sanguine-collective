import React, { Component } from "react";
import stylish from "tiny-stylish-components";

import Socials from "./Socials";

const NAV = stylish.nav`
  margin-bottom: 2.5rem;
  -webkit-background-size: 5rem 5rem;
  background-size: 5rem 5rem;
  margin-bottom: 4rem;
  display: block;
`;

const NAV_UL = stylish.ul`
  text-align: right;
  margin-right: 2.5%;
  margin-top: 8rem;
`;

const LI = stylish.li`
  display: inline-block;
`;

const A = stylish.a`
  font-family: 'Roboto', 'Open Sans', sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;
  margin-left: 1.5rem;
  &:hover {
    color: #893f43;
  }
`;

const LOGO = stylish.img`
  position: absolute;
  top: 2rem;
  left: 2rem;
  height: 75px;
  width: auto;
`;

export default class Header extends Component {
  render() {
    return (
      <header>
        <Socials />
        <NAV>
          <h1>
            <a href="/">
              <LOGO
                src={"/static/images/styled_logo.png"}
                alt="Sanguine logo"
                title="Sanguine"
              />
            </a>
          </h1>
          <NAV_UL>
            <LI>
              <A href="/" className="underline">
                music
              </A>
            </LI>
            <LI>
              <A href="/artists" className="underline">
                artists
              </A>
            </LI>
            <LI>
              <A href="/contact" className="underline">
                contact
              </A>
            </LI>
          </NAV_UL>
        </NAV>
      </header>
    );
  }
}
