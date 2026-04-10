import { BrainCircuit, Cpu, ShieldCheck, Cloud, CircuitBoard, Code2, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const domains = [
  { icon: BrainCircuit, label: "AI / Machine Learning", desc: "Neural networks, NLP, computer vision, predictive modeling, and intelligent automation systems.", count: "50+ Projects" },
  { icon: Cpu, label: "Internet of Things", desc: "Smart home, agriculture monitoring, health tracking, and industrial IoT solutions.", count: "40+ Projects" },
  { icon: ShieldCheck, label: "Cybersecurity", desc: "Network security, cryptography, intrusion detection, and secure communication systems.", count: "25+ Projects" },
  { icon: Cloud, label: "Cloud Computing", desc: "AWS, Azure, and GCP-based projects including serverless architectures and cloud-native apps.", count: "30+ Projects" },
  { icon: CircuitBoard, label: "Electronics & Embedded", desc: "Microcontrollers, FPGA, VLSI, power electronics, and signal processing projects.", count: "60+ Projects" },
  { icon: Code2, label: "Software Development", desc: "Full-stack web apps, APIs, e-commerce platforms, and enterprise management systems.", count: "80+ Projects" },
  { icon: Smartphone, label: "Mobile Development", desc: "Android, iOS, and cross-platform apps for healthcare, education, and e-commerce.", count: "35+ Projects" },
  { icon: Zap, label: "Renewable Energy", desc: "Solar, wind, and hybrid energy systems with monitoring and optimization projects.", count: "20+ Projects" },
];

const DomainsPage = () => (
  <div>
    <section className="py-20 bg-card border-b border-border">
      <div className="container max-w-4xl text-center">
        <p className="text-sm font-sans font-semibold text-primary uppercase tracking-widest mb-3">Project Domains</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Explore Our Domains</h1>
        <p className="mt-6 text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto">
          Choose from a wide range of cutting-edge technology domains. Each domain includes multiple project options with complete support.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {domains.map((d) => (
            <div key={d.label} className="group p-8 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                  <d.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-semibold text-foreground">{d.label}</h3>
                    <span className="text-xs font-sans font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">{d.count}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground font-sans leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-card">
      <div className="container max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Don't See Your Domain?</h2>
        <p className="mt-3 text-muted-foreground font-sans">We support custom domains and emerging technologies too.</p>
        <div className="mt-8">
          <Button size="lg" asChild><Link to="/contact">Request a Custom Domain</Link></Button>
        </div>
      </div>
    </section>
  </div>
);

export default DomainsPage;
