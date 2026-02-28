"use client"

import { motion } from "framer-motion"
import {
  sectionHeaderVariants,
  underlineVariants,
  REDUCED_TRANSITION,
} from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  code: string
  title: string
  description?: string
  className?: string
  /** Show animated gradient underline under title */
  showUnderline?: boolean
}

export function SectionHeading({
  code,
  title,
  description,
  className,
  showUnderline = false,
}: SectionHeadingProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      variants={reduced ? undefined : sectionHeaderVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={reduced ? REDUCED_TRANSITION : undefined}
      className={cn("mb-16 text-center", className)}
    >
      <div className="relative inline-block">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        {showUnderline && !reduced && (
          <motion.span
            variants={underlineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left rounded-full bg-gradient-to-r from-primary via-accent to-primary"
          />
        )}
      </div>
      <span className="mt-2 block font-mono text-sm text-primary">
        {code}
      </span>
      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  )
}
