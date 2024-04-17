import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import DiscordSection from './DiscordSection'; // Adjust the import path as necessary

export default {
  title: 'Sections/DiscordSection',
  component: DiscordSection,
} as Meta<typeof DiscordSection>;

const Template: StoryObj<typeof DiscordSection> = {
  render: () => <DiscordSection />,
};

export const Default: StoryObj<typeof DiscordSection> = {
  ...Template,
};

// Add additional stories here if you have different states of the DiscordSection component
// For example, a version with different props or conditional content