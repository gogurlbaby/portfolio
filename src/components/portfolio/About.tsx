import { AnimatedSection } from "./AnimatedSection";

export function About() {
  return (
    <AnimatedSection id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#ff6464] mb-3">
          About Me
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          Turning complexity into clarity.
        </h3>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            I'm a Front-End Developer with over 4 years of experience building
            clean, scalable, and user-centered web applications.
          </p>
          <p>
            I specialize in React, TypeScript, and modern frontend architecture,
            with a strong focus on performance, reusability, and intuitive user
            experiences. Over the years, I've worked in collaborative,
            product-driven environments, contributing to applications that
            improved user engagement, reduced development time, and scaled
            smoothly as requirements evolved.
          </p>
          <p>
            I'm currently working on{" "}
            <span className="text-[#ff6464] font-medium">Clean Studio</span>, a
            core web application being developed for Kakeibo, where I design and
            implement key frontend systems, authentication flows, and reusable
            UI components.
          </p>
          <p>
            I value clarity in code, empathy in design, and building software
            that solves real problems — not just shipping features.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
