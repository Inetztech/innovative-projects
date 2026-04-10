import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DomainsSection from "@/components/DomainsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <DomainsSection />
    <WhyChooseSection />
    <ProcessSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
