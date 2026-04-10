import { BrainCircuit, Cpu, ShieldCheck, Cloud, CircuitBoard, Code2 } from "lucide-react";

const domains = [
  { icon: BrainCircuit, label: "AI / ML" },
  { icon: Cpu, label: "IoT" },
  { icon: ShieldCheck, label: "Cybersecurity" },
  { icon: Cloud, label: "Cloud Computing" },
  { icon: CircuitBoard, label: "Electronics" },
  { icon: Code2, label: "Software Development" },
];

const DomainsSection = () => (
  <section id="domains" className="py-20 bg-card">
    <div className="container max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Project Domains</h2>
      <p className="mt-4 text-center text-muted-foreground font-sans">Choose from a wide range of cutting-edge technology domains.</p>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">
        {domains.map((d) => (
          <div key={d.label} className="group flex flex-col items-center p-8 rounded-xl bg-background shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
              <d.icon className="w-7 h-7 text-accent" />
            </div>
            <span className="font-sans font-semibold text-foreground">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DomainsSection;
