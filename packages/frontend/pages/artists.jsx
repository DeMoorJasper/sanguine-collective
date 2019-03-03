import React from "react";
import axios from "axios";
import { withRouter } from "next/router";
import stylish, { css } from "tiny-stylish-components";

import Header from "../components/Header";
import { Main } from "../components/stylish/Containers";
import { H2, A } from "../components/stylish/Elements";

const Artist = stylish.article`
  width: 20rem;
  display: inline-block;
  margin-left: 2rem;
`;

const ArtistImg = stylish.img`
  float: none;
  width: 20rem;
  height: 20rem;
`;

// TODO: Extend this properly once template literals are fixed in stylish
const H2Extended = stylish.h2`
  font-family: 'Roboto', 'Open Sans', sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  border-bottom: solid 0.1rem #000000;
  padding-bottom: 0.5rem;
  text-align: left;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

const SocialLink = A.extend`
  display: inline-block;
  margin: 0.5rem;
  text-decoration: none;
  &:first-child {
    margin-left: 0;
  }
`;

const SocialAnnotation = stylish.p`
  display: block;
  text-transform: uppercase;
  margin-top: 0.5rem;
`;

class Artists extends React.Component {
  static async getInitialProps({ query }) {
    let artists = await axios.get("/artists");

    return { artists: artists.data };
  }

  render() {
    let { artists } = this.props;

    return (
      <div>
        <Header />
        <Main>
          <H2>Artists</H2>
          {artists.map((artist, index) => {
            return (
              <Artist key={index}>
                <H2Extended>
                  {artist.name}
                </H2Extended>
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
        </Main>
      </div>
    );
  }
}

export default withRouter(Artists);
