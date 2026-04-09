import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Section from '../components/Section'

const posts = [
  {
    title: 'AI Co-Pilots in Surgical Robotics: What Changes in the Operating Room',
    category: 'Healthcare',
    date: 'Apr 2026',
  },
  {
    title: 'From Classroom to Prototype: STEM Robotics Pathways That Scale',
    category: 'Education',
    date: 'Mar 2026',
  },
  {
    title: 'Automating Wet Lab Pipelines Without Sacrificing Experimental Rigor',
    category: 'Lab Automation',
    date: 'Feb 2026',
  },
]

export default function BlogSection() {
  return (
    <Section
      id="blog"
      eyebrow="Insights"
      title="Robotics + AI Blog"
      subtitle="Research perspectives and applied engineering insights from our healthcare, education, and lab teams."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="group glass-panel neon-border rounded-2xl p-5"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-secondary">{post.category}</p>
            <h3 className="mt-3 font-display text-xl text-slate-100">{post.title}</h3>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
              <span>{post.date}</span>
              <span className="inline-flex items-center gap-1 text-accent transition group-hover:translate-x-1">
                Read
                <ArrowUpRight size={14} />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
