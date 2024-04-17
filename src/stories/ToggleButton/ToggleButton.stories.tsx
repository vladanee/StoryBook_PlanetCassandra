// ToggleButton.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ToggleButton from './ToggleButton'; // Adjust the import path as necessary

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  // Add argTypes if there are specific props to control via Storybook's controls interface
} as Meta<typeof ToggleButton>;

const Template: StoryObj<typeof ToggleButton> = {
  render: () => <ToggleButton />,
};

export const Default = {
  ...Template,
};

// Additional stories can be added to demonstrate different states or use cases
export const ToggledOn = {
  ...Template,
  render: () => <ToggleButton initialChecked={true} />, // Assuming you add an `initialChecked` prop to control its initial state
};

export const ToggledOff = {
  ...Template,
  render: () => <ToggleButton initialChecked={false} />, // Assuming you add an `initialChecked` prop to control its initial state
};
