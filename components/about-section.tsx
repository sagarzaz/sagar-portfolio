"use client"

import { motion } from "framer-motion"
import { MotionSection, SectionHeading } from "@/components/motion"
import { Code2, Target, Users, BookOpen } from "lucide-react"
import {
  staggeredChildrenVariants,
  STAGGER,
  REDUCED_TRANSITION,
} from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const personalityItems = [
  { icon: Code2, label: "Ships while learning" },
  { icon: Target, label: "Product-first mindset" },
  { icon: Users, label: "Collaborative by default" },
  { icon: BookOpen, label: "Structured learner" },
]

export function AboutSection() {
  const reduced = useReducedMotion()

  return (
    <MotionSection id="about">
      <SectionHeading
        code={"// the person behind the code"}
        title="About Me"
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
                    staggerChildren: STAGGER.default,
                    delayChildren: 0.15,
                  },
                },
              }
        }
        className="grid items-start gap-12 md:grid-cols-2"
      >
        <motion.div
          variants={reduced ? undefined : staggeredChildrenVariants}
          transition={reduced ? REDUCED_TRANSITION : undefined}
          className="space-y-5"
        >
          <p className="text-lg leading-relaxed text-foreground">
            Final-year BSc Computer Science student from Kerala. I build things
            that work—and think about who they work for.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Led a team to ship Dream Day Coordinators, integrated LLMs into Gym X,
            and co-authored AgriMonNet. I care about clean code, clear UX, and
            systems that scale—not just features.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Ambitious but grounded. I seek teams where I can contribute from day
            one, learn from senior engineers, and grow into a full-stack role
            that matters.
          </p>
        </motion.div>

        <motion.div
          variants={reduced ? undefined : staggeredChildrenVariants}
          transition={reduced ? REDUCED_TRANSITION : undefined}
          className="space-y-6"
        >
          <div className="glass rounded-xl p-6">
            <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
              Quick Facts
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {personalityItems.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-lg bg-secondary p-3 transition-colors hover:bg-secondary/80"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="glass rounded-xl p-6">
            <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
              Journey
            </h3>
            <div className="space-y-3">
              {[
                { year: "2023", event: "Started CS degree" },
                {
                  year: "2024",
                  event: "Azure AI certified; first React app",
                },
                {
                  year: "2025",
                  event:
                    "Cybersecurity internship; AWS; led Dream Day; AgriMonNet",
                },
              ].map((milestone) => (
                <div
                  key={milestone.year}
                  className="flex items-center gap-4"
                >
                  <span className="w-12 shrink-0 font-mono text-sm font-semibold text-primary">
                    {milestone.year}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-sm text-muted-foreground">
                    {milestone.event}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </MotionSection>
  )
}
