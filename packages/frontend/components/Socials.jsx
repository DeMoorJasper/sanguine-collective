import React, { Component } from "react";
import stylish from "tiny-stylish-components";

const Socials = stylish.div`
  position: fixed;
  top: 5px;
  right: 10px;
  z-index: 125;
`;

const SocialLink = stylish.a`
  background-size: 176px 40px;
  height: 40px;
  width: 42px;
  display: inline-block;
  background-image: url("/static/images/socials.png");
`;

const FB = SocialLink.extend`
  background-repeat: no-repeat;
  background-position: -133px 0;
`;

const TT = SocialLink.extend`
  background-repeat: no-repeat;
  background-position: -88px 0;
`;

const IG = SocialLink.extend`
  background-repeat: no-repeat;
  background-position: -45px 0;
`;

const SC = SocialLink.extend`
  background-repeat: no-repeat;
`;

export default class Header extends Component {
  render() {
    return (
      <Socials>
        <FB href="https://www.facebook.com/sanguineco/" target="_blank" />
        <TT href="https://twitter.com/sanguinecol" target="_blank" />
        <IG
          href="https://www.instagram.com/sanguine_collective/"
          target="_blank"
        />
        <SC href="https://soundcloud.com/sanguinecollective" target="_blank" />
      </Socials>
    );
  }
}
