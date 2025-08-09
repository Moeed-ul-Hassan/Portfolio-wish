import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight" data-testid="text-hero-title">
                Full-Stack<br />
                <span className="gradient-text">Developer.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl" data-testid="text-hero-subtitle">
                I build complete, usable products that solve real problems. From concept to deployment, I deliver solutions that scale.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span data-testid="text-location">Gujrat, Pakistan</span>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span data-testid="text-availability">Available for new opportunities</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" data-testid="button-view-work">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild data-testid="button-get-in-touch">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern developer workspace with multiple monitors and coding setup" 
                className="w-full h-auto"
                data-testid="img-hero-workspace"
              />
              
              {/* Floating tech stack cards */}
              <div className="absolute -top-6 -left-6 bg-card rounded-lg shadow-lg p-4 animate-pulse">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">TS</span>
                  </div>
                  <span className="text-sm font-medium">TypeScript</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card rounded-lg shadow-lg p-4 animate-pulse delay-150">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">PY</span>
                  </div>
                  <span className="text-sm font-medium">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
}
