import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-base text-muted-foreground font-light">
              <p>&copy; 2025 Moeed. All rights reserved.</p>
            </div>
            <div className="flex space-x-12 text-base">
              <a href="https://linkedin.com/in/moeed" className="text-muted-foreground hover:text-foreground transition-all duration-500 border-b border-foreground/20 pb-1" data-testid="link-linkedin">
                LinkedIn
              </a>
              <a href="https://github.com/moeed" className="text-muted-foreground hover:text-foreground transition-all duration-500 border-b border-foreground/20 pb-1" data-testid="link-github">
                GitHub
              </a>
              <a href="mailto:moeed@example.com" className="text-muted-foreground hover:text-foreground transition-all duration-500 border-b border-foreground/20 pb-1" data-testid="link-email">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
