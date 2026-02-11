import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "./AnimatedSection";

const PROJECTS = [
  {
    title: "Clean Studio",
    tech: ["React.js", "TypeScript"],
    description: "Core web application for Kakeibo focused on clean architecture, scalable UI systems, and structured authentication flows.",
  },
  {
    title: "Pulse Service Management",
    tech: ["React.js", "Styled Components", "Formik"],
    description: "8-page service app built in 2 months, increasing sign-ups by ~20%.",
  },
  {
    title: "InovTech Web App",
    tech: ["Next.js", "Styled Components", "Chakra UI"],
    description: "SEO-optimized app using SSR, SSG, and CSR; integrated volunteer application API increasing accessibility by ~20%.",
  },
  {
    title: "Aggies Bar & Grill",
    tech: ["Next.js", "Styled Components", "Formik"],
    description: "SEO-focused restaurant app with customer contact and feedback features.",
  },
  {
    title: "Ogidi Brown E-Commerce",
    tech: ["Next.js", "Tailwind CSS"],
    description: "6-page e-commerce app contributing to ~25% growth in sales and engagement.",
  },
  {
    title: "Audiophile E-Commerce",
    tech: ["React.js", "Tailwind CSS"],
    description: "5-page shopping app improving UX and increasing sales by ~15%.",
  },
];

const COLORS = [
  "from-primary/20 to-primary/5",
  "from-blue-500/15 to-blue-500/5",
  "from-violet-500/15 to-violet-500/5",
  "from-amber-500/15 to-amber-500/5",
  "from-rose-500/15 to-rose-500/5",
  "from-cyan-500/15 to-cyan-500/5",
];

export function Projects() {
  return (
    <AnimatedSection id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Projects</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Featured work</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Color header */}
              <div className={`h-32 bg-gradient-to-br ${COLORS[i % COLORS.length]} flex items-center justify-center`}>
                <span className="text-3xl font-bold text-foreground/20">{project.title.charAt(0)}</span>
              </div>

              <div className="p-5">
                <h4 className="text-lg font-semibold text-card-foreground mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs font-medium">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-1.5 text-xs">
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </Button>
                  <Button size="sm" variant="ghost" className="gap-1.5 text-xs">
                    <Github className="h-3.5 w-3.5" /> Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
