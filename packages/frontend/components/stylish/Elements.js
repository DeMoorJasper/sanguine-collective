import stylish from "tiny-stylish-components";

const H1 = stylish.h1`
  font-family: 'Roboto', 'Open Sans', sans-serif;
  text-align: left;
  font-size: 3rem;
`;

const H2 = stylish.h1`
  font-family: 'Roboto', 'Open Sans', sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  border-bottom: solid 0.1rem #000000;
  padding-bottom: 0.5rem;
  text-align: left;
  margin-bottom: 0.5rem;
`;

const H3 = stylish.h1`
  font-family: 'Roboto', 'Open Sans', sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  padding-bottom: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const P = stylish.p`
  
`;

const A = stylish.a`
  
`;

export { H1, H2, H3, P, A };
