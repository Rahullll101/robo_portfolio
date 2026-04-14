import { motion } from 'framer-motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import { fadeIn, staggerContainer } from '../lib/animations'

type TeamTrack = {
  title: string
  image: string
  points: string[]
}

const teamTracks: TeamTrack[] = [
  {
    title: 'Electrical Engineering',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    points: [
      'Basic circuit design and wiring practices',
      'Power supply and battery safety checks',
      'Motor driver setup for beginner robots',
    ],
  },
  {
    title: 'Mechanical Engineering',
    image: 'https://foa-media.arch.hku.hk/media/upload/2020/07/robotic-fabrication-laboratory-1.jpg',
    points: [
      'Early concept sketches and simple CAD',
      'Chassis design for stability and balance',
      'Rapid prototyping for robot parts',
    ],
  },
  {
    title: 'Embedded AI',
    image:
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1400&q=80',
    points: [
      'Microcontroller basics for edge devices',
      'Simple sensor data processing',
      'Intro to tiny ML model deployment',
    ],
  },
  {
    title: 'IT Software Development',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80',
    points: [
      'Version control and clean code workflow',
      'Robot dashboard UI fundamentals',
      'API basics for telemetry and control',
    ],
  },
  {
    title: 'AI/ML Deep Tech',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80',
    points: [
      'Data collection and labeling workflow',
      'Beginner model training pipeline',
      'Model evaluation with simple metrics',
    ],
  },
]

export default function LabsSection() {
  return (
    <SectionWrapper
      id="labs"
      eyebrow="Diagnostic Labs"
      title="Industries We Serve"
      subtitle="Core tracks across robotics development, shown with demo visuals and practical focus areas."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 md:grid-cols-2"
      >
        {teamTracks.map((track, index) => (
          <motion.article
            key={track.title}
            variants={fadeIn}
            className="relative overflow-hidden rounded-2xl border border-white/15"
          >
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -left-12 -top-10 h-36 w-36 rounded-full bg-primary/30 blur-3xl"
              animate={{ scale: [1, 1.16, 1], x: [0, 8, 0], y: [0, 6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: index * 0.25 }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-14 right-2 h-44 w-44 rounded-full bg-accent/25 blur-3xl"
              animate={{ scale: [1, 1.1, 1], x: [0, -10, 0], y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 + index * 0.2 }}
            />

            <div
              className="relative min-h-80 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.35), rgba(15, 23, 42, 0.85)), url(${track.image})`,
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(37,99,235,0.24),transparent_40%),radial-gradient(circle_at_82%_84%,rgba(34,211,238,0.2),transparent_42%)]" />
            </div>

            <div className="absolute inset-0 p-6 md:p-7">
              <h3 className="font-display text-2xl font-semibold text-slate-100 md:text-3xl">{track.title}</h3>
              <ul className="mt-5 space-y-3 text-base leading-relaxed text-slate-100 md:text-lg">
                {track.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
