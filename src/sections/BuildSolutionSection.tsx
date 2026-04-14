import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { fadeIn, staggerContainer } from '../lib/animations'

type Industry = 'Healthcare' | 'Education' | 'Lab'

type Feature = 'AI' | 'Sensors' | 'Automation'

const industryBase = {
  Healthcare: {
    profile: 'Clinical-grade robotic platform for guided surgical precision.',
    modules: ['Surgical arm chassis', 'Operating room dashboard', 'Sterile workflow integration'],
  },
  Education: {
    profile: 'Modular teaching robotics stack for Health Education curriculum and simulation Diagnostic Labs.',
    modules: ['Learning kit hardware', 'Mentor mode software', 'Progress analytics panel'],
  },
  Lab: {
    profile: 'High-throughput chemistry automation platform with reliable sample orchestration.',
    modules: ['Sample handling rail', 'Protocol engine', 'Lab run monitoring interface'],
  },
}

export default function BuildSolutionSection() {
  const [industry, setIndustry] = useState<Industry>('Healthcare')
  const [features, setFeatures] = useState<Feature[]>(['AI', 'Automation'])

  const steps = ['Select industry', 'Enable features', 'Review solution']

  const toggleFeature = (feature: Feature) => {
    setFeatures((prev) =>
      prev.includes(feature) ? prev.filter((item) => item !== feature) : [...prev, feature],
    )
  }

  const recommendation = useMemo(() => {
    const base = industryBase[industry]
    const featureSummary = features.length
      ? `Enabled enhancements: ${features.join(', ')}.`
      : 'No enhancements selected yet.'

    const notes: Record<Feature, string> = {
      AI: 'AI copilot adds adaptive planning and anomaly guidance.',
      Sensors: 'Sensor fusion improves environment and operation awareness.',
      Automation: 'Automation orchestrates repeatable procedures end-to-end.',
    }

    const selectedNotes = features.map((feature) => notes[feature])
    return {
      ...base,
      featureSummary,
      selectedNotes,
    }
  }, [industry, features])

  const progress = 33 + features.length * 16 + (industry === 'Healthcare' ? 10 : industry === 'Education' ? 6 : 8)

  return (
    <SectionWrapper
      id="build"
      eyebrow="Interactive"
      title="Build Your Robot Solution"
      subtitle="Configure a robotics stack by choosing your industry and capability bundle."
    >
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div variants={fadeIn} className="space-y-4">
          <Card className="p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Progress</p>
            <div className="mt-3 flex items-center gap-2">
              {steps.map((step, index) => (
                <div key={step} className="flex flex-1 items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${index === 0 ? 'bg-accent' : index === 1 ? 'bg-secondary' : 'bg-highlight'}`} />
                  <div className="text-xs text-slate-300">{step}</div>
                  {index < steps.length - 1 ? <div className="h-px flex-1 bg-white/10" /> : null}
                </div>
              ))}
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-highlight"
                initial={{ width: '34%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              />
            </div>
          </Card>

          <Card className="p-5">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
              Select Industry
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Healthcare', 'Education', 'Lab'] as Industry[]).map((option) => (
                <Button
                  key={option}
                  variant={industry === option ? 'glow' : 'secondary'}
                  className="w-full px-2"
                  onClick={() => setIndustry(option)}
                >
                  {option}
                </Button>
              ))}
            </div>

            <p className="mt-6 mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">Enable Features</p>
            <div className="space-y-2">
              {(['AI', 'Sensors', 'Automation'] as Feature[]).map((feature) => (
                <label
                  key={feature}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200 transition hover:border-accent/45"
                >
                  <input
                    type="checkbox"
                    checked={features.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                    className="h-4 w-4 accent-accent"
                  />
                  {feature}
                </label>
              ))}
            </div>
          </Card>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${industry}-${features.join('-')}`}
            variants={fadeIn}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid gap-5"
          >
            <Card className="p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-secondary">Generated Blueprint</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-slate-100">{industry} Robotics Suite</h3>
              <p className="mt-3 text-sm text-slate-300">{recommendation.profile}</p>

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {recommendation.modules.map((module) => (
                  <div key={module} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-200">
                    {module}
                  </div>
                ))}
              </div>

              <p className="mt-5 rounded-lg border border-secondary/25 bg-secondary/10 p-3 text-sm text-slate-200">
                {recommendation.featureSummary}
              </p>
            </Card>

            <Card className="overflow-hidden p-0">
              <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="border-b border-white/10 bg-white/[0.03] p-5 lg:border-b-0 lg:border-r">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Dynamic Preview</p>
                  <h4 className="mt-2 font-display text-xl text-slate-100">{industry} configuration</h4>
                  <div className="mt-4 space-y-2 text-sm text-slate-300">
                    {recommendation.selectedNotes.map((note) => (
                      <p key={note} className="rounded-lg border border-white/10 bg-background/50 px-3 py-2">
                        {note}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="relative min-h-64 overflow-hidden bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.95),rgba(15,23,42,0.96))] p-5">
                  <motion.div
                    className="absolute left-8 top-8 h-24 w-24 rounded-full border border-accent/20 bg-accent/10"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute right-10 top-16 h-36 w-36 rounded-full border border-primary/20 bg-primary/10"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="relative z-10 flex h-full flex-col justify-end">
                    <div className="rounded-2xl border border-white/10 bg-background/75 p-4 backdrop-blur-xl">
                      <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Solution Score</p>
                      <p className="mt-2 text-3xl font-semibold text-slate-100">{progress}%</p>
                      <p className="mt-1 text-sm text-slate-300">Aligned to your selected capabilities and deployment context.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  )
}
