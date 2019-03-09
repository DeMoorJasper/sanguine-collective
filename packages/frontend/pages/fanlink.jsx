import React from "react";
import axios from "axios";
import { withRouter } from "next/router";
import Link from "next/link";
import stylish, { css } from "tiny-stylish-components";

import FanlinkHeader from "../components/FanlinkHeader";
import { A, H2 } from "../components/stylish/Elements";
import { Main } from "../components/stylish/Containers";
import { API_URL } from "../utils/constants";

import "../utils/setup";

const FanlinkH2 = H2.extend`
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

const FanlinkAnchor = A.extend`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;
  border: 2px solid;
  padding: 10px;
  max-width: 200px;
`;

const UL = stylish.ul`
  margin: 0;
  padding: 0;
`;

const LI = stylish.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;

class Fanlink extends React.Component {
  static async getInitialProps({ query }) {
    try {
      let fanlink = await axios.get(`/fanlink?id=${query["id"]}`);

      return { fanlink: fanlink.data };
    } catch (e) {
      return { fanlink: null };
    }
  }

  render() {
    let { fanlink } = this.props;
    
    return (
      <React.Fragment>
        <FanlinkHeader
          titleText={fanlink ? fanlink.songtitle : "Fanlink not found"}
          metaImage={fanlink && fanlink.coverimg}
        />
        <MainExtended>
          {fanlink ? (
            <React.Fragment>
              <FanlinkH2>{fanlink.songtitle}</FanlinkH2>
              <IMG
                src={fanlink.coverimg}
                alt={fanlink.songtitle}
                title={fanlink.songtitle}
              />
              <Links>
                <UL>
                  {Array.isArray(fanlink.links) &&
                    fanlink.links.map((link, index) => {
                      return (
                        <LI key={index}>
                          <FanlinkAnchor
                            href={`${API_URL}/fanlinkredirect?id=${
                              fanlink.id
                            }&platform=${link.platform}`}
                          >
                            <i
                              className={`fa ${link.icon}`}
                              aria-hidden="true"
                            />{" "}
                            {link.platform}
                          </FanlinkAnchor>
                        </LI>
                      );
                    })}
                </UL>
              </Links>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <FanlinkH2>Fanlink not found.</FanlinkH2>
              <Link href="/">
                <FanlinkAnchor>Go to all music</FanlinkAnchor>
              </Link>
            </React.Fragment>
          )}
        </MainExtended>
      </React.Fragment>
    );
  }
}

export default withRouter(Fanlink);
