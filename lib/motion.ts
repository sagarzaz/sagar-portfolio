/**
 * Portfolio Motion System
 * System-driven animation architecture using Framer Motion.
 *
 * Philosophy: Intentional, hierarchical, brand-reinforcing, performance-conscious.
 * Uses transform and opacity only. Respects prefers-reduced-motion.
 */

import type { Variants, Transition } from "framer-motion"

/** Consistent easing - calm, product-focused */
export const EASING = {
  smooth: [0.32, 0.72, 0, 1] as const,
  gentle: [0.4, 0, 0.2, 1] as const,
  subtle: [0.25, 0.46, 0.45, 0.94] as const,
}

/** Base transition - used across all motion */
export const BASE_TRANSITION: Transition = {
  duration: 0.4,
  ease: EASING.smooth,
}

/** Section entrance - longer for scroll-triggered reveals */
export const SECTION_TRANSITION: Transition = {
  duration: 0.5,
  ease: EASING.gentle,
}

/** Stagger config - applied to grouped children only */
export const STAGGER = {
  fast: 0.05,
  default: 0.08,
  slow: 0.12,
}

/** Reduced motion fallback - instant or minimal */
export const REDUCED_TRANSITION: Transition = {
  duration: 0.01,
}

/** Section entrance variants - animates once on scroll */
export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: SECTION_TRANSITION,
  },
}

/** Section header (title + subtitle) - no stagger, single block */
export const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SECTION_TRANSITION, delay: 0 },
  },
}

/** Staggered children - for grids, lists */
export const staggeredChildrenVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...SECTION_TRANSITION,
      delay: i * STAGGER.default,
    },
  }),
}

/** Project/Interaction card - scale max 1.03, elevation, border glow */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...SECTION_TRANSITION,
      delay: i * STAGGER.default,
    },
  }),
}

/** Card hover - scale 1.03, elevation shadow, border glow */
export const cardHoverVariants = {
  rest: {
    scale: 1,
    boxShadow: "0 0 0 1px rgba(255,255,255,0.08)",
    transition: BASE_TRANSITION,
  },
  hover: {
    scale: 1.03,
    boxShadow:
      "0 8px 30px rgba(99,102,241,0.15), 0 0 0 1px rgba(99,102,241,0.2)",
    transition: BASE_TRANSITION,
  },
}

/** Button tap/hover feedback */
export const buttonVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: BASE_TRANSITION },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
}

/** Nav link - micro feedback */
export const navLinkVariants: Variants = {
  rest: { opacity: 1 },
  hover: { opacity: 0.9 },
  active: { opacity: 1 },
}

/** Hero stagger - controlled, not excessive */
export const heroStaggerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASING.gentle,
      delay: 0.1 + i * 0.08,
    },
  }),
}

/** Floating tech icons - GPU-friendly translateY only */
export const floatVariants = (
  offset = 8,
  duration = 6
): Variants => ({
  animate: {
    y: [0, -offset, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
})

/** Gradient glow - opacity pulse only (no layout shift) */
export const glowVariants: Variants = {
  animate: {
    opacity: [0.15, 0.25, 0.15],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

/** Accent underline - for headings */
export const underlineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      ...SECTION_TRANSITION,
      delay: 0.3,
    },
  },
}

/** Slow-moving brand gradient - subtle accent (opacity-based for performance) */
export const brandGradientVariants: Variants = {
  animate: {
    opacity: [0.6, 0.9, 0.6],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}
