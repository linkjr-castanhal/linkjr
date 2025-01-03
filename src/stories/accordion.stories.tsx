import type { Meta, StoryObj } from '@storybook/react'

import { Accordion } from '../components/shadcn-ui/accordion'

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'single',
    value: undefined,
    defaultValue: undefined,
    onValueChange: undefined,
    collapsible: undefined,
    disabled: undefined,
  },
}
