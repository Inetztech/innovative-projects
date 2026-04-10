import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Visit Us", lines: ["3rd Floor, K.P Towers, No-159, Arcot Rd", "Opp. Nexus Vijaya Mall, Vadapalani", "Chennai, Tamil Nadu 600026"] },
  { icon: Phone, title: "Call Us", lines: ["+91 98844 41984"] },
  { icon: Mail, title: "Email Us", lines: ["info@projecthub.in"] },
  { icon: MessageCircle, title: "WhatsApp", lines: ["+91 98844 41984"] },
  { icon: Clock, title: "Working Hours", lines: ["Mon–Sat: 9:00 AM – 7:00 PM", "Sunday: By Appointment"] },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", department: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ADept: ${form.department}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919884441984?text=${text}`, "_blank");
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-ring transition-shadow";

  return (
    <div>
      <section className="py-20 bg-card border-b border-border">
        <div className="container max-w-4xl text-center">
          <p className="text-sm font-sans font-semibold text-primary uppercase tracking-widest mb-3">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Get in Touch</h1>
          <p className="mt-6 text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto">
            Ready to start your project? Have questions? We'd love to hear from you. Reach out through any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-foreground text-sm">{c.title}</h4>
                    {c.lines.map((line) => (
                      <p key={line} className="text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl bg-card shadow-card">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" required placeholder="Your Name" className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    <input type="email" required placeholder="Email Address" className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="tel" placeholder="Phone Number" className={inputClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    <select className={inputClass} value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })}>
                      <option value="">Select Department</option>
                      <option value="CSE">CSE</option>
                      <option value="ECE">ECE</option>
                      <option value="EEE">EEE</option>
                      <option value="IT">IT</option>
                      <option value="Mech">Mechanical</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <textarea required placeholder="Tell us about your project requirements..." rows={5} className={`${inputClass} resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
