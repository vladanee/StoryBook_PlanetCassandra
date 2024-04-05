// CompanyCard.stories.tsx
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import CompanyCard from './CompanyCard';
import { CompanyCardProps } from './CompanyCard'; // Import the props type if it's exported

export default {
  title: 'Cards/CompanyCard',
  component: CompanyCard,
} as Meta<typeof CompanyCard>;

const Template: StoryObj<CompanyCardProps> = (args) => <CompanyCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Company Name',
  description: 'A brief description of the company.',
};