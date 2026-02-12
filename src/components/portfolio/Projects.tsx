import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "./AnimatedSection";

const PROJECTS = [
  {
    title: "Clean Studio",
    tech: ["React.js", "TypeScript"],
    description:
      "Core product web application for Kakeibo focused on clean architecture, scalable UI systems, and structured authentication flows.",

    image: "/images/cleanstudio.png",
    liveUrl: null,
    liveStatus: "coming_soon",
    codeUrl: null,
    codeVisibility: "private",
  },
  {
    title: "Pulse Service Management",
    tech: ["React.js", "Styled Components", "Formik"],
    description:
      "8-page service app built in 2 months, increasing sign-ups by ~20%.",
    image: "/images/pulse.png",
    liveUrl: "https://pulsedapp.com/",
    liveStatus: "live",
    codeUrl: null,
    codeVisibility: "private",
  },
  {
    title: "InovTech Web App",
    tech: ["Next.js", "Styled Components", "Chakra UI"],
    description:
      "SEO-optimized app using SSR, SSG, and CSR; integrated volunteer application API increasing accessibility by ~20%.",
    image: "/images/inovtech.png",
    liveUrl: "https://www.inovtechsc.com/",
    liveStatus: "live",
    codeUrl: null,
    codeVisibility: "private",
  },
  {
    title: "Aggies Bar & Grill",
    tech: ["Next.js", "Styled Components", "Formik"],
    description:
      "SEO-focused restaurant app with customer contact and feedback features.",
    image: "/images/aggies.png",
    liveUrl: null,
    liveStatus: "down",
    codeUrl: null,
    codeVisibility: "private",
  },
  {
    title: "Ogidi Brown E-Commerce",
    tech: ["Next.js", "Tailwind CSS"],
    description:
      "6-page e-commerce app contributing to ~25% growth in sales and engagement.",
    image: "/images/ogidi.png",
    liveUrl: "https://hoodie-ecommerce.vercel.app/",
    liveStatus: "live",
    codeUrl: "https://github.com/ogidibrown/hoodie-ecommerce",
    codeVisibility: "public",
  },
  {
    title: "Audiophile E-Commerce",
    tech: ["React.js", "Tailwind CSS"],
    description:
      "5-page shopping app improving UX and increasing sales by ~15%.",
    image: "/images/audiophile.png",
    liveUrl: "https://audiophile-ecommerce-live.vercel.app/",
    liveStatus: "live",
    codeUrl: "https://github.com/gogurlbaby/audiophile_ecommerce",
    codeVisibility: "public",
  },
];

export function Projects() {
  return (
    <AnimatedSection id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#ff6464] mb-3">
          Projects
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Featured work
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="text-xs font-medium
             bg-[#ff6464]/10
             text-[#ff6464]
             border border-[#ff6464]/20"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.liveStatus === "live" && project.liveUrl ? (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="gap-1.5 text-xs
             hover:bg-[#ff6464]/10
             hover:text-[#ff6464]
             hover:border-[#ff6464]/50
             transition-all duration-300"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled
                      className="text-xs"
                    >
                      {project.liveStatus === "down"
                        ? "Temporarily Offline"
                        : "Coming Soon"}
                    </Button>
                  )}
                  {project.codeVisibility === "public" && project.codeUrl ? (
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="gap-1.5 text-xs
             text-muted-foreground
             hover:text-[#ff6464]
             hover:bg-[#ff6464]/10
             transition-all duration-300
             hover:scale-[1.03]"
                    >
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-3.5 w-3.5" /> Code
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="ghost"
                      disabled
                      className="text-xs"
                    >
                      {project.codeVisibility === "private"
                        ? "Private Repo"
                        : project.codeVisibility === "nda"
                          ? "Org Repo"
                          : "Code"}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
