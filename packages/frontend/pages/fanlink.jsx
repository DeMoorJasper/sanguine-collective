import React from "react";
import axios from "axios";
import { withRouter } from "next/router";
import stylish, { css } from "tiny-stylish-components";

import FanlinkHeader from "../components/FanlinkHeader";
import { Main } from "../components/stylish/Containers";
import { API_URL } from "../utils/constants";

import '../utils/setup';

const H2 = stylish.h2`
  font-family: 'Roboto', 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-top: 4rem;
  text-align: center;
  border: none;
`;

const IMG = stylish.img`
  width: 250px;
  height: 250px;
  background: lightgrey;
`;

const MainExtended = Main.extend`
  text-align: center;
`;

const Links = stylish.section`
  margin-top: 20px;
  text-align: center;
`;

const A = stylish.a`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: #000000;
  border: 2px solid;
  padding: 10px;
  max-width: 200px;
`;

class Fanlink extends React.Component {
  static async getInitialProps({ query }) {
    let fanlink = await axios.get(`/fanlink?id=${query['id']}`);

    return { fanlink: fanlink.data };
  }

  render() {
    let { fanlink } = this.props;

    console.log(fanlink);

    return (
      <div>
        <FanlinkHeader />
        <MainExtended>
          <H2>{fanlink.songtitle}</H2>
          <IMG
            src={fanlink.coverimg}
            alt={fanlink.songtitle}
            title={fanlink.songtitle}
          />
          <Links>
            <ul>
              {Array.isArray(fanlink.links) &&
                fanlink.links.map((link, index) => {
                  return (
                    <li key={index}>
                      <A
                        href={`${API_URL}/fanlinkredirect?id=${
                          fanlink.id
                        }&platform=${link.platform}`}
                      >
                        <i className={`fa ${link.icon}`} aria-hidden="true" />{" "}
                        {link.platform}
                      </A>
                    </li>
                  );
                })}
            </ul>
          </Links>
        </MainExtended>
      </div>
    );
  }
}

export default withRouter(Fanlink);
