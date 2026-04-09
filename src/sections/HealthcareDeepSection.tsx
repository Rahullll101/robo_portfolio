import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { fadeIn, staggerContainer } from '../lib/animations'

const focusFeatures = [
  {
    id: 'precision',
    label: 'High Precision Control',
    summary: 'Sub-millimeter robotic articulation with adaptive haptic stabilization for controlled movement.',
    metrics: ['0.3 mm micro-motion correction', '6-axis assisted articulation', 'Surgeon intent filtering'],
  },
  {
    id: 'ai',
    label: 'AI-Assisted Surgery',
    summary: 'Live procedural guidance using model-driven assistance and anomaly detection during operation.',
    metrics: ['Intra-op path recommendations', 'Risk pattern alerts', 'Adaptive instrument calibration'],
  },
  {
    id: 'imaging',
    label: 'Real-time Imaging',
    summary: 'Integrated multi-spectral imaging synchronized with robotic movement and surgeon dashboards.',
    metrics: ['3D tissue visualization', 'Latency-aware overlays', 'Dynamic depth reconstruction'],
  },
  {
    id: 'safety',
    label: 'Safety Systems',
    summary: 'Layered safety protocols including autonomous guardrails and hardware-level failover logic.',
    metrics: ['Collision avoidance mesh', 'Redundant emergency states', 'Secure audit telemetry'],
  },
] as const

const workflowSteps = [
  'Pre-op planning with imaging inputs',
  'Robot calibration and sterile handoff',
  'AI-assisted surgical guidance',
  'Live safety monitoring and telemetry',
]

export default function HealthcareDeepSection() {
  const [activeFeature, setActiveFeature] = useState<(typeof focusFeatures)[number]['id']>('precision')

  const selected = useMemo(
    () => focusFeatures.find((feature) => feature.id === activeFeature) ?? focusFeatures[0],
    [activeFeature],
  )

  return (
    <SectionWrapper
      id="healthcare"
      eyebrow="Healthcare Robotics"
      title="Medical Surgical Robotic Arm, Reimagined"
      subtitle="A dedicated surgical robotics stack designed for precision interventions, AI guidance, and dependable clinical safety."
    >
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div variants={fadeIn} className="space-y-4">
          {workflowSteps.map((step, index) => (
            <Card key={step} className="p-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-sm font-semibold text-accent">
                  0{index + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100">{step}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Structured to keep the surgical workflow synchronized from imaging intake to procedure completion.
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        <motion.div variants={fadeIn} className="grid gap-5">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            <p className="mb-3 text-sm text-slate-300">Feature Control Panel</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {focusFeatures.map((feature) => (
                <Button
                  key={feature.id}
                  variant={activeFeature === feature.id ? 'glow' : 'secondary'}
                  className="justify-start"
                  onClick={() => setActiveFeature(feature.id)}
                >
                  {feature.label}
                </Button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-accent/25 bg-background/55 p-6 backdrop-blur-xl"
            >
              <h3 className="font-display text-2xl font-semibold text-slate-100">{selected.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">{selected.summary}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {selected.metrics.map((metric) => (
                  <div key={metric} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-200">
                    {metric}
                  </div>
                ))}
              </div>

              <div className="mt-6 h-52 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.92))] p-4">
                <div className="flex h-full items-center justify-center rounded-2xl border border-accent/15 bg-white/[0.03]">
                  <motion.div
                    className="h-28 w-28 rounded-full border border-accent/20 bg-accent/10"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
