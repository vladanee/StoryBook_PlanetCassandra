// .storybook/gatsby-mock.js
import React from "react";

const gatsby = jest.requireActual('gatsby');

module.exports = {
  ...gatsby,
  Link: ({ to, ...rest }) => <a href={to} {...rest} />,
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
};