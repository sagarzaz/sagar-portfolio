"use client"

import { MotionSection, SectionHeading, MotionCard } from "@/components/motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Gym X",
    summary:
      "Gym management platform with BMI calculators and LLM-powered features. Built for Vidya Engineering College.",
    details:
      "Problem: Gyms needed simple onboarding and personalized guidance. Solution: Responsive app with BMI tools and LLM recommendations. Challenge: Balanced response quality with latency—iterated on prompts and fallbacks. Growth: First production LLM integration; product thinking over pure engineering.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "LLM"],
    status: "Shipped" as const,
    github: "#",
    live: "#",
  },
  {
    title: "Dream Day Coordinators",
    summary:
      "Venue and caterer discovery platform by location. Led development; faculty-validated for innovation.",
    details:
      "Problem: Event planners couldn't find and compare venues in one place. Solution: Location-based platform with filtering. Led coding and delivery. Challenge: Scope management with a small team—prioritized core flows. Growth: First leadership role; technical work + team coordination.",
    tech: ["HTML", "CSS"],
    status: "Shipped" as const,
    github: "#",
    live: "#",
  },
]

const statusStyles = {
  Shipped: "border-[#22D3EE]/50 bg-[#22D3EE]/10 text-[#22D3EE]",
  Building: "border-[#22D3EE]/50 bg-[#22D3EE]/10 text-[#22D3EE]",
  Planned: "border-blue-500/50 bg-blue-500/10 text-blue-400",
}

export function ProjectsSection() {
  return (
    <MotionSection id="projects">
      <SectionHeading
        code={"// featured work"}
        title="Featured Projects"
        description="Shipped projects with clear problem-solution framing and engineering depth."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <MotionCard key={project.title} index={idx} interactive>
            <div className="mb-4 flex items-center justify-between">
              <span
                className={`rounded-full border px-3 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
              {project.details}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </MotionCard>
        ))}
      </div>
    </MotionSection>
  )
}
