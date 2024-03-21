import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BaseCard, CardProps } from './BaseCard';

const meta: Meta<typeof BaseCard> = {
  title: 'Components/BaseCard',
  component: BaseCard,
  tags: ['autodocs'], // Optional: if you're using @storybook/addon-docs
};

export default meta;

const Template: StoryObj<CardProps> = (args) => <BaseCard {...args} />;

// Example static thumbnail for Storybook.
// Simplify by using just the URL string for the thumbnail image.
const exampleThumbnailUrl = 'https://i.ibb.co/Bq2J6JT/Static-Thumbnail.png';

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  date: '2024-03-21',
};

export const WithThumbnail = Template.bind({});
WithThumbnail.args = {
  ...Default.args,
  thumbnail: exampleThumbnailUrl, // Provide the URL directly as a string
};