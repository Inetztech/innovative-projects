import { Cpu, Globe, BrainCircuit, CircuitBoard, Bot, BarChart3, FileCode, Smartphone, Database, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const hardware = [
  { icon: CircuitBoard, title: "Embedded Systems", desc: "Microcontroller-based projects using Arduino, Raspberry Pi, ARM, and PIC platforms for real-world applications." },
  { icon: Wifi, title: "IoT Solutions", desc: "Internet of Things projects combining sensors, connectivity, and cloud platforms for smart monitoring and automation." },
  { icon: Bot, title: "Robotics & Automation", desc: "Autonomous robots, line followers, pick-and-place systems, and industrial automation projects." },
];

const software = [
  { icon: Globe, title: "Web & App Development", desc: "Full-stack web applications and mobile apps using modern frameworks like React, Node.js, Flutter, and more." },
  { icon: BrainCircuit, title: "AI & Machine Learning", desc: "Intelligent systems with image recognition, NLP, predictive analytics, and deep learning models." },
  { icon: BarChart3, title: "Data Science Projects", desc: "Data analysis, visualization, and insights using Python, Pandas, TensorFlow, and cloud-based tools." },
];

const additional = [
  { icon: FileCode, title: "VLSI & FPGA Design", desc: "Digital circuit design and simulation using Verilog, VHDL, and FPGA development boards." },
  { icon: Database, title: "Database Systems", desc: "Advanced database projects with SQL, NoSQL, data warehousing, and distributed systems." },
  { icon: Smartphone, title: "Mobile Applications", desc: "Native and cross-platform mobile apps for Android and iOS with modern UI/UX." },
  { icon: Cpu, title: "Power Electronics", desc: "Converter design, motor drives, renewable energy systems, and power quality analysis projects." },
];

const ServiceCard = ({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) => (
  <div className="p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5">
    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground font-sans leading-relaxed">{desc}</p>
  </div>
);

const ServicesPage = () => (
  <div>
    <section className="py-20 bg-card border-b border-border">
      <div className="container max-w-4xl text-center">
        <p className="text-sm font-sans font-semibold text-primary uppercase tracking-widest mb-3">Our Services</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">What We Offer</h1>
        <p className="mt-6 text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto">
          Comprehensive project support across hardware and software domains, tailored for final-year engineering students.
        </p>
      </div>
    </section>

    {/* Hardware */}
    <section className="py-20 bg-background">
      <div className="container max-w-5xl">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
            <Cpu className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Hardware Projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {hardware.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>

    {/* Software */}
    <section className="py-20 bg-card">
      <div className="container max-w-5xl">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
            <Globe className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Software Projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {software.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>

    {/* Additional */}
    <section className="py-20 bg-background">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">Additional Specializations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {additional.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-16 bg-card">
      <div className="container max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Need a Custom Project?</h2>
        <p className="mt-3 text-muted-foreground font-sans">We can tailor a project to your specific requirements and academic needs.</p>
        <div className="mt-8">
          <Button size="lg" asChild><Link to="/contact">Discuss Your Project</Link></Button>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
