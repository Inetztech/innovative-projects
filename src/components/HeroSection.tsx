import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.88 }} />

    <div className="relative z-10 container text-center max-w-3xl py-32">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-in">
        Final Year Engineering Projects in Chennai
      </h1>
      <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-sans animate-fade-in" style={{ animationDelay: "0.15s" }}>
        Reliable guidance for hardware and software projects — helping students build, learn, and succeed.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Button variant="hero" size="lg" asChild>
          <a href="#domains">View Projects</a>
        </Button>
        <Button variant="hero-outline" size="lg" asChild>
          <a href="#contact">Contact Us</a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
