export default function AboutSection() {
  const skills = {
    technical: [
      "Backend Architecture & APIs",
      "Database Design & Optimization", 
      "AI/ML Integration",
      "Modern Frontend Development"
    ],
    product: [
      "End-to-end Product Development",
      "User Experience Design",
      "Scalable System Architecture", 
      "Performance Optimization"
    ]
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="text-about-title">
              Product Ownership Mindset
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg" data-testid="text-about-description-1">
                What sets me apart is <strong className="text-foreground">ownership</strong> — from identifying a problem to designing, building, and deploying the solution. I don't just code features; I deliver complete, usable products that solve real problems.
              </p>
              <p data-testid="text-about-description-2">
                Based in Gujrat, Pakistan, I've built and shipped a range of projects that demonstrate both technical depth and product thinking. My flagship project, Pulse HMS, showcases my ability to create complex SaaS solutions with AI integration, QR-based workflows, and comprehensive user dashboards.
              </p>
              <p data-testid="text-about-description-3">
                I'm on a focused track toward backend mastery while already bringing the product sensibility, technical skill, and execution speed that modern tech teams value.
              </p>
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground" data-testid="text-technical-focus-title">
                  Technical Focus
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {skills.technical.map((skill, index) => (
                    <li key={skill} data-testid={`text-technical-skill-${index}`}>
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground" data-testid="text-product-skills-title">
                  Product Skills
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {skills.product.map((skill, index) => (
                    <li key={skill} data-testid={`text-product-skill-${index}`}>
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800" 
                alt="Professional developer portrait in modern office setting" 
                className="w-full h-auto"
                data-testid="img-about-portrait"
              />
              
              {/* Achievement badges */}
              <div className="absolute top-6 left-6 space-y-3">
                <div className="backdrop-blur-glass rounded-lg p-3 shadow-lg">
                  <div className="text-2xl font-bold text-primary" data-testid="text-projects-count">8+</div>
                  <div className="text-sm text-muted-foreground">Projects Shipped</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6">
                <div className="backdrop-blur-glass rounded-lg p-3 shadow-lg">
                  <div className="text-2xl font-bold text-secondary" data-testid="text-experience-years">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
