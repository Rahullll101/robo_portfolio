import { type HTMLAttributes } from 'react'
import clsx from 'clsx'

export default function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('mx-auto w-full max-w-7xl px-6 md:px-8', className)} {...props} />
}
