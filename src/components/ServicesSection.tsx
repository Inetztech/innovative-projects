import { Cpu, Globe, BrainCircuit, CircuitBoard, Bot, BarChart3 } from "lucide-react";

const hardware = [
  { icon: CircuitBoard, title: "Embedded Systems" },
  { icon: Cpu, title: "IoT Solutions" },
  { icon: Bot, title: "Robotics & Automation" },
];

const software = [
  { icon: Globe, title: "Web & App Development" },
  { icon: BrainCircuit, title: "AI & Machine Learning" },
  { icon: BarChart3, title: "Data Science Projects" },
];

const ServiceCard = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center gap-4 p-4 rounded-lg bg-card shadow-card hover:shadow-card-hover transition-shadow">
    <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5 text-accent" />
    </div>
    <span className="font-sans font-medium text-foreground">{title}</span>
  </div>
);

const ServicesSection = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Our Services</h2>
      <p className="mt-4 text-center text-muted-foreground font-sans">Comprehensive project support across hardware and software domains.</p>

      <div className="mt-14 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-accent" /> Hardware Projects
          </h3>
          <div className="space-y-4">
            {hardware.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-accent" /> Software Projects
          </h3>
          <div className="space-y-4">
            {software.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
