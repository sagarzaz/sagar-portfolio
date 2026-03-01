"use client"

import { motion } from "framer-motion"
import { MotionSection, SectionHeading } from "@/components/motion"
import { Mail, MapPin, Send, FileText, ArrowUpRight } from "lucide-react"
import {
  staggeredChildrenVariants,
  STAGGER,
  REDUCED_TRANSITION,
} from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function ContactSection() {
  const reduced = useReducedMotion()

  return (
    <MotionSection id="contact" maxWidth="4xl">
      <SectionHeading
        code={"// let's connect"}
        title="Get In Touch"
        description="Open to internships and fresher roles. If you're hiring for product-minded developers who ship—let's talk."
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
        className="space-y-8"
      >
        <motion.div
          variants={reduced ? undefined : staggeredChildrenVariants}
          transition={reduced ? REDUCED_TRANSITION : undefined}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Let&apos;s build something together
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Have a role, project, or technical discussion in mind? I respond
                  within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:shobhasagar299@gmail.com"
                  className="flex items-center gap-3 rounded-lg p-3 text-foreground transition-colors hover:bg-secondary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium">Email</span>
                    <span className="text-xs text-muted-foreground">
                      shobhasagar299@gmail.com
                    </span>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-lg p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-foreground">
                      Location
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Thrissur, Kerala · Open to Remote & On-site
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-[#22D3EE]/30 bg-[#22D3EE]/10 p-3">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#22D3EE]" />
                <span className="text-sm text-[#22D3EE]">
                  Available for internships & fresher roles
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Send className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                Ready to connect?
              </h4>
              <p className="text-sm text-muted-foreground">
                Drop me an email or reach out on LinkedIn. I typically respond
                within 24 hours.
              </p>
              <div className="flex w-full flex-col gap-3">
                <motion.a
                  href="mailto:shobhasagar299@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground"
                  style={{ boxShadow: "0 0 24px rgba(99, 102, 241, 0.35)" }}
                  whileHover={
                    reduced ? undefined : { scale: 1.02, opacity: 0.95 }
                  }
                  whileTap={reduced ? undefined : { scale: 0.98 }}
                >
                  Send Email
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="https://sagar5361.sirv.com/portfolio/sagar_cv.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/80"
                  whileHover={reduced ? undefined : { scale: 1.02 }}
                  whileTap={reduced ? undefined : { scale: 0.98 }}
                >
                  <FileText className="h-4 w-4" />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={reduced ? undefined : staggeredChildrenVariants}
          transition={reduced ? REDUCED_TRANSITION : undefined}
          className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Hiring? I bring shipped projects, AI integration experience, and
            research depth. Worth a 30-minute conversation.
          </p>
          <motion.a
            href="mailto:shobhasagar299@gmail.com"
            className="mt-2 inline-flex items-center gap-1 font-semibold text-primary transition-colors hover:underline"
            whileHover={reduced ? undefined : { scale: 1.02 }}
            whileTap={reduced ? undefined : { scale: 0.98 }}
          >
            Schedule a technical chat
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </MotionSection>
  )
}
