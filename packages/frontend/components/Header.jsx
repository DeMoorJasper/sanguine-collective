import React, { Component } from "react";
import Head from "next/head";
import stylish from "tiny-stylish-components";

import Socials from "./Socials";

const NAV = stylish.nav`
  display: flex;
  justify-content: space-between;
`;

const NAV_UL = stylish.ul`
  text-align: right;
  margin-right: 2.5%;
  margin-top: 45px;
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

const LOGO_CONTAINER = stylish.a`
  margin-top: 20px;
  margin-left: 40px;
  display: block;
`;

const LOGO = stylish.img`
  height: 75px;
  width: auto;
`;

export default class Header extends Component {
  render() {
    return (
      <header>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300"
            rel="stylesheet"
          />
          <style>{`html, body { margin: 0; padding: 0; }`}</style>
        </Head>
        <Socials />
        <NAV>
          <LOGO_CONTAINER href="/">
            <LOGO
              src={"/static/images/styled_logo.png"}
              alt="Sanguine logo"
              title="Sanguine"
            />
          </LOGO_CONTAINER>
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
