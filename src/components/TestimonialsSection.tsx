import { Quote } from "lucide-react";

const testimonials = [
  { name: "Arun K.", dept: "B.Tech ECE", text: "The guidance I received was outstanding. My IoT project was well-structured and I scored excellent marks in my viva." },
  { name: "Priya S.", dept: "BE CSE", text: "They helped me with my AI project from scratch. Documentation was thorough and the mentors were always available." },
  { name: "Rahul M.", dept: "Diploma EEE", text: "Affordable and very professional. The embedded systems project was completed on time with proper support." },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-background">
    <div className="container max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">What Students Say</h2>
      <p className="mt-4 text-center text-muted-foreground font-sans">Hear from students who completed their projects with us.</p>

      <div className="mt-14 grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-shadow">
            <Quote className="w-8 h-8 text-accent/30 mb-4" />
            <p className="text-sm text-muted-foreground font-sans leading-relaxed italic">"{t.text}"</p>
            <div className="mt-6 border-t border-border pt-4">
              <p className="font-sans font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.dept}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
