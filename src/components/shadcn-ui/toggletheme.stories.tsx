'use client';

import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'next-themes'; 
import { ThemeModeButton } from './theme-mode';

export default {
  title: 'Components/ThemeModeButton', 
  component: ThemeModeButton,
  parameters: {
    layout: 'centered', 
  },
} as Meta;

const Template: StoryFn = () => (
  <ThemeProvider attribute="class" defaultTheme="light">
    <div className="bg-background p-6 h-screen w-screen">
      <ThemeModeButton />
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

