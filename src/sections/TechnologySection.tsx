import { motion } from 'framer-motion'
import { Brain, DatabaseZap, Eye, Workflow } from 'lucide-react'
import Section from '../components/Section'

const technology = [
  {
    title: 'Artificial Intelligence',
    desc: 'Clinical and operational intelligence models for decision support and adaptive control.',
    icon: Brain,
  },
  {
    title: 'Computer Vision',
    desc: 'Visual interpretation pipelines for surgical guidance, sample tracking, and safety checks.',
    icon: Eye,
  },
  {
    title: 'Robotics Automation',
    desc: 'Motion planning and autonomous execution engines across healthcare, education, and lab environments.',
    icon: Workflow,
  },
  {
    title: 'Data Systems',
    desc: 'Secure telemetry, procedural logging, and analytics for measurable performance improvements.',
    icon: DatabaseZap,
  },
]

export default function TechnologySection() {
  return (
    <Section
      id="technology"
      eyebrow="Technology"
      title="Engineered Intelligence Stack"
      subtitle="Hardware and software capabilities tightly integrated for accuracy, learning, and scalable deployment."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {technology.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="glass-panel neon-border rounded-2xl p-5"
            >
              <Icon className="text-accent" />
              <h3 className="mt-4 font-display text-xl text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
