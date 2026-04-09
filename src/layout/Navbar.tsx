import { Cpu } from 'lucide-react'
import Container from '../components/ui/Container'

const links = [
  { label: 'Domains', href: '#domains' },
  { label: 'Healthcare', href: '#healthcare' },
  { label: 'Build Solution', href: '#build' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-5">
        <a href="#top" className="inline-flex items-center gap-2 font-display text-base font-semibold text-slate-100">
          <Cpu size={18} className="text-accent" />
          Vectra Robotics
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-slate-100">
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  )
}
