import { motion } from 'framer-motion'
import Section from '../components/Section'

const stats = [
  { label: 'Clinical Precision', value: '99.7%' },
  { label: 'Automation Runs / Month', value: '42K+' },
  { label: 'Students in Ecosystem', value: '18K+' },
  { label: 'Partner Institutions', value: '160+' },
]

export default function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Mission-Driven Robotics Company"
      subtitle="We build intelligent robotic systems that increase human capability in surgery, scientific research, and learning."
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-panel neon-border rounded-2xl p-6">
          <h3 className="font-display text-2xl text-slate-100">Vision</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            To create a connected robotics ecosystem where clinicians, educators, and scientists deploy adaptive machines
            that learn continuously and operate responsibly.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
            Our healthcare-first approach prioritizes surgical precision and patient safety, while our education and lab
            platforms extend the same intelligence backbone into classrooms and wet labs.
          </p>
        </div>

        <div className="grid gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="glass-panel neon-border rounded-xl p-4"
            >
              <p className="font-display text-2xl text-slate-100">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
