"use client"

import { motion } from "framer-motion"
import { MotionSection, SectionHeading } from "@/components/motion"
import { Briefcase, Award, Users } from "lucide-react"
import {
  staggeredChildrenVariants,
  STAGGER,
  REDUCED_TRANSITION,
} from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const timelineItems = [
  {
    icon: Briefcase,
    type: "Internship",
    title: "Trainee – Cybersecurity Foundation",
    org: "Networkz Systems",
    date: "Apr 2025 – May 2025",
    description:
      "Completed hands-on cybersecurity program. Applied real-world threat models and protection strategies; built foundation for secure-by-design thinking.",
    tags: ["Cybersecurity", "Threat Models", "Hands-on Training"],
  },
  {
    icon: Award,
    type: "Certification",
    title: "Data Analytics",
    org: "CertNexus / Pearson",
    date: "Jul 2025",
    description:
      "Foundational course in data collection, analysis, visualization, and interpretation—applied mindset for data-driven product decisions.",
    tags: ["Data Analysis", "Visualization", "Interpretation"],
  },
  {
    icon: Award,
    type: "Certification",
    title: "Deploying Cloud-Native AWS",
    org: "Microsoft OnWingspan",
    date: "Jan 2025",
    description:
      "Deployed scalable cloud-native applications using AWS services. Gained practical deployment and infrastructure awareness.",
    tags: ["AWS", "Cloud", "Deployment"],
  },
  {
    icon: Award,
    type: "Certification",
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    org: "Microsoft",
    date: "Aug 2024",
    description:
      "Foundational AI concepts and Azure services—machine learning, computer vision. Informs how I integrate AI into products.",
    tags: ["AI", "Azure", "ML"],
  },
  {
    icon: Award,
    type: "Certification",
    title: "Front-End Application with React",
    org: "ICT Academy of Kerala",
    date: "Jan 2025",
    description:
      "Built responsive, component-based web applications. Core of my frontend stack today.",
    tags: ["React", "Responsive", "Components"],
  },
  {
    icon: Users,
    type: "Leadership",
    title: "Dream Day Coordinators – Project Lead",
    org: "Christ College (Autonomous), Irinjalakuda",
    date: "2025",
    description:
      "Led team to build venue and caterer discovery platform. Managed coding and delivery; validated by department faculty for innovation and teamwork.",
    tags: ["Leadership", "Team Delivery", "Product"],
  },
]

const typeStyles: Record<string, string> = {
  Internship: "border-[#22D3EE]/50 bg-[#22D3EE]/10 text-[#22D3EE]",
  Certification: "border-amber-500/50 bg-amber-500/10 text-amber-400",
  Leadership: "border-blue-500/50 bg-blue-500/10 text-blue-400",
}

export function ExperienceSection() {
  const reduced = useReducedMotion()

  return (
    <MotionSection id="experience" maxWidth="4xl">
      <SectionHeading
        code={"// milestones"}
        title="Experience & Credentials"
        description="Applied knowledge across cybersecurity, cloud, AI, and frontend—with demonstrated execution."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px", amount: 0.1 }}
        variants={
          reduced
            ? undefined
            : {
                visible: {
                  transition: {
                    staggerChildren: STAGGER.slow,
                    delayChildren: 0.1,
                  },
                },
              }
        }
        className="relative"
      >
        <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

        {timelineItems.map((item, idx) => {
          const Icon = item.icon
          const isLeft = idx % 2 === 0
          const cardContent = (
            <div className="glass max-w-sm rounded-xl p-5">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${typeStyles[item.type]}`}
                >
                  {item.type}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.date}
                </span>
              </div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mb-2 text-sm text-primary">{item.org}</p>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )

          return (
            <motion.div
              key={item.title + item.date}
              variants={reduced ? undefined : staggeredChildrenVariants}
              transition={reduced ? REDUCED_TRANSITION : undefined}
              className="relative mb-8 flex items-start"
            >
              <div className="flex w-full gap-6 md:hidden">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                {cardContent}
              </div>

              <div className="hidden w-full md:flex">
                {isLeft ? (
                  <>
                    <div className="flex w-1/2 justify-end pr-8">
                      {cardContent}
                    </div>
                    <div className="relative z-10 flex h-12 w-12 shrink-0 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="w-1/2" />
                  </>
                ) : (
                  <>
                    <div className="w-1/2" />
                    <div className="relative z-10 flex h-12 w-12 shrink-0 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex w-1/2 justify-start pl-8">
                      {cardContent}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </MotionSection>
  )
}
