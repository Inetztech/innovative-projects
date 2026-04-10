import { BookOpen, Users, Award, Target, Lightbulb, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  { icon: BookOpen, title: "Academic Excellence", text: "Every project is crafted to meet university guidelines and academic standards, ensuring students excel in their evaluations." },
  { icon: Users, title: "Expert Mentorship", text: "Our team of experienced engineers and developers provides one-on-one guidance throughout the project lifecycle." },
  { icon: Award, title: "Proven Track Record", text: "Over 500 students from leading colleges in Chennai have successfully completed their projects with us." },
  { icon: Target, title: "Industry Relevance", text: "We focus on real-world applications so students gain skills that are directly applicable in the job market." },
  { icon: Lightbulb, title: "Innovation First", text: "We encourage students to think beyond textbooks and explore innovative solutions in their chosen domains." },
  { icon: GraduationCap, title: "Complete Support", text: "From topic selection to final viva preparation, we are with students at every stage of their academic project." },
];

const AboutPage = () => (
  <div>
    {/* Page Header */}
    <section className="py-20 bg-card border-b border-border">
      <div className="container max-w-4xl text-center">
        <p className="text-sm font-sans font-semibold text-accent uppercase tracking-widest mb-3">About Us</p>
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Who We Are</h1>
        <p className="mt-6 text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto">
          We are a dedicated project center based in Chennai, committed to supporting final-year BE, BTech, and Diploma students with high-quality academic projects.
        </p>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 bg-background">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-sans font-semibold text-accent uppercase tracking-widest mb-3">Our Mission</p>
            <h2 className="text-3xl font-bold text-primary">Empowering Students Through Practical Learning</h2>
            <p className="mt-6 text-muted-foreground font-sans leading-relaxed">
              Our mission is to bridge the gap between academic theory and practical application. We believe every engineering student deserves access to quality project guidance that prepares them for the real world.
            </p>
            <p className="mt-4 text-muted-foreground font-sans leading-relaxed">
              With a focus on thorough documentation, hands-on development, and real-world relevance, we ensure every student gains confidence and competence — ready for both their academic evaluations and professional career.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-10 shadow-card">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold font-serif text-primary">500+</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold font-serif text-primary">50+</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">College Partners</p>
              </div>
              <div>
                <p className="text-4xl font-bold font-serif text-primary">8+</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold font-serif text-primary">98%</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-card">
      <div className="container max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-sm font-sans font-semibold text-accent uppercase tracking-widest mb-3">Our Values</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">What Drives Us</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="p-6 rounded-xl bg-background shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground font-sans leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-background">
      <div className="container max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Want to Know More?</h2>
        <p className="mt-3 text-muted-foreground font-sans">Explore our services or get in touch with our team.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild><Link to="/services">Our Services</Link></Button>
          <Button variant="outline" asChild><Link to="/contact">Contact Us</Link></Button>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
