"use client"

import { motion } from "framer-motion"
import { MotionSection, SectionHeading, MotionCard } from "@/components/motion"
import { Lightbulb, Cpu, Server, Zap } from "lucide-react"
import {
  staggeredChildrenVariants,
  STAGGER,
  REDUCED_TRANSITION,
} from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const learningItems = [
  {
    icon: Cpu,
    title: "AI Integration & LLMs",
    description:
      "Building on Azure AI and Gym X experience—exploring prompt engineering, RAG, and production LLM integration.",
    progress: 65,
  },
  {
    icon: Zap,
    title: "Real-Time & Scalable Systems",
    description:
      "WebSockets, event-driven design, and distributed patterns for high-throughput applications.",
    progress: 40,
  },
  {
    icon: Server,
    title: "Cloud-Native & Backend Depth",
    description:
      "Extending AWS deployment knowledge into microservices, message queues, and system design.",
    progress: 45,
  },
  {
    icon: Lightbulb,
    title: "System Design & Architecture",
    description:
      "Large-scale design principles, caching, database optimization—long-term engineering growth.",
    progress: 35,
  },
]

export function LearningSection() {
  const reduced = useReducedMotion()

  return (
    <MotionSection>
      <SectionHeading
        code={"// always growing"}
        title="Engineering Focus & Learning Trajectory"
        description="Evolving technical maturity—AI, system design, scalability, real-time systems."
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
                    delayChildren: 0.1,
                  },
                },
              }
        }
        className="grid gap-6 md:grid-cols-2"
      >
        {learningItems.map((item, idx) => {
          const Icon = item.icon
          return (
            <MotionCard key={item.title} index={idx} interactive>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="relative h-1.5 overflow-hidden rounded-full bg-secondary">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + idx * 0.1,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                />
              </div>
              <span className="mt-2 block text-right font-mono text-xs text-muted-foreground">
                {item.progress}%
              </span>
            </MotionCard>
          )
        })}
      </motion.div>
    </MotionSection>
  )
}
