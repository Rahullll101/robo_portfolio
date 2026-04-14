import { motion } from 'framer-motion'
import { BookOpen, HeartPulse, Layers3, Users2 } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import Card from '../components/ui/Card'
import { fadeIn, staggerContainer } from '../lib/animations'

const ecosystem = [
  { title: 'Clinical Systems', desc: 'Surgical robotics and operating-room decision support.', icon: HeartPulse },
  { title: 'Learning Platform', desc: 'Curriculum, simulations, and guided robotics Diagnostic Labs.', icon: BookOpen },
  { title: 'Automation Stack', desc: 'Protocol orchestration for wet Diagnostic Labs and scientific workflows.', icon: Layers3 },
  { title: 'Community Program', desc: 'Ambassadors, mentors, and global student engagement.', icon: Users2 },
]

export default function EcosystemSection() {
  return (
    <SectionWrapper
      id="ecosystem"
      eyebrow="Ecosystem"
      title="A Connected Robotics Ecosystem"
      subtitle="One intelligence backbone, multiple deployment surfaces. The same platform expands across clinical care, education, and scientific work."
    >
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 md:grid-cols-2">
        {ecosystem.map((item) => {
          const Icon = item.icon
          return (
            <motion.div key={item.title} variants={fadeIn}>
              <Card>
                <Icon className="text-accent" />
                <h3 className="mt-4 font-display text-xl text-slate-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}
