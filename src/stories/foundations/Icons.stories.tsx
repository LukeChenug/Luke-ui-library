import type { Meta, StoryObj } from '@storybook/react';
import { 
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  SearchOutlined,
  BellOutlined,
  MessageOutlined,
  MenuOutlined,
  CloseOutlined,
  CheckOutlined,
  DownloadOutlined
} from '@ant-design/icons';

// 添加类型定义
type IconWrapperProps = {
  children: React.ReactNode;
  name: string;
  size?: number;
};

// 修复 IconWrapper 组件的类型
const IconWrapper: React.FC<IconWrapperProps> = ({ children, name, size = 24 }) => (
  <div className="space-y-2">
    <div className="text-primary" style={{ fontSize: size }}>
      {children}
    </div>
    <p className="text-gray-400 text-sm">{name}</p>
  </div>
);

const IconDisplay = () => {
  const sizes = [
    { name: 'xs', size: 16, desc: '超小图标' },
    { name: 'sm', size: 20, desc: '小图标' },
    { name: 'md', size: 24, desc: '中等图标（默认）' },
    { name: 'lg', size: 32, desc: '大图标' },
    { name: 'xl', size: 40, desc: '特大图标' },
  ];

  return (
    <div className="p-6 bg-[#141414] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Icon System</h1>
      
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Icon Sizes</h2>
        <div className="grid grid-cols-5 gap-8">
          {sizes.map(({ name, size, desc }) => (
            <div key={name} className="space-y-2">
              <HomeOutlined style={{ fontSize: size }} className="text-primary" />
              <div>
                <p className="font-medium">{name}</p>
                <p className="text-gray-400">{size}px</p>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Common Icons</h2>
        <div className="grid grid-cols-5 gap-8">
          <IconWrapper name="Home">
            <HomeOutlined />
          </IconWrapper>
          <IconWrapper name="User">
            <UserOutlined />
          </IconWrapper>
          <IconWrapper name="Settings">
            <SettingOutlined />
          </IconWrapper>
          <IconWrapper name="Search">
            <SearchOutlined />
          </IconWrapper>
          <IconWrapper name="Bell">
            <BellOutlined />
          </IconWrapper>
          <IconWrapper name="Message">
            <MessageOutlined />
          </IconWrapper>
          <IconWrapper name="Menu">
            <MenuOutlined />
          </IconWrapper>
          <IconWrapper name="Close">
            <CloseOutlined />
          </IconWrapper>
          <IconWrapper name="Check">
            <CheckOutlined />
          </IconWrapper>
          <IconWrapper name="Download">
            <DownloadOutlined />
          </IconWrapper>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Usage Examples</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Button with Icon</h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary rounded">
              <DownloadOutlined />
              <span>下载文件</span>
            </button>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Icon with Badge</h3>
            <div className="relative inline-block">
              <BellOutlined style={{ fontSize: 24 }} className="text-primary" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs">3</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Navigation Icons</h3>
            <div className="flex gap-4 text-primary">
              <HomeOutlined style={{ fontSize: 24 }} />
              <MessageOutlined style={{ fontSize: 24 }} />
              <UserOutlined style={{ fontSize: 24 }} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Guidelines</h2>
        <div className="space-y-4 text-gray-300">
          <p>• 图标应保持统一的视觉重量</p>
          <p>• 在按钮中使用时，图标大小应比文字小一号</p>
          <p>• 导航栏图标统一使用 24px 大小</p>
          <p>• 图标颜色应遵循文字颜色系统</p>
          <p>• 图标应保持良好的留白，确保清晰可辨</p>
        </div>
      </section>

      <section className="mt-12">
        <div className="p-4 bg-yellow-900/20 rounded-lg">
          <p className="text-yellow-500">
            注意：这是图标系统的基础结构展示。实际使用时，请替换为您的图标库组件。
          </p>
        </div>
      </section>
    </div>
  );
};

// 修改 Meta 类型
const meta = {
  title: 'Foundations/Icons',
  component: IconDisplay,
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
} satisfies Meta<typeof IconDisplay>;

export default meta;

type Story = StoryObj<typeof IconDisplay>;

export const Docs: Story = {
  render: () => <IconDisplay />,
  parameters: {
    previewTabs: {
      canvas: { hidden: true }
    }
  }
}; 