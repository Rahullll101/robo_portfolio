import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import Container from './Container'
import { sectionReveal } from '../../lib/animations'

interface SectionWrapperProps {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export default function SectionWrapper({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={className}>
      <Container className="py-24 md:py-28">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-10"
        >
          {eyebrow ? (
            <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-3xl font-semibold text-slate-100 md:text-5xl">{title}</h2>
          {subtitle ? <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">{subtitle}</p> : null}
        </motion.div>
        {children}
      </Container>
    </section>
  )
}
