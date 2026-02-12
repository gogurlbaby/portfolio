import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "./AnimatedSection";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js"],
  },
  {
    title: "Styling",
    skills: [
      "Tailwind CSS",
      "Styled Components",
      "Chakra UI",
      "Ant Design",
      "Shadcn",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Jira",
      "Bitbucket",
      "Slack",
      "Discord",
      "Google Workspace",
      "Microsoft 365",
    ],
  },
];

export function Skills() {
  return (
    <AnimatedSection id="skills" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#ff6464] mb-3">
          Skills
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Tech stack
        </h3>

        <div className="space-y-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.title}>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium bg-card hover:bg-accent transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
