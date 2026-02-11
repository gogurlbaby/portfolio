import { GraduationCap, Award } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const EDUCATION = [
  {
    icon: Award,
    title: "Front-End Development Certificates",
    org: "Azubi Africa, HerTechTrail",
  },
  { icon: Award, title: "MERN Full Stack Development", org: "MEST Africa" },
  {
    icon: GraduationCap,
    title: "BSc Home Science (Consumer Science)",
    org: "University of Ghana",
  },
];

export function Education() {
  return (
    <AnimatedSection id="education" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#ff6464] mb-3">
          Education
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Certifications & Degrees
        </h3>

        <div className="space-y-4">
          {EDUCATION.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
            >
              <div
                className="shrink-0 w-10 h-10 rounded-lg 
                bg-[#ff6464]/10 
                flex items-center justify-center"
              >
                <item.icon className="h-5 w-5 text-[#ff6464]" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
