import { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/shadcn-ui/button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

export const Default: StoryObj = {
  args: {
    variant: 'secondary',
    size: 'secondary',
  },
}
