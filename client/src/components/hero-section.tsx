export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="max-w-5xl mx-auto px-8 py-32">
        <div className="max-w-4xl">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-6xl lg:text-8xl font-serif font-medium leading-[0.9] tracking-tight text-balance" data-testid="text-hero-title">
                  Full-Stack<br />
                  Developer.
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed" data-testid="text-hero-subtitle">
                I like to craft solid and scalable products with great user experiences.
              </p>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span data-testid="text-availability">Available for work</span>
              </div>
              <span data-testid="text-location">Based in Gujrat, Pakistan</span>
            </div>
            
            <div className="pt-8">
              <a 
                href="#work" 
                className="inline-flex items-center text-sm font-medium text-foreground hover:opacity-70 transition-opacity duration-300 group"
                data-testid="button-view-work"
              >
                View my work
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
