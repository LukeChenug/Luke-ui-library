import type { Meta } from '@storybook/react';
import { colorTokens } from '../../themes/tokens/colors';

const ColorBlock = ({ color, name, value }: { color: string; name: string; value: string }) => (
  <div className="mb-4">
    <div 
      className="w-full h-20 rounded-md mb-2 border border-gray-700" 
      style={{ backgroundColor: color }}
    />
    <div className="text-sm">
      <p className="font-medium text-gray-200">{name}</p>
      <p className="text-gray-400">{value}</p>
    </div>
  </div>
);

const ColorPalette = () => {
  return (
    <div style={{ 
      backgroundColor: '#141414',
      minHeight: '100vh',
      width: '100%',
      padding: '2rem'
    }}>
      <div className="text-gray-200">
        <h1 className="text-2xl font-bold mb-6">Color System</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Primary Colors</h2>
          <div className="grid grid-cols-3 gap-4">
            <ColorBlock 
              color={colorTokens.primary.DEFAULT} 
              name="Primary Default" 
              value={colorTokens.primary.DEFAULT}
            />
            <ColorBlock 
              color={colorTokens.primary.active} 
              name="Primary Active" 
              value={colorTokens.primary.active}
            />
            <ColorBlock 
              color={colorTokens.primary.hover} 
              name="Primary Hover" 
              value={colorTokens.primary.hover}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Background Colors</h2>
          <div className="grid grid-cols-2 gap-4">
            <ColorBlock 
              color={colorTokens.primary.bg} 
              name="Primary Background" 
              value={colorTokens.primary.bg}
            />
            <ColorBlock 
              color={colorTokens.primary.bgHover} 
              name="Primary Background Hover" 
              value={colorTokens.primary.bgHover}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Text Colors</h2>
          <div className="grid grid-cols-3 gap-4">
            <ColorBlock 
              color={colorTokens.primary.text} 
              name="Primary Text" 
              value={colorTokens.primary.text}
            />
            <ColorBlock 
              color={colorTokens.primary.textActive} 
              name="Primary Text Active" 
              value={colorTokens.primary.textActive}
            />
            <ColorBlock 
              color={colorTokens.primary.textHover} 
              name="Primary Text Hover" 
              value={colorTokens.primary.textHover}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Border Colors</h2>
          <div className="grid grid-cols-2 gap-4">
            <ColorBlock 
              color={colorTokens.primary.border} 
              name="Primary Border" 
              value={colorTokens.primary.border}
            />
            <ColorBlock 
              color={colorTokens.primary.borderHover} 
              name="Primary Border Hover" 
              value={colorTokens.primary.borderHover}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Foundations/Colors',
  component: ColorPalette,
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

export const Docs = () => <ColorPalette />;
Docs.parameters = {
  previewTabs: {
    canvas: { hidden: true }
  }
}; 