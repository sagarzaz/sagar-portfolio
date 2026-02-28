"use client"

import { motion } from "framer-motion"
import {
  sectionVariants,
  SECTION_TRANSITION,
  REDUCED_TRANSITION,
} from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

type MotionSectionProps = {
  id?: string
  className?: string
  children: React.ReactNode
  /** Max width wrapper: 6xl (default), 4xl */
  maxWidth?: "4xl" | "6xl"
}

export function MotionSection({
  id,
  className,
  children,
  maxWidth = "6xl",
}: MotionSectionProps) {
  const reduced = useReducedMotion()

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px", amount: 0.05 }}
      variants={reduced ? undefined : sectionVariants}
      transition={reduced ? REDUCED_TRANSITION : SECTION_TRANSITION}
      className={cn("px-6 py-24", className)}
    >
      <div
        className={cn(
          "mx-auto",
          maxWidth === "4xl" ? "max-w-4xl" : "max-w-6xl"
        )}
      >
        {children}
      </div>
    </motion.section>
  )
}
