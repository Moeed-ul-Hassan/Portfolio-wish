export default function ProjectsSection() {
  const projects = [
    {
      title: "Pulse HMS",
      description: "Health Management SaaS",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      link: "#"
    },
    {
      title: "MediRumor & Rumor AI", 
      description: "Misinformation Detection",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      link: "#"
    },
    {
      title: "Freelance Shield",
      description: "AI-powered freelancer protection",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      link: "#"
    },
    {
      title: "GitHub Mirror",
      description: "Repository automation at scale",
      image: "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      link: "#"
    },
    {
      title: "PulseLanding",
      description: "Marketing website & conversion",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      link: "#"
    }
  ];

  return (
    <section id="work" className="py-40">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-32">
          <h2 className="text-5xl lg:text-7xl font-serif font-medium mb-8 text-shadow" data-testid="text-projects-title">
            Selected Work
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light" data-testid="text-projects-subtitle">
            A collection of projects that showcase my approach to building complete products from concept to deployment.
          </p>
        </div>
        
        <div className="grid gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              className="group block animate-stagger opacity-0"
              style={{ animationFillMode: 'forwards' }}
              data-testid={`link-project-${index}`}
            >
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[5/4] bg-muted rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={project.image}
                      alt={`${project.title} project interface`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                      data-testid={`img-project-${index}`}
                    />
                  </div>
                </div>
                <div className={`lg:col-span-4 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-serif font-medium group-hover:opacity-60 transition-all duration-500 text-shadow" data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-project-description-${index}`}>
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center text-sm font-medium text-foreground group-hover:opacity-60 transition-all duration-500 border-b border-foreground/20 pb-1 w-fit">
                    <span className="mr-3">View project</span>
                    <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
