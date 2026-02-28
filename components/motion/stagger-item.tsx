"use client"

import { motion } from "framer-motion"
import { staggeredChildrenVariants, REDUCED_TRANSITION } from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

type StaggerItemProps = {
  className?: string
  children: React.ReactNode
}

export function StaggerItem({ className, children }: StaggerItemProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      variants={reduced ? undefined : staggeredChildrenVariants}
      transition={reduced ? REDUCED_TRANSITION : undefined}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
