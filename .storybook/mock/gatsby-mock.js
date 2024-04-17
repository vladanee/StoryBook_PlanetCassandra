// .storybook/gatsby-mock.js
import React from "react";

const gatsby = jest.requireActual('gatsby');

module.exports = {
  ...gatsby,
  Link: ({ to, ...rest }) => <a href={to} {...rest} />,
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
};
module.exports = {
  // Mock implementations for Gatsby's static query and other components
  StaticQuery: props => props.render({ data: {} }),
  useStaticQuery: () => ({ data: {} }),
};