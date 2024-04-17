// CustomForm.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CustomForm from './CustomForm';

export default {
  title: 'Components/CustomForm',
  component: CustomForm,
} as Meta;

// Define a Template using the Story type from '@storybook/react'
const Template: StoryObj = (args) => <CustomForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  // default props to pass to your CustomForm if any
};

// If you want to show a specific state or variation
export const SubmittedState = Template.bind({});
SubmittedState.args = {
  // props for showing the form in a submitted state
};