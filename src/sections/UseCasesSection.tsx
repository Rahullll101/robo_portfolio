import { motion } from 'framer-motion'
import { FlaskConical, GraduationCap, Hospital } from 'lucide-react'
import Section from '../components/Section'

const useCases = [
  {
    title: 'Hospitals',
    desc: 'Surgical support, precision intervention workflows, and clinical assistant robotics.',
    icon: Hospital,
  },
  {
    title: 'Labs',
    desc: 'Automated chemistry operations with repeatable protocol execution and sample management.',
    icon: FlaskConical,
  },
  {
    title: 'Schools',
    desc: 'STEM robotics curriculum with hands-on kits, guided projects, and ambassador-led mentoring.',
    icon: GraduationCap,
  },
]

export default function UseCasesSection() {
  return (
    <Section
      id="use-cases"
      eyebrow="Use Cases"
      title="Built for Real-World Environments"
      subtitle="Deployment scenarios designed around measurable outcomes and operational reliability."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {useCases.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-panel neon-border rounded-2xl p-5"
            >
              <Icon className="text-accent" />
              <h3 className="mt-4 font-display text-xl text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
