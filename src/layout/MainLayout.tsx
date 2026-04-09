import { type ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div id="top" className="min-h-screen bg-background text-slate-200">
      <Navbar />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  )
}
