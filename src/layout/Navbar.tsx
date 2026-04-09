import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '../components/ui/Container'

const links = [
  { label: 'Domains', href: '#domains' },
  { label: 'Healthcare', href: '#healthcare' },
  { label: 'Labs', href: '#labs' },
  { label: 'Live Training', href: '#live-training' },
  { label: 'Build Solution', href: '#build' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <Container className="relative flex h-20 items-center justify-between gap-5">
        <a href="#top" className="inline-flex shrink-0 items-center" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Zerokost Robotics logo" className="h-14 w-auto object-contain" />
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-slate-100">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] p-2 text-slate-200 transition hover:border-accent/40 hover:text-accent md:hidden"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {isMobileMenuOpen ? (
          <nav className="absolute left-0 right-0 top-[calc(100%-1px)] border-b border-white/10 bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
            <div className="grid gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-lg border border-transparent px-3 py-2 text-sm text-slate-300 transition hover:border-white/10 hover:bg-white/[0.04] hover:text-slate-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  )
}
