import Button from '../components/Button'
import Section from '../components/Section'

export default function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Request a Robotics Demo"
      subtitle="Share your goals and our team will design a deployment roadmap tailored to your institution."
    >
      <form className="glass-panel neon-border grid gap-4 rounded-2xl p-6 md:grid-cols-2">
        <label className="text-sm text-slate-300">
          Full Name
          <input
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-slate-100 outline-none transition focus:border-accent"
            type="text"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm text-slate-300">
          Work Email
          <input
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-slate-100 outline-none transition focus:border-accent"
            type="email"
            placeholder="you@company.com"
          />
        </label>
        <label className="text-sm text-slate-300">
          Organization Type
          <select className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-slate-100 outline-none transition focus:border-accent">
            <option>Hospital / Clinic</option>
            <option>School / University</option>
            <option>Lab / Research Center</option>
            <option>Other</option>
          </select>
        </label>
        <label className="text-sm text-slate-300">
          Interest Area
          <select className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-slate-100 outline-none transition focus:border-accent">
            <option>Surgical Robotics</option>
            <option>STEM Robotics Education</option>
            <option>Wet Lab Automation</option>
            <option>Ambassador Program</option>
          </select>
        </label>
        <label className="text-sm text-slate-300 md:col-span-2">
          Project Details
          <textarea
            rows={4}
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-slate-100 outline-none transition focus:border-accent"
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
