import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Telescope } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import Card from '../components/ui/Card'
import { fadeIn, staggerContainer } from '../lib/animations'

const reasons = [
  {
    title: 'Improve precision where it matters most',
    desc: 'Healthcare robotics extends human capability with repeatable motion, controlled force, and data-driven support.',
    icon: ShieldCheck,
  },
  {
    title: 'Accelerate learning through tangible systems',
    desc: 'Health Education programs become more effective when students can build, simulate, and deploy real robotic workflows.',
    icon: Sparkles,
  },
  {
    title: 'Scale scientific work without loss of rigor',
    desc: 'Wet lab automation reduces repetitive burden while preserving protocol discipline and measurable consistency.',
    icon: Telescope,
  },
]

export default function WhyRoboticsMatterSection() {
  return (
    <SectionWrapper
      id="why"
      eyebrow="Story"
      title="Why Robotics Matters"
      subtitle="Robotics is no longer a side system. It is becoming the operating layer for precise care, accelerated science, and practical education."
    >
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={fadeIn} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            The strongest robotics companies do not sell hardware alone. They build systems that help people make better
            decisions under pressure, learn faster, and operate more consistently across critical environments.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
            That is the standard this site is designed around: surgical robotics first, then education and lab ecosystems
            that extend the same intelligence stack into broader use.
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="grid gap-4">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <Card key={reason.title}>
                <div className="inline-flex rounded-xl border border-accent/20 bg-accent/10 p-2 text-accent">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 font-display text-xl text-slate-100">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{reason.desc}</p>
              </Card>
            )
          })}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
