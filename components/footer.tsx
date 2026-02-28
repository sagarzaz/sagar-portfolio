import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-sm text-muted-foreground">
          {"Built with Next.js & Tailwind CSS"}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/sagar--k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:shobhasagar299@gmail.com"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Send email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground/50">
          {`\u00A9 ${new Date().getFullYear()} Sagar K`}
        </p>
      </div>
    </footer>
  )
}
