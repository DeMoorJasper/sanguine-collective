import React from 'react';
import { withRouter } from "next/router";
import stylish from 'tiny-stylish-components';

import Header from '../components/Header';
import { Main } from '../components/stylish/Containers';
import { H2, H3, P, A } from '../components/stylish/Elements';

class Contact extends React.Component {
  render() {
    return <div>
      <Header />
      <Main>
        <H2>Contact</H2>
        <H3>Location</H3>
        <P>We operate and support artists worldwide</P>
        <H3>Information &amp; bookings</H3>
        <P>Send us an email <A href='mailto:info@sanguinecollective.eu'>info@sanguinecollective.eu</A></P>
        <H3>Demos/Submissions</H3>
        <P>Submit a demo <A href='mailto:submit@sanguinecollective.eu'>submit@sanguinecollective.eu</A></P>
      </Main>
    </div>;
  }
}

export default withRouter(Contact);
