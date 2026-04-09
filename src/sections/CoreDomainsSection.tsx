import { motion } from 'framer-motion'
import { FlaskConical, GraduationCap, Globe2, HeartPulse } from 'lucide-react'
import Card from '../components/Card'
import Section from '../components/Section'

const domains = [
  {
    title: 'Healthcare Robotics',
    icon: HeartPulse,
    points: ['Medical Surgical Robotic Arm', 'AI-assisted precision surgery'],
  },
  {
    title: 'STEM Education',
    icon: GraduationCap,
    points: ['Hands-on robotics kits', 'Adaptive learning platform'],
  },
  {
    title: 'Wet Lab Automation',
    icon: FlaskConical,
    points: ['Chemistry automation workflows', 'Autonomous sample handling'],
  },
  {
    title: 'Ambassador Program',
    icon: Globe2,
    points: ['Guest and ambassador escorts', 'Global student robotics community'],
  },
]

export default function CoreDomainsSection() {
  return (
    <Section
      id="domains"
      eyebrow="Core Domains"
      title="Four Strategic Robotics Pillars"
      subtitle="A unified ecosystem engineered for clinical excellence, scientific throughput, and education at scale."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {domains.map((domain, index) => {
          const Icon = domain.icon
          return (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card>
                <div className="mb-3 inline-flex rounded-lg border border-accent/30 bg-accent/10 p-2 text-accent">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-xl text-slate-100">{domain.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {domain.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
