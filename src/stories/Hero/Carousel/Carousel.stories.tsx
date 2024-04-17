// Carousel.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';
import { IGatsbyImageData } from "gatsby-plugin-image";

const mockItems = [
  {
    title: 'Sample Title 1',
    slug: '/sample-slug-1',
    image: {} as IGatsbyImageData, // Mock the Gatsby image data appropriately
  },
  {
    title: 'Sample Title 2',
    slug: '/sample-slug-2',
    image: {} as IGatsbyImageData, // Mock the Gatsby image data appropriately
  },
];

export default {
  title: 'Components/Carousel',
  component: Carousel,
  args: {
    items: mockItems,
  },
} as Meta<typeof Carousel>;

export const Default: StoryObj<typeof Carousel> = {
  args: {
    // Additional props here if needed
  },
};

export const WithMultipleItems: StoryObj<typeof Carousel> = {
  args: {
    items: [...mockItems, ...mockItems], // Doubling the items for demonstration
  },
};
