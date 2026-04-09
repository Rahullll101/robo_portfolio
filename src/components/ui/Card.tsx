import { type ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  title?: string
  children: ReactNode
  className?: string
  action?: ReactNode
}

export default function Card({ title, children, className, action }: CardProps) {
  return (
    <article
      className={clsx(
        'group rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_60px_rgba(6,10,24,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_70px_rgba(34,211,238,0.12)]',
        className,
      )}
    >
      {title ? (
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-slate-100">{title}</h3>
          {action}
        </div>
      ) : null}
      {children}
    </article>
  )
}
