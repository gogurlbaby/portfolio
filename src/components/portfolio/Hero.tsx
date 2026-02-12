import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center lg:pt-16"
    >
      <div className="container mx-auto px-4 md:px-8 py-20 max-w-4xl text-center">
        <div
          className="inline-block mb-6 px-4 py-1.5 rounded-full 
           bg-[#ff6464]/10 backdrop-blur-sm 
           border border-[#ff6464]/20
           text-[#ff6464] text-sm font-medium
           opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Front-End Developer · Accra, Ghana 🇬🇭
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          Building clean, scalable web products that turn ideas into{" "}
          <span className="text-gradient">reliable user experiences.</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Front-End Engineer with 4+ years of experience building performant,
          scalable, and user-centered React applications.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.55s" }}
        >
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="gap-2 px-8 
             bg-[#ff6464] 
             text-white
             hover:bg-[#d94f4f]
             transition-all duration-300
             hover:scale-[1.02]
             hover:shadow-lg hover:shadow-[#ff6464]/30"
          >
            View Projects <ArrowDown className="h-4 w-4" />
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 px-8
             border-[#ff6464]/50 text-[#ff6464]
             hover:bg-[#ff6464]/10 hover:text-[#ff6464] hover:border-[#ff6464]
             transition-all duration-300
             hover:scale-[1.02]"
          >
            <a
              href="https://docs.google.com/document/d/1l6xoK8Hgolc5fgf9dnQdEOZU3knR2meX/edit?usp=sharing&ouid=105134390569711132621&rtpof=true&sd=true"
              target="_blank"
            >
              {" "}
              <Download className="h-4 w-4" /> Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
