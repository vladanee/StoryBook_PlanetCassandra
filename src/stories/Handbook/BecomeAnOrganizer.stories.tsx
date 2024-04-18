// BecomeAnOrganizer.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BecomeAnOrganizer from './BecomeAnOrganizer';

export default {
  title: 'Components/BecomeAnOrganizer',
  component: BecomeAnOrganizer,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof BecomeAnOrganizer>;

export const Default: StoryObj<typeof BecomeAnOrganizer> = {
  render: () => <BecomeAnOrganizer />,
};
