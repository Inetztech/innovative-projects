import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, BrainCircuit, Cpu, ShieldCheck, Cloud, CircuitBoard, Code2 } from "lucide-react";

const highlights = [
  { icon: BookOpen, title: "Academic Excellence", text: "Projects aligned with university standards and current industry practices." },
  { icon: Users, title: "Expert Mentorship", text: "Guidance from experienced professionals at every step of your project." },
  { icon: Award, title: "Proven Results", text: "Hundreds of students successfully completed their projects with our support." },
];

const domains = [
  { icon: BrainCircuit, label: "AI / ML" },
  { icon: Cpu, label: "IoT" },
  { icon: ShieldCheck, label: "Cybersecurity" },
  { icon: Cloud, label: "Cloud Computing" },
  { icon: CircuitBoard, label: "Electronics" },
  { icon: Code2, label: "Software Development" },
];

const Index = () => (
  <div>
    {/* Hero - Light themed */}
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Decorative accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(220 20% 20%) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 container text-center max-w-3xl py-32">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-sans font-semibold mb-6 animate-fade-in">
          Chennai's Trusted Project Center
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
          Final Year Engineering{" "}
          <span className="text-primary">Projects</span> in Chennai
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground font-sans animate-fade-in" style={{ animationDelay: "0.15s" }}>
          Reliable guidance for hardware and software projects — helping students build, learn, and succeed.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg" asChild>
            <Link to="/domains">View Projects</Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Quick Highlights */}
    <section className="py-20 bg-card">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Why Students <span className="text-primary">Trust Us</span></h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {highlights.map((h) => (
            <div key={h.title} className="text-center group">
              <div className="mx-auto w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <h.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground font-sans">{h.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <Link to="/about" className="gap-2">Learn More About Us <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Domains Preview */}
    <section className="py-20 bg-background">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Project <span className="text-primary">Domains</span></h2>
        <p className="mt-4 text-center text-muted-foreground font-sans">Explore cutting-edge technology domains for your final year project.</p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
          {domains.map((d) => (
            <div key={d.label} className="group flex flex-col items-center p-8 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <d.icon className="w-7 h-7 text-accent group-hover:text-primary transition-colors" />
              </div>
              <span className="font-sans font-semibold text-foreground">{d.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <Link to="/domains" className="gap-2">View All Domains <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* CTA - Light with orange accent */}
    <section className="py-20 bg-primary/5 border-y border-primary/10">
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Start Your <span className="text-primary">Project?</span></h2>
        <p className="mt-4 text-muted-foreground font-sans text-lg">Get expert guidance from consultation to final delivery. Let's build something great together.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/process">Our Process</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
