import type { Meta, StoryObj } from '@storybook/react'

import { HeroSection } from '../app/(home)/components/hero-section'

const meta = {
  component: HeroSection,
} satisfies Meta<typeof HeroSection>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
