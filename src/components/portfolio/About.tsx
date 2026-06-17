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
            I'm a Frontend Developer and Technical Product Manager with 4+ years
            of experience building clean, scalable, and user-centered web
            applications.
          </p>
          <p>
            I specialise in React, Next.js, and modern frontend architecture,
            with a strong focus on performance, reusability, and intuitive user
            experiences. I'm AWS Certified Cloud Practitioner, currently
            expanding into fullstack development and cloud architecture. I'm
            currently part of the founding team at Uralab — an Africa-first AI
            lab building agricultural AI models trained on African context.
          </p>
          <p>
            I lead frontend development and contribute to AWS cloud
            infrastructure decisions alongside our CTO.
          </p>
          <p>
            I value clarity in code, empathy in design, and building software
            that solves real problems for real people — especially here in
            Africa.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
