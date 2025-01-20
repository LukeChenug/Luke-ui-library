import type { Meta } from '@storybook/react';

const SpacingDisplay = () => {
  const spacings = [
    { name: 'xs', value: '0.25rem', pixels: '4px' },
    { name: 'sm', value: '0.5rem', pixels: '8px' },
    { name: 'md', value: '1rem', pixels: '16px' },
    { name: 'lg', value: '1.5rem', pixels: '24px' },
    { name: 'xl', value: '2rem', pixels: '32px' },
    { name: '2xl', value: '3rem', pixels: '48px' },
  ];

  return (
    <div className="p-6 bg-[#141414] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Spacing System</h1>
      
      <div className="space-y-8">
        {spacings.map(({ name, value, pixels }) => (
          <div key={name} className="flex items-center gap-4">
            <div 
              className="bg-primary" 
              style={{ 
                width: value,
                height: '24px',
              }}
            />
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-gray-400">{value} / {pixels}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Usage Examples</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Margin (m-*)</h3>
            <div className="flex items-center gap-4 bg-gray-800 p-4">
              <div className="bg-primary w-16 h-16 m-4">
                <div className="w-full h-full bg-primary-hover"></div>
              </div>
              <p className="text-gray-400">margin: 1rem (16px)</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Padding (p-*)</h3>
            <div className="flex items-center gap-4 bg-gray-800 p-4">
              <div className="bg-primary p-4">
                <div className="w-16 h-16 bg-primary-hover"></div>
              </div>
              <p className="text-gray-400">padding: 1rem (16px)</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Gap (gap-*)</h3>
            <div className="flex items-center gap-4 bg-gray-800 p-4">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-primary"></div>
                <div className="w-16 h-16 bg-primary"></div>
                <div className="w-16 h-16 bg-primary"></div>
              </div>
              <p className="text-gray-400">gap: 1rem (16px)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: 'Foundations/Spacing',
  component: SpacingDisplay,
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false,
      showNav: false,
    },
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Docs = () => <SpacingDisplay />;
Docs.parameters = {
  previewTabs: {
    canvas: { hidden: true }
  }
}; 