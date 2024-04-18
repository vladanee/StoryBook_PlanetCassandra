// FindingVenue.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FindingVenue from './FindingVenue';

export default {
  title: 'Components/FindingVenue',
  component: FindingVenue,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof FindingVenue>;

export const Default: StoryObj<typeof FindingVenue> = {
  render: () => <FindingVenue />,
};
