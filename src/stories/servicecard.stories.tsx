import type { Meta, StoryObj } from '@storybook/react'

import Index from '../components/home/services/service-card/index'

const meta = {
  component: Index,
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="flex h-56 w-full items-center justify-center bg-white">
        Conteúdo de imagem ou componente interativo
      </div>
    ),
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit ad eligendi qui repellendus?',
  },
}
