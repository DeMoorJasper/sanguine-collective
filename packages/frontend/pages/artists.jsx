import React from "react";
import axios from "axios";
import { withRouter } from "next/router";
import stylish, { css } from "tiny-stylish-components";

import Header from "../components/Header";
import { Main } from "../components/stylish/Containers";
import { H2, H3, A, P } from "../components/stylish/Elements";

import "../utils/setup";

const ArtistContainer = stylish.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const Artist = stylish.article`
  width: 20rem;
  display: inline-block;
`;

const ArtistImg = stylish.img`
  float: none;
  width: 20rem;
  height: 20rem;
`;

const H3Extended = H3.extend`
  text-transform: uppercase;
  border-bottom: solid 0.1rem #000000;
`;

const SocialLink = A.extend`
  display: inline-block;
  margin: 0.5rem;
  text-decoration: none;
  
  &:first-child {
    margin-left: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const SocialAnnotation = P.extend`
  display: block;
  text-transform: uppercase;
  margin-top: 0.5rem;
`;

class Artists extends React.Component {
  static async getInitialProps({ query }) {
    let artists = await axios.get("/artist");

    return { artists: artists.data };
  }

  render() {
    let { artists } = this.props;

    return (
      <div>
        <Header />
        <Main>
          <H2>Artists</H2>
          <ArtistContainer>
            {artists.map((artist, index) => {
              return (
                <Artist key={index}>
                  <H3Extended>{artist.name}</H3Extended>
                  <ArtistImg
                    src={artist.img}
                    alt={artist.name}
                    title={artist.name}
                  />
                  {Array.isArray(artist.socials) && (
                    <SocialAnnotation>Follow this artist:</SocialAnnotation>
                  )}
                  <div>
                    {Array.isArray(artist.socials) &&
                      artist.socials.map((social, index) => {
                        return (
                          <SocialLink
                            href={social.url}
                            target="_blank"
                            key={index}
                          >
                            {social.class.toUpperCase()}
                          </SocialLink>
                        );
                      })}
                  </div>
                </Artist>
              );
            })}
          </ArtistContainer>
        </Main>
      </div>
    );
  }
}

export default withRouter(Artists);
