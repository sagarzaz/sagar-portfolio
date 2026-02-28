"use client"

import { motion } from "framer-motion"
import {
  cardVariants,
  BASE_TRANSITION,
  REDUCED_TRANSITION,
} from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

type MotionCardProps = {
  index?: number
  className?: string
  children: React.ReactNode
  /** Use for project cards - scale 1.03, shadow, border glow on hover */
  interactive?: boolean
}

export function MotionCard({
  index = 0,
  className,
  children,
  interactive = true,
}: MotionCardProps) {
  const reduced = useReducedMotion()

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px", amount: 0.1 }}
      custom={index}
      transition={reduced ? REDUCED_TRANSITION : undefined}
      whileHover={
        interactive && !reduced
          ? {
              scale: 1.03,
              boxShadow:
                "0 8px 30px rgba(99,102,241,0.15), 0 0 0 1px rgba(99,102,241,0.2)",
              transition: BASE_TRANSITION,
            }
          : undefined
      }
      className={cn(
        "group glass flex flex-col rounded-xl p-6",
        interactive && "cursor-default",
        className
      )}
      style={
        interactive && !reduced
          ? { boxShadow: "0 0 0 1px rgba(255,255,255,0.08)" }
          : undefined
      }
    >
      {children}
    </motion.article>
  )
}
