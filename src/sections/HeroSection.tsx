import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Stethoscope } from 'lucide-react'
import Button from '../components/Button'
import { fadeIn, staggerContainer } from '../lib/animations'

const headlineLines = ['Intelligent Robotics', 'for Healthcare, Science', '& Education']

function RobotArmIllustration() {
  return (
    <svg viewBox="0 0 480 480" className="h-full w-full" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="armGlow" x1="80" y1="70" x2="380" y2="410" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22D3EE" />
          <stop offset="0.52" stopColor="#2563EB" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
        <filter id="blurGlow" x="0" y="0" width="480" height="480" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>
      <circle cx="240" cy="240" r="140" fill="url(#armGlow)" opacity="0.08" filter="url(#blurGlow)" />
      <path d="M138 332C171 319 198 304 228 286" stroke="#22D3EE" strokeOpacity="0.6" strokeWidth="10" strokeLinecap="round" />
      <path d="M230 286C264 271 286 246 300 216" stroke="#2563EB" strokeOpacity="0.7" strokeWidth="10" strokeLinecap="round" />
      <path d="M300 216C316 186 320 157 312 128" stroke="#A78BFA" strokeOpacity="0.75" strokeWidth="10" strokeLinecap="round" />
      <rect x="118" y="322" width="56" height="56" rx="18" fill="#0F172A" stroke="url(#armGlow)" strokeWidth="2" />
      <rect x="214" y="270" width="52" height="52" rx="16" fill="#0F172A" stroke="url(#armGlow)" strokeWidth="2" />
      <rect x="286" y="192" width="54" height="54" rx="18" fill="#0F172A" stroke="url(#armGlow)" strokeWidth="2" />
      <rect x="296" y="102" width="44" height="44" rx="16" fill="#0F172A" stroke="url(#armGlow)" strokeWidth="2" />
      <circle cx="325" cy="124" r="8" fill="#22D3EE" />
      <path d="M350 104L390 78" stroke="#22D3EE" strokeOpacity="0.8" strokeWidth="6" strokeLinecap="round" />
      <circle cx="396" cy="74" r="10" fill="#0F172A" stroke="#22D3EE" strokeWidth="2" />
      <path d="M395 74h20" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      <path d="M395 74v20" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

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
            className="relative z-10 h-[380px] w-[380px]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <RobotArmIllustration />
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-background/70 p-4 shadow-[0_0_35px_rgba(34,211,238,0.08)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between gap-4 text-sm">
              <div>
                <p className="text-slate-400">Surgical Arm Status</p>
                <p className="mt-1 font-semibold text-slate-100">Ready for AI-assisted operation</p>
              </div>
              <ChevronDown size={18} className="text-accent" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  )
}
