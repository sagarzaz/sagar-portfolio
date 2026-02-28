"use client"

import { motion } from "framer-motion"
import { MotionSection, SectionHeading } from "@/components/motion"
import { CheckCircle2 } from "lucide-react"
import {
  staggeredChildrenVariants,
  STAGGER,
  REDUCED_TRANSITION,
} from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const bullets = [
  "Adapts quickly—shipped projects across web, AI, and cloud in parallel with coursework.",
  "Executes end-to-end—from problem definition to deployment, with faculty-validated delivery.",
  "Thinks in systems—research in edge AI and dual-task learning shows structured technical reasoning.",
  "Leverages AI productively—LLM integration in Gym X, Azure AI certified, building with modern tooling.",
]

export function WhyHireMeSection() {
  const reduced = useReducedMotion()

  return (
    <MotionSection maxWidth="4xl">
      <SectionHeading
        code={"// why interview me"}
        title="Why Hire Me as a Fresher"
        description="Four reasons to shortlist me despite limited industry experience."
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
                    staggerChildren: STAGGER.fast,
                    delayChildren: 0.1,
                  },
                },
              }
        }
        className="space-y-4"
      >
        {bullets.map((bullet, idx) => (
          <motion.div
            key={idx}
            variants={reduced ? undefined : staggeredChildrenVariants}
            transition={reduced ? REDUCED_TRANSITION : undefined}
            className="glass flex items-start gap-4 rounded-xl p-5"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm leading-relaxed text-foreground md:text-base">
              {bullet}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </MotionSection>
  )
}
