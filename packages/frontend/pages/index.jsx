import React from "react";
import stylish from "tiny-stylish-components";
import axios from "axios";
import { withRouter } from "next/router";

import "../utils/setup";

import Header from "../components/Header";
import { Main } from "../components/stylish/Containers";
import { H2 } from "../components/stylish/Elements";

const MusicContainer = stylish.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
`;

const CoverArt = stylish.img`
  width: 200px;
  height: 200px;
  background: lightgrey;
`;

const TrackCover = stylish.a`
  margin: 10px;
`;

class Index extends React.Component {
  static async getInitialProps({ query }) {
    let fanlinks = await axios.get("/fanlinks");

    return { fanlinks: fanlinks.data };
  }

  render() {
    let { fanlinks } = this.props;

    return (
      <div>
        <Header />
        <Main>
          <H2>Music</H2>
          <MusicContainer>
            {fanlinks.map((fanlink, index) => {
              return (
                <TrackCover href={`/fanlink?id=${fanlink.id}`} key={index}>
                  <CoverArt
                    src={fanlink.coverimg}
                    alt={fanlink.songtitle}
                    title={fanlink.songtitle}
                  />
                </TrackCover>
              );
            })}
          </MusicContainer>
        </Main>
      </div>
    );
  }
}

export default withRouter(Index);
