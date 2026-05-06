import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const footerLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Domains", to: "/domains" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => (
  <footer className="py-12 bg-accent text-accent-foreground">
    <div className="container max-w-5xl">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="inline-block bg-background rounded-md p-2">
            <img src={logo} alt="Innovative Projects logo" className="h-10 w-auto object-contain" />
          </Link>
          <p className="mt-3 text-sm text-accent-foreground/70 font-sans">
            Trusted project guidance for final-year engineering students in Chennai.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-sm mb-3">Quick Links</h4>
          <div className="space-y-2">
            {footerLinks.map((l) => (
              <Link key={l.to} to={l.to} className="block text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors font-sans">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-sm mb-3">Contact</h4>
          <p className="text-sm text-accent-foreground/70 font-sans">3rd Floor, K.P Towers, No-159, Arcot Rd</p>
          <p className="text-sm text-accent-foreground/70 font-sans">Opp. Nexus Vijaya Mall, Vadapalani</p>
          <p className="text-sm text-accent-foreground/70 font-sans">Chennai, Tamil Nadu 600026</p>
          <p className="text-sm text-accent-foreground/70 font-sans mt-1">+91 98844 41984</p>
          <p className="text-sm text-accent-foreground/70 font-sans mt-1 break-all">innovativeprojectschennai@gmail.com</p>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-background/15 text-center">
        <p className="text-xs text-accent-foreground/50 font-sans">© 2026 ProjectHub. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
