import { lazy, Suspense } from 'react'
import HeroSection from '../sections/HeroSection'
import MainLayout from '../layout/MainLayout'

const CoreDomainsSection = lazy(() => import('../sections/CoreDomainsSection'))
const WhyRoboticsMatterSection = lazy(() => import('../sections/WhyRoboticsMatterSection'))
const EcosystemSection = lazy(() => import('../sections/EcosystemSection'))
const TrustedBySection = lazy(() => import('../sections/TrustedBySection'))
const LabsSection = lazy(() => import('../sections/LabsSection'))
const LiveTrainingSection = lazy(() => import('../sections/LiveTrainingSection'))
const HealthcareDeepSection = lazy(() => import('../sections/HealthcareDeepSection'))
const ProductsSection = lazy(() => import('../sections/ProductsSection'))
const TechnologySection = lazy(() => import('../sections/TechnologySection'))
const BuildSolutionSection = lazy(() => import('../sections/BuildSolutionSection'))
const UseCasesSection = lazy(() => import('../sections/UseCasesSection'))
const AboutSection = lazy(() => import('../sections/AboutSection'))
const BlogSection = lazy(() => import('../sections/BlogSection'))
const ContactSection = lazy(() => import('../sections/ContactSection'))

function LoadingSection() {
  return <div className="px-6 py-8 text-center text-sm text-slate-400">Loading section...</div>
}

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <Suspense fallback={<LoadingSection />}>
        <WhyRoboticsMatterSection />
        <CoreDomainsSection />
        <EcosystemSection />
        <TrustedBySection />
        <LabsSection />
        <LiveTrainingSection />
        <HealthcareDeepSection />
        <ProductsSection />
        <TechnologySection />
        <BuildSolutionSection />
        <UseCasesSection />
        <AboutSection />
        <BlogSection />
        <ContactSection />
      </Suspense>
    </MainLayout>
  )
}
