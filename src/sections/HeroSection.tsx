import { motion } from 'framer-motion'
import { ArrowRight, Stethoscope } from 'lucide-react'
import Button from '../components/Button'
import { fadeIn, staggerContainer } from '../lib/animations'

const headlineLines = ['Intelligent Robotics', 'for Healthcare, Science', '& Education']

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden px-6 pb-20 pt-10 md:px-8 md:pb-28 md:pt-14">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.35),transparent_32%),radial-gradient(circle_at_75%_20%,rgba(20,184,166,0.28),transparent_26%),radial-gradient(circle_at_bottom,rgba(167,139,250,0.2),transparent_35%)]" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
        animate={{ y: [0, 16, 0], x: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-40 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
        animate={{ y: [0, -12, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]"
      >
        <motion.div variants={fadeIn} className="max-w-3xl">
          <motion.p className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
            <Stethoscope size={13} />
            Precision Surgical Intelligence
          </motion.p>

          <motion.h1 variants={fadeIn} className="space-y-1 text-4xl font-semibold leading-[1.02] text-slate-100 sm:text-5xl lg:text-7xl">
            {headlineLines.map((line) => (
              <span key={line} className="block font-display">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p variants={fadeIn} className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            AI-powered robotic systems transforming surgery, laboratories, and learning environments. We engineer
            adaptive platforms that think, learn, and operate with human-centered safety.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-8 flex flex-wrap gap-3">
            <Button icon={<ArrowRight size={16} />} onClick={() => document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Solutions
            </Button>
            <Button variant="glow" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Request Demo
            </Button>
          </motion.div>

          <motion.div variants={fadeIn} className="mt-8 flex flex-wrap gap-3 text-xs text-slate-300">
            {['Surgical Arm Focus', 'Lab Automation Ready', 'STEM Ecosystem'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="relative mx-auto flex min-h-[520px] w-full max-w-[560px] items-center justify-center"
        >
          <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl" />
          <div className="absolute inset-6 rounded-[1.75rem] border border-accent/25 bg-background/55" />
          <motion.div
            aria-hidden="true"
            className="absolute left-10 top-10 h-28 w-28 rounded-full bg-accent/15 blur-3xl"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute right-14 top-28 h-36 w-36 rounded-full bg-primary/15 blur-3xl"
            animate={{ scale: [1, 1.08, 1], y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            className="relative z-10 h-[420px] w-[420px] overflow-hidden rounded-[1.5rem] border border-accent/25"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/medical-surgical-arm.jpg"
              alt="Robotic surgical arm in an advanced operating room"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.2),rgba(15,23,42,0.55))]" />
            <div className="absolute bottom-4 left-4 rounded-full border border-accent/35 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              Medical Surgical Arm
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  )
}
