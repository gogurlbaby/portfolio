import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "./AnimatedSection";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <AnimatedSection id="contact" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#ff6464] mb-3">
          Contact
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Let's build something together.
        </h3>
        <p className="text-muted-foreground mb-12 max-w-lg">
          Have a project in mind or just want to connect? Drop me a message.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <a
              href="mailto:philiahammmond@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-[#ff6464] transition-colors">
                <Mail className="h-5 w-5 text-[#ff6464]" />
              </div>
              <span className="text-sm font-medium">
                philiahammmond@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/philiahammond/"
              target="_blank"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-[#ff6464] transition-colors">
                <Linkedin className="h-5 w-5 text-[#ff6464]" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/gogurlbaby/"
              target="_blank"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-[#ff6464] transition-colors">
                <Github className="h-5 w-5 text-[#ff6464]" />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card"
            />
            <Input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-card"
            />
            <Textarea
              placeholder="Your message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="bg-card resize-none"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full
             bg-[#ff6464]
             text-white
             hover:bg-[#d94f4f]
             transition-all duration-300
             hover:scale-[1.02]
             hover:shadow-lg hover:shadow-[#ff6464]/30"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
