// EventCard.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import EventCard from './EventCard';
import { IGatsbyImageData } from 'gatsby-plugin-image';

// Mock data for the Gatsby image since StaticImage can't be used directly in Storybook
const mockImage: IGatsbyImageData = {
  layout: 'fixed',
  width: 400,
  height: 320,
  images: {
    fallback: {
      src: "https://via.placeholder.com/400x320",
      srcSet: "",
      sizes: ""
    },
    sources: []
  },
  backgroundColor: '#f8f8f8'
};

export default {
  title: 'Components/EventCard',
  component: EventCard,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof EventCard>;

export const Default: StoryObj<typeof EventCard> = {
  render: () => (
    <EventCard
      width="400px"
      eventName="Sample Event"
      eventDescription="This is a sample description of the event. It should give enough detail to interest attendees."
      eventImg={mockImage}
    />
  ),
};
