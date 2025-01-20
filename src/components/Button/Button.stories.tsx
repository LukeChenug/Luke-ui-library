import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

// 删除未使用的 ButtonProps 类型定义
// 因为我们已经在 index.tsx 中定义了这个类型

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'disabled'],
    },
    onClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// 使用常量对象统一管理 stories
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    className: 'rounded-full',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    className: 'rounded-full',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    className: 'rounded-full',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'disabled',
    className: 'rounded-full',
  },
};
