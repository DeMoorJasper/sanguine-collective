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
  justify-content: space-between;
  flex-flow: row wrap;
`;

const CoverArt = stylish.img`
  width: 200px;
  height: 200px;
  margin: 0;
  background: lightgrey;
`;

const TrackCover = stylish.a`
  width: 200px;
  height: 200px;
  margin: 10px;
  border: 5px solid transparent;

  &:hover {
    border: 5px solid #893f43;
  }
`;

class Index extends React.Component {
  static async getInitialProps({ query }) {
    try {
      let fanlinks = await axios.get("/fanlink");

      return { fanlinks: fanlinks.data };
    } catch (e) {
      return { fanlinks: [] };
    }
  }

  render() {
    let { fanlinks } = this.props;

    return (
      <div>
        <Header titleText="Music" />
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
