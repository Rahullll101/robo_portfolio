import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import clsx from 'clsx'

export type ButtonVariant = 'primary' | 'secondary' | 'glow'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  icon?: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-primary to-accent text-slate-100 shadow-[0_0_30px_rgba(34,211,238,0.22)] hover:brightness-110',
  secondary:
    'border border-white/10 bg-white/5 text-slate-100 hover:border-secondary/50 hover:bg-secondary/10',
  glow:
    'border border-accent/30 bg-accent/10 text-slate-100 shadow-[0_0_24px_rgba(34,211,238,0.18)] hover:border-accent/60 hover:bg-accent/15',
}

export default function Button({
  variant = 'primary',
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-0',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}
