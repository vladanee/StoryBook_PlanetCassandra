// BuildingTeam.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BuildingTeam from './BuildingTeam';

export default {
  title: 'Components/BuildingTeam',
  component: BuildingTeam,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof BuildingTeam>;

// Template definition using StoryObj
export const Default: StoryObj<typeof BuildingTeam> = {
  render: () => <BuildingTeam />,
};
