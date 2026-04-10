import { MessageSquare, FolderSearch, Wrench, PackageCheck } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation", text: "Discuss your requirements and academic goals with our team." },
  { icon: FolderSearch, title: "Project Selection", text: "Choose the right project domain and topic with expert advice." },
  { icon: Wrench, title: "Development Support", text: "Hands-on guidance through design, coding, and testing." },
  { icon: PackageCheck, title: "Final Delivery", text: "Complete project with documentation, ready for submission." },
];

const ProcessSection = () => (
  <section id="process" className="py-20 bg-card">
    <div className="container max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Our Process</h2>
      <p className="mt-4 text-center text-muted-foreground font-sans">A simple, transparent process from start to finish.</p>

      <div className="mt-14 relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

        <div className="space-y-12">
          {steps.map((s, i) => (
            <div key={s.title} className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1 text-center md:text-right md:even:text-left">
                {i % 2 === 0 && (
                  <div className="md:text-right">
                    <h3 className="font-serif text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground font-sans">{s.text}</p>
                  </div>
                )}
                {i % 2 === 1 && <div className="hidden md:block" />}
              </div>

              {/* Circle */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-card shrink-0">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              <div className="flex-1 text-center md:text-left">
                {i % 2 === 1 && (
                  <div className="md:text-left">
                    <h3 className="font-serif text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground font-sans">{s.text}</p>
                  </div>
                )}
                {i % 2 === 0 && <div className="hidden md:block" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
