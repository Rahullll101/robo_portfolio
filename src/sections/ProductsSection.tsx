import { motion } from 'framer-motion'
import { Activity, Atom, Bot } from 'lucide-react'
import Card from '../components/Card'
import Section from '../components/Section'

const products = [
  {
    name: 'Surgical Robot Arm',
    icon: Activity,
    text: 'Clinical robotic arm with AI-assisted operation workflows and surgical-grade control systems.',
  },
  {
    name: 'Education Kit',
    icon: Bot,
    text: 'Classroom-ready modular kit paired with curriculum pathways and simulation-led learning tools.',
  },
  {
    name: 'Lab Automation Robot',
    icon: Atom,
    text: 'Programmable lab assistant for repetitive chemistry workflows, preparation, and sample movement.',
  },
]

export default function ProductsSection() {
  return (
    <Section
      id="products"
      eyebrow="Solutions"
      title="Modular Product Portfolio"
      subtitle="Each platform runs on a shared AI and automation core while adapting to domain-specific needs."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {products.map((product, index) => {
          const Icon = product.icon
          return (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <Card title={product.name}>
                <Icon className="mb-4 text-accent" />
                <p className="text-sm leading-relaxed text-slate-300">{product.text}</p>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
