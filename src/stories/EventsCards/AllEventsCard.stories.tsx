// AllEventsCard.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AllEventsCard from './AllEventsCard';

export default {
  title: 'Components/AllEventsCard',
  component: AllEventsCard,
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof AllEventsCard>;

export const Default: StoryObj<typeof AllEventsCard> = {
  render: () => <AllEventsCard title="Sample Event" date="October 10, 2024" />,
};
