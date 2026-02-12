import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Philia Hammond. Built with React.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/gogurlbaby/"
            target="_blank"
            className="text-muted-foreground hover:text-[#ff6464] transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/philiahammond/"
            target="_blank"
            className="text-muted-foreground hover:text-[#ff6464] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:philiahammmond@gmail.com"
            className="text-muted-foreground hover:text-[#ff6464] transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
