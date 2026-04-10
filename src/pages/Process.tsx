import { MessageSquare, FolderSearch, Wrench, PackageCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    text: "Schedule a free consultation to discuss your academic requirements, preferred domain, and project expectations.",
    details: ["Understand your syllabus requirements", "Discuss domain preferences", "Clarify timelines and deliverables"],
  },
  {
    icon: FolderSearch,
    step: "02",
    title: "Project Selection",
    text: "Choose from our curated list of projects or bring your own idea. We'll help refine it for academic success.",
    details: ["Browse domain-specific project list", "Get expert recommendations", "Finalize project scope and objectives"],
  },
  {
    icon: Wrench,
    step: "03",
    title: "Development Support",
    text: "Our mentors guide you through the development process with hands-on coding, testing, and documentation.",
    details: ["Step-by-step development guidance", "Regular progress reviews", "Documentation and report preparation"],
  },
  {
    icon: PackageCheck,
    step: "04",
    title: "Final Delivery",
    text: "Receive your complete project with source code, documentation, and viva preparation support.",
    details: ["Complete source code handover", "Final documentation and PPT", "Viva and demo preparation"],
  },
];

const ProcessPage = () => (
  <div>
    <section className="py-20 bg-card border-b border-border">
      <div className="container max-w-4xl text-center">
        <p className="text-sm font-sans font-semibold text-primary uppercase tracking-widest mb-3">Our Process</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">How It Works</h1>
        <p className="mt-6 text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto">
          A simple, transparent, four-step process designed to make your project journey smooth and stress-free.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="space-y-10">
          {steps.map((s, i) => (
            <div key={s.title} className="relative flex gap-8">
              {/* Timeline line */}
              {i < steps.length - 1 && (
                <div className="absolute left-7 top-20 bottom-0 w-px bg-border hidden md:block" />
              )}
              {/* Step number */}
              <div className="hidden md:flex flex-col items-center shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-card">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 p-8 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-sans font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">Step {s.step}</span>
                  <div className="md:hidden w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <s.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-muted-foreground font-sans leading-relaxed">{s.text}</p>
                <ul className="mt-4 space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-card">
      <div className="container max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Ready to Begin?</h2>
        <p className="mt-3 text-muted-foreground font-sans">Start with a free consultation — no commitment required.</p>
        <div className="mt-8">
          <Button size="lg" asChild><Link to="/contact">Book a Consultation</Link></Button>
        </div>
      </div>
    </section>
  </div>
);

export default ProcessPage;
