"use client"

import { motion } from "framer-motion"
import { MotionSection, SectionHeading } from "@/components/motion"
import {
  staggeredChildrenVariants,
  STAGGER,
  REDUCED_TRANSITION,
} from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Python", "Flask", "REST APIs", "Pytest"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "SQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Voiceflow"],
  },
  {
    title: "Currently Exploring",
    skills: ["Next.js", "TypeScript", "AWS", "LLM Integration"],
  },
]

const positioningSentence =
  "Building toward full-stack depth—strong in React and Flask, expanding into scalable systems and AI-augmented workflows."

function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex cursor-default items-center rounded-lg border border-border bg-secondary px-3 py-1.5 font-mono text-sm text-secondary-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
      {skill}
    </span>
  )
}

export function SkillsSection() {
  const reduced = useReducedMotion()

  return (
    <MotionSection id="skills">
      <SectionHeading
        code={"// what I work with"}
        title="Technical Skills"
        description={positioningSentence}
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
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={reduced ? undefined : staggeredChildrenVariants}
            transition={reduced ? REDUCED_TRANSITION : undefined}
            className="glass rounded-xl p-6"
          >
            <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </MotionSection>
  )
}
