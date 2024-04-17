// CommunitySection.stories.tsx
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
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
} as Meta<typeof CommunitySection>;

// Using StoryObj for the template
export const Default: StoryObj<typeof CommunitySection> = {
  render: () => <CommunitySection />
};