import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from "@mui/material";
import HeroBannerUseCases from './HeroBannerUseCases';

export default {
  title: 'Components/HeroBannerUseCases',
  component: HeroBannerUseCases,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ height: '100vh' }}>
        {Story()}
      </Box>
    )
  ],
} as Meta<typeof HeroBannerUseCases>;

export const Default: StoryObj<typeof HeroBannerUseCases> = {
  render: () => <HeroBannerUseCases />,
};
