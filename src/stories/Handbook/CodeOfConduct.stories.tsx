// CodeOfConduct.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CodeOfConduct from './CodeOfConduct';

export default {
  title: 'Components/CodeOfConduct',
  component: CodeOfConduct,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof CodeOfConduct>;

export const Default: StoryObj<typeof CodeOfConduct> = {
  render: () => <CodeOfConduct />,
};
