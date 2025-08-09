import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const featuredProjects = [
    {
      title: "Pulse HMS",
      category: "Health Management SaaS",
      description: "Comprehensive health management SaaS featuring AI-powered \"What's Changed?\" summaries, QR appointment check-ins, patient dashboards, and offline booking sync.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["SaaS", "Healthcare", "AI"],
      tech: ["React", "Python", "PostgreSQL", "AI Integration"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "MediRumor & Rumor AI",
      category: "Misinformation Detection",
      description: "AI-driven misinformation detection tools with applications from health-tech to broader rumor tracking, helping combat false information at scale.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["AI", "Detection"],
      tech: ["Python", "ML/AI", "NLP", "FastAPI"],
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  const otherProjects = [
    {
      title: "Freelance Shield",
      description: "Protects freelancers with AI-generated proposals, agreements, and scam detection.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tech: ["React", "AI"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "GitHub Mirror",
      description: "Automates repository mirroring and backup at scale for development teams.",
      image: "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tech: ["Python", "DevOps"],
      gradient: "from-gray-800 to-gray-900"
    },
    {
      title: "PulseLanding",
      description: "Marketing website crafted for conversion and brand impact, supporting Pulse HMS.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tech: ["Next.js", "Marketing"],
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-projects-subtitle">
            From healthcare management to AI-powered tools, here are some products I've built from concept to deployment.
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              data-testid={`card-featured-project-${index}`}
            >
              <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={`${project.title} interface`}
                  className="w-full h-full object-cover opacity-20" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur rounded-lg p-4 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900" data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600">{project.category}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" data-testid={`badge-project-tag-${tag.toLowerCase()}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                      data-testid={`text-project-tech-${tech.toLowerCase().replace('/', '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="link" className="p-0 h-auto" data-testid={`button-view-case-study-${index}`}>
                  View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-other-project-${index}`}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                <img 
                  src={project.image} 
                  alt={`${project.title} interface`}
                  className="w-full h-full object-cover opacity-30" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold" data-testid={`text-other-project-title-${index}`}>
                    {project.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4" data-testid={`text-other-project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                      data-testid={`text-other-project-tech-${tech.toLowerCase().replace('/', '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="link" data-testid="button-view-all-projects">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
