"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Mail, FileText } from "lucide-react"
import {
  heroStaggerVariants,
  glowVariants,
  floatVariants,
  REDUCED_TRANSITION,
} from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const techIcons = [
  { name: "React", x: 10, y: 20, delay: 0, duration: 6 },
  { name: "Node", x: 85, y: 15, delay: 0.5, duration: 7 },
  { name: "TS", x: 5, y: 70, delay: 1, duration: 5.5 },
  { name: "Next", x: 90, y: 65, delay: 1.5, duration: 6.5 },
  { name: "DB", x: 50, y: 85, delay: 2, duration: 7.5 },
]

export function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Animated gradient glow - opacity only, no layout shift */}
      {!reduced && (
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            variants={glowVariants}
            initial="animate"
            animate="animate"
            className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(99, 102, 241, 0.25), transparent 70%)",
            }}
          />
          <motion.div
            variants={glowVariants}
            initial="animate"
            animate="animate"
            className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(34, 211, 238, 0.15), transparent 70%)",
            }}
            transition={{ duration: 10, delay: 2 }}
          />
        </div>
      )}

      {/* Floating tech icons - GPU-friendly translateY only */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {techIcons.map((icon) => (
          <motion.div
            key={icon.name}
            variants={reduced ? undefined : floatVariants(8, icon.duration)}
            initial={reduced ? false : "animate"}
            animate={reduced ? false : "animate"}
            transition={
              reduced
                ? REDUCED_TRANSITION
                : { delay: icon.delay, duration: icon.duration }
            }
            className="absolute font-mono text-xs font-semibold text-muted-foreground/30"
            style={{ left: `${icon.x}%`, top: `${icon.y}%` }}
          >
            {icon.name}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Staggered hero content */}
        <motion.div
          initial="hidden"
          animate={reduced ? undefined : "visible"}
          variants={
            reduced
              ? undefined
              : {
                  visible: {
                    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
                  },
                }
          }
          className="space-y-4"
        >
          <motion.div
            variants={reduced ? undefined : heroStaggerVariants}
            initial="hidden"
            animate={reduced ? undefined : "visible"}
            custom={0}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#22D3EE]" />
            <span className="text-sm text-muted-foreground">
              Open to Internships & Opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={reduced ? undefined : heroStaggerVariants}
            initial="hidden"
            animate={reduced ? undefined : "visible"}
            custom={1}
            className="mb-2 text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl"
          >
            {"Hi, I'm "}
            <span className="text-gradient">Sagar K</span>
          </motion.h1>

          <motion.p
            variants={reduced ? undefined : heroStaggerVariants}
            initial="hidden"
            animate={reduced ? undefined : "visible"}
            custom={2}
            className="mb-4 font-mono text-xl text-primary md:text-2xl"
          >
            Full-stack developer · Product-minded builder
          </motion.p>

          <motion.p
            variants={reduced ? undefined : heroStaggerVariants}
            initial="hidden"
            animate={reduced ? undefined : "visible"}
            custom={3}
            className="mx-auto mb-10 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground"
          >
            Final-year CS student who ships. Led teams, integrated LLMs into
            production apps, and co-authored research on edge AI—while building
            toward scalable, user-first products.
          </motion.p>

          <motion.div
            variants={reduced ? undefined : heroStaggerVariants}
            initial="hidden"
            animate={reduced ? undefined : "visible"}
            custom={4}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground"
              style={{ boxShadow: "0 0 24px rgba(99, 102, 241, 0.35)" }}
              whileHover={reduced ? undefined : { scale: 1.02, opacity: 0.95 }}
              whileTap={reduced ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
              whileHover={reduced ? undefined : { scale: 1.02 }}
              whileTap={reduced ? undefined : { scale: 0.98 }}
            >
              <FileText className="h-4 w-4" />
              Resume
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
              whileHover={reduced ? undefined : { scale: 1.02 }}
              whileTap={reduced ? undefined : { scale: 0.98 }}
            >
              <Github className="h-4 w-4" />
              GitHub
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
              whileHover={reduced ? undefined : { scale: 1.02 }}
              whileTap={reduced ? undefined : { scale: 0.98 }}
            >
              <Mail className="h-4 w-4" />
              Contact
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs">Scroll</span>
          <motion.div
            animate={reduced ? {} : { y: [0, 4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
