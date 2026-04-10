import { Briefcase, FileText, Footprints, IndianRupee, Settings2 } from "lucide-react";

const reasons = [
  { icon: Briefcase, title: "Industry-Oriented Projects", text: "Projects designed to reflect real-world industry standards." },
  { icon: FileText, title: "Complete Documentation", text: "Full documentation support including reports and presentations." },
  { icon: Footprints, title: "Step-by-Step Guidance", text: "Mentorship throughout — from concept to final submission." },
  { icon: IndianRupee, title: "Affordable & Student-Friendly", text: "Budget-conscious packages tailored for students." },
  { icon: Settings2, title: "Custom Project Options", text: "Flexible to accommodate your unique project ideas." },
];

const WhyChooseSection = () => (
  <section id="why-us" className="py-20 bg-background">
    <div className="container max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Why Choose Us</h2>
      <p className="mt-4 text-center text-muted-foreground font-sans">What sets us apart from the rest.</p>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-shadow">
            <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center mb-4">
              <r.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-serif font-semibold text-foreground">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground font-sans">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
