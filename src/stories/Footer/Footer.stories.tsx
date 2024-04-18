// Footer.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Footer>;

export const Default: StoryObj<typeof Footer> = {
  render: () => <Footer />,
};
