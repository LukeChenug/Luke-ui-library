import type { Meta, StoryObj } from '@storybook/react';

const ColorExample = () => {
  return (
    <div className="space-y-4">
      <div className="bg-primary-bg p-4 rounded">
        <p className="text-primary-text">Primary Text Color</p>
        <button className="bg-primary hover:bg-primary-hover text-primary-text px-4 py-2 rounded mt-2">
          Hover me
        </button>
      </div>
      
      <div className="border border-primary-border p-4 rounded">
        <p className="text-primary-text">Border Example</p>
      </div>
    </div>
  );
};

const meta: Meta<typeof ColorExample> = {
  title: 'Examples/Color Usage',
  component: ColorExample,
};

export default meta;
type Story = StoryObj<typeof ColorExample>;

export const Default: Story = {}; 