import { AnimatedSection } from "./AnimatedSection";

const EXPERIENCES = [
  {
    company: "Kakeibo",
    role: "Front-End Developer",
    product: "Clean Studio",
    period: "2024 – Present",
    points: [
      "Developing Clean Studio, a core web application for Kakeibo, using React and TypeScript",
      "Designing and organizing authentication flows and reusable component systems",
      "Participating in frontend architecture decisions focused on scalability and maintainability",
      "Collaborating on user flows, feature prioritization, and execution strategy",
      "Applying performance and accessibility best practices across the application",
    ],
  },
  {
    company: "EggSeed LLC",
    role: "Part-time Front-End Developer",
    period: "Jun 2022 – Jan 2025",
    points: [
      "Built restaurant and business web applications",
      "Created reusable components, reducing development time by ~25%",
      "Reduced post-release bugs by ~40%",
      "Improved page load performance by ~15%",
    ],
  },
  {
    company: "Organic Trade & Investments",
    role: "Front-End Developer Intern",
    period: "Jul 2021 – Dec 2021",
    points: [
      "Built a virtual office platform in a small team",
      "Improved remote work efficiency by ~30%",
      "Reduced user-reported issues by ~20%",
    ],
  },
];

export function Experience() {
  return (
    <AnimatedSection id="experience" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#ff6464] mb-3">
          Experience
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Where I've worked
        </h3>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border md:left-0" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-[#ff6464] -translate-x-1" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-[#ff6464] font-medium">
                      {exp.role}
                      {exp.product ? ` · ${exp.product}` : ""}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 sm:mt-0 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground flex gap-2"
                    >
                      <span className="text-[#ff6464] mt-1.5 shrink-0">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
