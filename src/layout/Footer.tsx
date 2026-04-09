import { ArrowUpRight, FlaskConical, Globe2, GraduationCap } from 'lucide-react'
import Container from '../components/ui/Container'

const quickLinks = [
  { label: 'Why Robotics Matters', href: '#why' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Trusted By', href: '#trusted' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/70">
      <Container className="py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <a href="#top" className="inline-flex items-center">
              <img src="/logo.png" alt="Zerokost Robotics logo" className="h-14 w-auto object-contain" />
            </a>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
              T-Hub's main facility (Phase 2), Plot No 1/C, Sy No 83/1, Raidurgam Panmaktha, Hyderabad Knowledge City, Serilingampally, Hyderabad, Telangana 500081
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:justify-self-end">
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-slate-100">
                  <ArrowUpRight size={14} className="text-accent" />
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex gap-2 sm:justify-end">
              <button className="rounded-md border border-white/10 p-2 text-slate-300 transition hover:border-accent/40 hover:text-accent">
                <Globe2 size={16} />
              </button>
              <button className="rounded-md border border-white/10 p-2 text-slate-300 transition hover:border-accent/40 hover:text-accent">
                <GraduationCap size={16} />
              </button>
              <button className="rounded-md border border-white/10 p-2 text-slate-300 transition hover:border-accent/40 hover:text-accent">
                <FlaskConical size={16} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
