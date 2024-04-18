// YoutubeSection.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import YoutubeSection from './YoutubeSection';
import { CssBaseline } from '@mui/material';

export default {
  title: 'Components/YoutubeSection',
  component: YoutubeSection,
  decorators: [
    (Story) => (
      <>
        <CssBaseline />
        <Story />
      </>
    )
  ],
  parameters: {
    layout: 'fullscreen',
  }
} as Meta<typeof YoutubeSection>;

export const Default: StoryObj<typeof YoutubeSection> = {};
