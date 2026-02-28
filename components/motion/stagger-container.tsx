"use client"

import { motion } from "framer-motion"
import {
  staggeredChildrenVariants,
  STAGGER,
  REDUCED_TRANSITION,
} from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

type StaggerContainerProps = {
  className?: string
  children: React.ReactNode
  /** Stagger delay between children */
  stagger?: number
}

export function StaggerContainer({
  className,
  children,
  stagger = STAGGER.default,
}: StaggerContainerProps) {
  const reduced = useReducedMotion()

  return (
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
                  staggerChildren: stagger,
                  delayChildren: 0.1,
                },
              },
            }
      }
      transition={reduced ? REDUCED_TRANSITION : undefined}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
