// CustomForm.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CustomForm from './CustomForm';

export default {
  title: 'Components/CustomForm',
  component: CustomForm,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof CustomForm>;

export const Default: StoryObj<typeof CustomForm> = {
  render: () => <CustomForm />,
};
