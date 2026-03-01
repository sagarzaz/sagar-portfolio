"use client"

import { motion } from "framer-motion"
import { MotionSection, SectionHeading } from "@/components/motion"
import { Github, Linkedin, Mail } from "lucide-react"
import {
  staggeredChildrenVariants,
  STAGGER,
  REDUCED_TRANSITION,
} from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

const githubGrid = Array.from({ length: 52 * 7 }, (_, i) => {
  const rand = seededRandom(i * 37 + 7)
  if (rand > 0.7) return 3
  if (rand > 0.5) return 2
  if (rand > 0.3) return 1
  return 0
})

const levelColors = [
  "bg-secondary",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/70",
]

export function SocialSection() {
  const reduced = useReducedMotion()

  return (
    <MotionSection>
      <SectionHeading
        code={"// developer presence"}
        title="Social & Contributions"
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
        className="space-y-8"
      >
        <motion.div
          variants={reduced ? undefined : staggeredChildrenVariants}
          transition={reduced ? REDUCED_TRANSITION : undefined}
          className="glass overflow-hidden rounded-xl p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-foreground" />
              <span className="font-semibold text-foreground">
                GitHub Contributions
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              847 contributions this year
            </span>
          </div>
          <div className="overflow-x-auto">
            <div
              className="grid min-w-[700px] grid-flow-col grid-rows-7 gap-0.5"
              aria-label="GitHub contribution graph placeholder"
            >
              {githubGrid.map((level, idx) => (
                <div
                  key={idx}
                  className={`h-2.5 w-2.5 rounded-sm ${levelColors[level]} transition-colors`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={reduced ? undefined : staggeredChildrenVariants}
          transition={reduced ? REDUCED_TRANSITION : undefined}
          className="grid gap-4 md:grid-cols-3"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass group flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-foreground/20"
            whileHover={reduced ? undefined : { scale: 1.02, y: -2 }}
            whileTap={reduced ? undefined : { scale: 0.98 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
              <Github className="h-6 w-6" />
            </div>
            <div>
              <span className="block font-semibold text-foreground">GitHub</span>
              <span className="text-sm text-muted-foreground">
                @sagarzaz
              </span>
            </div>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/sagar--k"
            target="_blank"
            rel="noopener noreferrer"
            className="glass group flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-foreground/20"
            whileHover={reduced ? undefined : { scale: 1.02, y: -2 }}
            whileTap={reduced ? undefined : { scale: 0.98 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-[#0077B5] group-hover:text-foreground">
              <Linkedin className="h-6 w-6" />
            </div>
            <div>
              <span className="block font-semibold text-foreground">LinkedIn</span>
              <span className="text-sm text-muted-foreground">Sagar K</span>
            </div>
          </motion.a>

          <motion.a
            href="mailto:shobhasagar299@gmail.com"
            className="glass group flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-foreground/20"
            whileHover={reduced ? undefined : { scale: 1.02, y: -2 }}
            whileTap={reduced ? undefined : { scale: 0.98 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <span className="block font-semibold text-foreground">Email</span>
              <span className="text-sm text-muted-foreground">
                shobhasagar299@gmail.com
              </span>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </MotionSection>
  )
}
