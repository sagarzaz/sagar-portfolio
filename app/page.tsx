import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { WhyHireMeSection } from "@/components/why-hire-me-section"
import { Footer } from "@/components/footer"

const LearningSection = dynamic(
  () => import("@/components/learning-section").then((m) => ({ default: m.LearningSection })),
  { ssr: true }
)

const ResearchSection = dynamic(
  () => import("@/components/research-section").then((m) => ({ default: m.ResearchSection })),
  { ssr: true }
)

const AboutSection = dynamic(
  () => import("@/components/about-section").then((m) => ({ default: m.AboutSection })),
  { ssr: true }
)

const SocialSection = dynamic(
  () => import("@/components/social-section").then((m) => ({ default: m.SocialSection })),
  { ssr: true }
)

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <LearningSection />
      <ExperienceSection />
      <ResearchSection />
      <AboutSection />
      <WhyHireMeSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
