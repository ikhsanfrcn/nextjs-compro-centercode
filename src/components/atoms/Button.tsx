import React from 'react';

interface ButtonProps {
  type?: 'submit' | 'button';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  ariaCurrent?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ type, disabled,  children, onClick, className, href, ariaCurrent }) => {
  return href ? (
    <a href={href} className={`rounded-md px-3 py-2 text-sm font-medium ${className}`} aria-current={ariaCurrent ? 'page' : undefined}>
      {children}
    </a>
  ) : (
    <button type={type} disabled={disabled} onClick={onClick} className={`bg-black text-white rounded-md px-3 py-2 text-sm font-medium ${className}`}>
      {children}
    </button>
  );
};
