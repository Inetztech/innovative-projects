const Footer = () => (
  <footer className="py-12 bg-primary text-primary-foreground">
    <div className="container max-w-5xl">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-lg font-bold">ProjectHub<span className="text-accent">.</span></h3>
          <p className="mt-2 text-sm text-primary-foreground/70 font-sans">Trusted project guidance for final-year engineering students in Chennai.</p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-sm mb-3">Quick Links</h4>
          <div className="space-y-2">
            {["About", "Services", "Domains", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-sans">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-sm mb-3">Contact</h4>
          <p className="text-sm text-primary-foreground/70 font-sans">Chennai, Tamil Nadu, India</p>
          <p className="text-sm text-primary-foreground/70 font-sans mt-1">+91 98765 43210</p>
          <p className="text-sm text-primary-foreground/70 font-sans mt-1">info@projecthub.in</p>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-primary-foreground/15 text-center">
        <p className="text-xs text-primary-foreground/50 font-sans">© 2026 ProjectHub. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
