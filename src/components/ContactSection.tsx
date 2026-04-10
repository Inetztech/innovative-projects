import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Contact Us</h2>
        <p className="mt-4 text-center text-muted-foreground font-sans">Get in touch to start your project today.</p>

        <div className="mt-14 grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-foreground">Location</h4>
                <p className="text-sm text-muted-foreground">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-foreground">Phone</h4>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-foreground">Email</h4>
                <p className="text-sm text-muted-foreground">info@projecthub.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-foreground">WhatsApp</h4>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text" required placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-ring"
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email" required placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-ring"
              value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="tel" placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-ring"
              value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <textarea
              required placeholder="Your Message" rows={4}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Button type="submit" size="lg" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
