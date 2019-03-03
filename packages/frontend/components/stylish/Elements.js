import stylish from "tiny-stylish-components";
import { FONT_FAMILY } from "../../utils/theme";

const H1 = stylish.h1`
  font-family: ${FONT_FAMILY};
  text-align: left;
  font-size: 3rem;
  font-weight: normal;
`;

const H2 = stylish.h2`
  font-family: ${FONT_FAMILY};
  font-size: 1.5rem;
  text-transform: uppercase;
  border-bottom: solid 0.1rem #000000;
  padding-bottom: 0.5rem;
  text-align: left;
  margin-bottom: 0.5rem;
  font-weight: normal;
`;

const H3 = stylish.h1`
  font-family: ${FONT_FAMILY};
  font-size: 1.2rem;
  text-transform: uppercase;
  padding-bottom: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const P = stylish.p`
  font-family: ${FONT_FAMILY};
  font-size: 1.1rem;
`;

const A = stylish.a`
  font-family: ${FONT_FAMILY};
  font-size: 1.1rem;
  text-decoration: underline;
  color: #000000;

  &:hover {
    color: #893f43;
  }
`;

export { H1, H2, H3, P, A };
