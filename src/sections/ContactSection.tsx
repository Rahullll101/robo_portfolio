import Button from '../components/Button'
import Section from '../components/Section'
import { ChevronDown } from 'lucide-react'

const fieldClassName =
  'mt-2 w-full rounded-xl border border-white/10 bg-background/70 px-3 py-2 text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-accent focus:bg-background/90'

const selectClassName =
  'mt-2 w-full appearance-none rounded-xl border border-white/10 bg-background/70 px-3 py-2 pr-10 text-slate-200 outline-none transition focus:border-accent focus:bg-background/90'

export default function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Request a Robotics Demo"
      subtitle="Share your goals and our team will design a deployment roadmap tailored to your institution."
    >
      <form className="glass-panel neon-border grid gap-4 rounded-2xl p-6 md:grid-cols-2">
        <label className="text-sm text-slate-400">
          Full Name
          <input
            className={fieldClassName}
            type="text"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm text-slate-400">
          Work Email
          <input
            className={fieldClassName}
            type="email"
            placeholder="you@company.com"
          />
        </label>
        <label className="text-sm text-slate-400">
          Organization Type
          <div className="relative mt-2">
            <select className={selectClassName} defaultValue="Hospital / Clinic">
              <option className="bg-background text-slate-200">Hospital / Clinic</option>
              <option className="bg-background text-slate-200">School / University</option>
              <option className="bg-background text-slate-200">Lab / Research Center</option>
              <option className="bg-background text-slate-200">Other</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          </div>
        </label>
        <label className="text-sm text-slate-400">
          Interest Area
          <div className="relative mt-2">
            <select className={selectClassName} defaultValue="Surgical Robotics">
              <option className="bg-background text-slate-200">Surgical Robotics</option>
              <option className="bg-background text-slate-200">Health Education Robotics Education</option>
              <option className="bg-background text-slate-200">Wet Lab Automation</option>
              <option className="bg-background text-slate-200">Ambassador Program</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          </div>
        </label>
        <label className="text-sm text-slate-400 md:col-span-2">
          Project Details
          <textarea
            rows={4}
            className={`${fieldClassName} min-h-32 resize-y`}
            placeholder="Tell us about your goals, timeline, and requirements..."
          />
        </label>
        <div className="md:col-span-2">
          <Button type="button">Send Request</Button>
        </div>
      </form>
    </Section>
  )
}
