import { motion } from 'framer-motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import { fadeIn, staggerContainer } from '../lib/animations'

const trustedBy = ['Northbridge Medical', 'Aster Labs', 'Helix University', 'Nova STEM Alliance', 'Quantum MedTech', 'Orbit Research']

export default function TrustedBySection() {
  return (
    <SectionWrapper
      id="trusted"
      eyebrow="Trusted By"
      title="Adopted by Teams That Need Precision"
      subtitle="Designed to feel like a real AI robotics startup, this system presents institutional credibility without copying conventional SaaS layouts."
    >
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {trustedBy.map((name) => (
          <motion.div
            key={name}
            variants={fadeIn}
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center text-sm font-medium text-slate-200 backdrop-blur-xl"
          >
            {name}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
