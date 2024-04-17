// CommunitySection.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CommunitySection from './CommunitySection'; // Adjust the import path as necessary

export default {
  title: 'Community/CommunitySection',
  component: CommunitySection,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof CommunitySection>;

const Template: ComponentStory<typeof CommunitySection> = () => <CommunitySection />;

export const Default = Template.bind({});