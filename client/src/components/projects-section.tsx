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
    <section id="work" className="py-32">
      <div className="max-w-5xl mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-6" data-testid="text-projects-title">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-projects-subtitle">
            A collection of projects that showcase my approach to building complete products from concept to deployment.
          </p>
        </div>
        
        <div className="grid gap-16 lg:gap-24">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              className="group block animate-stagger"
              data-testid={`link-project-${index}`}
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project interface`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-testid={`img-project-${index}`}
                    />
                  </div>
                </div>
                <div className={`lg:col-span-5 space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-2">
                    <h3 className="text-2xl lg:text-3xl font-serif font-medium group-hover:opacity-70 transition-opacity duration-300" data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`text-project-description-${index}`}>
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center text-sm text-foreground group-hover:opacity-70 transition-opacity duration-300">
                    <span className="mr-2">View project</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
