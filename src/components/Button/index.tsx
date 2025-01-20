import React from 'react';

// 使用 type 代替 interface
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'disabled';
  className?: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;  // 继承原生 button 属性

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ 
  children, 
  variant = 'primary',
  className = '',
  ...props 
}, ref) => {
  // 使用 const 定义样式类
  const baseClasses = 'rounded-full px-4 py-2 font-medium focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-primary text-black hover:bg-primary/80',
    secondary: 'bg-secondary text-black hover:bg-secondary/80',
    outline: 'border-2 border-primary text-black hover:bg-primary/10',
    disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed'
  } as const;  // 使用 as const 确保类型推断

  return (
    <button 
      ref={ref}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
      disabled={variant === 'disabled'}
      {...props}
    >
      {children}
    </button>
  );
});

// 添加显示名称，有助于调试
Button.displayName = 'Button';

export default Button; 