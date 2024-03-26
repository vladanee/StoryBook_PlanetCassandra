import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { BaseCard, CardProps } from './BaseCard'; // Adjust the import path as necessary

export default {
  title: 'Components/BaseCard',
  component: BaseCard,
  argTypes: {
    title: { control: 'text' },
    date: { control: 'date' },
    thumbnail: { control: 'text' }
  },
} as Meta<CardProps>;

const Template: StoryObj<CardProps> = {
  render: (args) => <BaseCard {...args} />,
};

export const Default: StoryObj<CardProps> = {
  ...Template,
  args: {
    title: 'Example Title',
    date: new Date().toISOString(),
    thumbnail: 'https://i.ibb.co/Bq2J6JT/Static-Thumbnail.png',
  },
};

export const NoThumbnail: StoryObj<CardProps> = {
  ...Template,
  args: {
    title: 'No Thumbnail Provided',
    date: new Date().toISOString(),
  },
};

export const CustomThumbnail: StoryObj<CardProps> = {
  ...Template,
  args: {
    title: 'Custom Thumbnail',
    date: new Date().toISOString(),
    thumbnail: 'https://placekitten.com/500/300', // Example placeholder image
  },
};

