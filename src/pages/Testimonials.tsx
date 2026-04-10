import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  { name: "Arun Kumar", dept: "B.Tech ECE", college: "Anna University", text: "The guidance I received was outstanding. My IoT project was well-structured and I scored excellent marks in both my project review and viva. Highly recommend!", rating: 5 },
  { name: "Priya Sharma", dept: "BE CSE", college: "SRM Institute", text: "They helped me with my AI project from scratch. The documentation was thorough, the code was clean, and the mentors were always available for doubts.", rating: 5 },
  { name: "Rahul Menon", dept: "Diploma EEE", college: "Polytechnic College", text: "Affordable and very professional. The embedded systems project was completed well ahead of schedule with proper testing and support.", rating: 5 },
  { name: "Deepa Krishnan", dept: "B.Tech IT", college: "VIT Chennai", text: "I was worried about my final year project, but their step-by-step guidance made everything manageable. The web application they helped me build was impressive.", rating: 5 },
  { name: "Karthik Rajan", dept: "BE ECE", college: "CEG, Anna University", text: "Their robotics project support was exceptional. From component selection to final demo, every aspect was covered professionally.", rating: 4 },
  { name: "Sneha Balaji", dept: "B.Tech CSE", college: "SSN College", text: "The cybersecurity project I completed with them was unique and well-documented. My guide was very impressed with the quality of work.", rating: 5 },
];

const TestimonialsPage = () => (
  <div>
    <section className="py-20 bg-card border-b border-border">
      <div className="container max-w-4xl text-center">
        <p className="text-sm font-sans font-semibold text-primary uppercase tracking-widest mb-3">Testimonials</p>
        <h1 className="text-4xl md:text-5xl font-bold text-primary">What Students Say</h1>
        <p className="mt-6 text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto">
          Hear from students who successfully completed their final year projects with our guidance and support.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-shadow flex flex-col">
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-sm text-muted-foreground font-sans leading-relaxed italic flex-1">"{t.text}"</p>
              <div className="flex gap-0.5 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < t.rating ? "text-primary fill-primary" : "text-border"}`} />
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-sans font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.dept} — {t.college}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-card">
      <div className="container max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Join Our Growing Community</h2>
        <p className="mt-3 text-muted-foreground font-sans">Be the next success story. Start your project journey today.</p>
        <div className="mt-8">
          <Button size="lg" asChild><Link to="/contact">Get Started</Link></Button>
        </div>
      </div>
    </section>
  </div>
);

export default TestimonialsPage;
