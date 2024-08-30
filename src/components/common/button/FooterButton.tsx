import React from 'react'

interface FooterButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'bright' | 'surface'
  size?: 'sm' | 'lg'
  className?: string
  disabled?: boolean
}

const variantClasses = {
  primary: 'bg-main text-white hover:bg-active',
  bright: 'bg-green-200 text-green-600',
  surface: 'bg-surface text-text',
}

const sizeClasses = {
  lg: 'py-5  text-b1 rounded-2xl w-full',
  sm: 'rounded-2xl px-[14px] text-b2 py-[6px]',
}

const FooterButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'lg',
  className = '',
  disabled = false,
  ...props
}: FooterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center disabled:bg-gray-200 disabled:text-gray-500 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default FooterButton
