import type { Meta } from '@storybook/react';

const RadiusDisplay = () => {
  const radiuses = [
    { name: 'none', value: '0px', desc: '无圆角' },
    { name: 'sm', value: '0.125rem', pixels: '2px', desc: '小圆角' },
    { name: 'DEFAULT', value: '0.25rem', pixels: '4px', desc: '默认圆角' },
    { name: 'md', value: '0.375rem', pixels: '6px', desc: '中等圆角' },
    { name: 'lg', value: '0.5rem', pixels: '8px', desc: '大圆角' },
    { name: 'xl', value: '0.75rem', pixels: '12px', desc: '超大圆角' },
    { name: '2xl', value: '1rem', pixels: '16px', desc: '特大圆角' },
    { name: 'full', value: '9999px', desc: '完全圆形' },
  ];

  return (
    <div className="p-6 bg-[#141414] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Border Radius</h1>
      
      <div className="grid grid-cols-2 gap-8">
        {radiuses.map(({ name, value, pixels, desc }) => (
          <div key={name} className="space-y-2">
            <div 
              className="w-24 h-24 bg-primary"
              style={{ borderRadius: value }}
            />
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-gray-400">{value} {pixels && `/ ${pixels}`}</p>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Usage Examples</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <button 
              className="px-4 py-2 bg-primary rounded"
              style={{ borderRadius: '0.25rem' }}
            >
              Default Button
            </button>
            <p className="text-gray-400">默认按钮圆角 (4px)</p>
          </div>
          
          <div className="space-y-2">
            <div 
              className="w-12 h-12 bg-primary"
              style={{ borderRadius: '9999px' }}
            />
            <p className="text-gray-400">头像圆角 (圆形)</p>
          </div>
          
          <div className="space-y-2">
            <div 
              className="w-full h-20 bg-primary"
              style={{ borderRadius: '0.5rem' }}
            />
            <p className="text-gray-400">卡片圆角 (8px)</p>
          </div>
          
          <div className="space-y-2">
            <button 
              className="px-4 py-2 bg-primary"
              style={{ borderRadius: '9999px' }}
            >
              Pill Button
            </button>
            <p className="text-gray-400">胶囊按钮 (全圆角)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: 'Foundations/Radius',
  component: RadiusDisplay,
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

export const Docs = () => <RadiusDisplay />;
Docs.parameters = {
  previewTabs: {
    canvas: { hidden: true }
  }
}; 