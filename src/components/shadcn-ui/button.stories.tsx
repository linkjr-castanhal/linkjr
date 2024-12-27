import {Meta, StoryObj} from '@storybook/react';
import { Button, buttonVariants } from "./button";

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Default: StoryObj = {
  args: {
    variant: 'secondary', // ou outra variante conforme necessário
    size: 'secondary',
  },
  
};
