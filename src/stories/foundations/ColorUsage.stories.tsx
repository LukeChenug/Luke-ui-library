import type { Meta } from '@storybook/react';

const ColorUsage = () => {
  return (
    <div className="p-6 bg-[#141414] min-h-screen">
      <h1 className="text-2xl font-bold text-white mb-6">Color Usage Examples</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Button Examples</h2>
          <div className="space-y-4">
            <div className="bg-primary-bg p-4 rounded">
              <button className="bg-primary hover:bg-primary-hover text-primary-text px-4 py-2 rounded">
                Primary Button
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Foundations/Color Usage',
  component: ColorUsage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta; 