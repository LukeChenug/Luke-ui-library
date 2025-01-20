import type { Meta } from '@storybook/react';

const TypographyDisplay = () => {
  return (
    <div className="p-6 bg-[#141414] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Typography System</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Headings</h2>
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold">H1 Heading</h1>
            <p className="text-gray-400">text-4xl / font-bold</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">H2 Heading</h2>
            <p className="text-gray-400">text-3xl / font-bold</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">H3 Heading</h3>
            <p className="text-gray-400">text-2xl / font-semibold</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">H4 Heading</h4>
            <p className="text-gray-400">text-xl / font-semibold</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Body Text</h2>
        <div className="space-y-4">
          <div>
            <p className="text-base">Body Regular</p>
            <p className="text-gray-400">text-base</p>
          </div>
          <div>
            <p className="text-sm">Body Small</p>
            <p className="text-gray-400">text-sm</p>
          </div>
          <div>
            <p className="text-xs">Caption</p>
            <p className="text-gray-400">text-xs</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: 'Foundations/Typography',
  component: TypographyDisplay,
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

export const Docs = () => <TypographyDisplay />;
Docs.parameters = {
  previewTabs: {
    canvas: { hidden: true }
  }
}; 