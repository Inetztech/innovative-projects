import { BookOpen, Users, Award } from "lucide-react";

const highlights = [
  { icon: BookOpen, title: "Academic Excellence", text: "Projects aligned with university standards and current industry practices." },
  { icon: Users, title: "Expert Mentorship", text: "Guidance from experienced professionals at every step of your project." },
  { icon: Award, title: "Proven Results", text: "Hundreds of students successfully completed their projects with our support." },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-card">
    <div className="container max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">About Us</h2>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
        We are a dedicated project center based in Chennai, committed to supporting final-year BE, BTech, and Diploma students with high-quality academic projects. Our focus is on practical learning, thorough documentation, and real-world application — ensuring every student gains confidence and competence.
      </p>
      <div className="mt-14 grid md:grid-cols-3 gap-8">
        {highlights.map((h) => (
          <div key={h.title} className="text-center group">
            <div className="mx-auto w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
              <h.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground">{h.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground font-sans">{h.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
