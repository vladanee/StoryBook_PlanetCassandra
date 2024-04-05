// CommunitySection.stories.tsx
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import CommunitySection from './CommunitySection';

export default {
  title: 'Sections/CommunitySection',
  component: CommunitySection,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryObj = (args) => <CommunitySection {...args} />;

export const Default = Template.bind({});