import { Briefcase, FileText, Footprints, IndianRupee, Settings2, Clock, HeadphonesIcon, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const reasons = [
  { icon: Briefcase, title: "Industry-Oriented Projects", text: "Our projects reflect real industry challenges and trends, ensuring students build practical and relevant skills." },
  { icon: FileText, title: "Complete Documentation", text: "Every project includes a comprehensive report, PPT presentation, IEEE paper format, and UML diagrams." },
  { icon: Footprints, title: "Step-by-Step Guidance", text: "From concept to delivery, our mentors walk you through every phase with patience and clarity." },
  { icon: IndianRupee, title: "Affordable Packages", text: "Student-friendly pricing with no hidden costs. We offer flexible payment options for all budgets." },
  { icon: Settings2, title: "Custom Project Options", text: "Bring your own idea or let us help you find the perfect project that aligns with your interests." },
  { icon: Clock, title: "On-Time Delivery", text: "We understand academic deadlines. Every project is delivered well before your submission date." },
  { icon: HeadphonesIcon, title: "Post-Delivery Support", text: "Even after delivery, we provide support for debugging, viva preparation, and last-minute queries." },
  { icon: ShieldCheck, title: "Plagiarism-Free Work", text: "All projects are original with unique source code and documentation. We guarantee authenticity." },
];

const WhyUsPage = () => (
  <div>
    <section className="py-20 bg-card border-b border-border">
      <div className="container max-w-4xl text-center">
        <p className="text-sm font-sans font-semibold text-accent uppercase tracking-widest mb-3">Why Choose Us</p>
        <h1 className="text-4xl md:text-5xl font-bold text-primary">What Sets Us Apart</h1>
        <p className="mt-6 text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto">
          We go beyond just delivering projects — we ensure every student understands, learns, and succeeds.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <div key={r.title} className="flex items-start gap-5 p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <r.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground font-sans leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16" style={{ background: "var(--hero-gradient)" }}>
      <div className="container max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">Convinced? Let's Get Started</h2>
        <p className="mt-3 text-primary-foreground/80 font-sans">Join hundreds of students who chose us for their final year project.</p>
        <div className="mt-8">
          <Button variant="hero" size="lg" asChild><Link to="/contact">Contact Us Today</Link></Button>
        </div>
      </div>
    </section>
  </div>
);

export default WhyUsPage;
