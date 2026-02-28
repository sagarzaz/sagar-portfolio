"use client"

import { motion } from "framer-motion"
import { MotionSection, SectionHeading, MotionCard } from "@/components/motion"
import { FlaskConical } from "lucide-react"

const researchItems = [
  {
    icon: FlaskConical,
    title: "AgriMonNet – Lightweight DL for Agricultural Monitoring",
    area: "AI / Edge Deployment",
    description:
      "Co-authored research proposing a lightweight deep learning model for agricultural monitoring using satellite imagery. Focused on dual-task learning, time-aware attention, and optimized deployment for low-resource edge devices.",
    highlights: [
      "Dual-Task Learning",
      "Time-Aware Attention",
      "Edge Deployment",
      "Satellite Imagery",
    ],
    org: "Christ College (Autonomous), Irinjalakuda",
  },
]

export function ResearchSection() {
  return (
    <MotionSection>
      <SectionHeading
        code={"// exploration & innovation"}
        title="Research & Innovation"
        description="Advanced thinking and experimentation—beyond coursework."
      />

      <div className="grid gap-6 md:grid-cols-1 lg:mx-auto lg:max-w-3xl">
        {researchItems.map((item, idx) => {
          const Icon = item.icon
          return (
            <MotionCard key={item.title} index={idx} interactive>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />

              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {item.area}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mb-2 text-sm text-primary">{item.org}</p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-xs text-primary"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </MotionCard>
          )
        })}
      </div>
    </MotionSection>
  )
}
