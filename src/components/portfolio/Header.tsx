import { useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <button
          onClick={() => scrollTo("hero")}
          className="text-lg font-bold tracking-tight text-[#ff6464] transition-all duration-300 hover:opacity-80"
        >
          PH<span className="text-[#ff6464]">.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-all duration-300",
                activeSection === item.id
                  ? "text-[#ff6464] bg-[#ff6464]/10"
                  : "text-muted-foreground hover:text-[#ff6464] hover:bg-[#ff6464]/5",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:text-[#ff6464] hover:bg-[#ff6464]/10 transition-all duration-300"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-[#ff6464] hover:bg-[#ff6464]/10 transition-all duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "block w-full text-left px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-300",
                activeSection === item.id
                  ? "text-[#ff6464] bg-[#ff6464]/10"
                  : "text-muted-foreground hover:text-[#ff6464] hover:bg-[#ff6464]/5",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
