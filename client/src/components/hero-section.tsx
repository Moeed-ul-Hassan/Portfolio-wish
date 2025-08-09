export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="max-w-6xl mx-auto px-8 py-32">
        <div className="max-w-5xl">
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-7xl lg:text-9xl font-serif font-medium leading-[0.85] tracking-tight text-balance text-shadow" data-testid="text-hero-title">
                  Full-Stack<br />
                  <span className="italic">Developer.</span>
                </h1>
              </div>
              <p className="text-2xl lg:text-3xl text-muted-foreground max-w-3xl leading-relaxed font-light" data-testid="text-hero-subtitle">
                I like to craft solid and scalable products with great user experiences.
              </p>
            </div>
            
            <div className="flex items-center space-x-12 text-sm text-muted-foreground pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-medium" data-testid="text-availability">Available for work</span>
              </div>
              <span className="font-medium" data-testid="text-location">Based in Gujrat, Pakistan</span>
            </div>
            
            <div className="pt-12">
              <a 
                href="#work" 
                className="inline-flex items-center text-base font-medium text-foreground hover:opacity-60 transition-all duration-500 group border-b border-foreground/20 pb-1"
                data-testid="button-view-work"
              >
                View my work
                <svg className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
