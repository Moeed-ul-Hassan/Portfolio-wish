import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Full-Stack Developer & Product Builder",
      period: "2021 - Present",
      status: "Current",
      description: "Building complete products from concept to deployment, specializing in healthcare SaaS, AI-powered tools, and developer infrastructure solutions.",
      tech: ["React", "Python", "FastAPI", "AI/ML"],
      color: "bg-primary"
    },
    {
      title: "Key Projects & Achievements",
      period: "",
      status: "",
      description: "",
      projects: [
        {
          name: "Pulse HMS",
          description: "Built comprehensive health management SaaS with AI integration and offline sync capabilities"
        },
        {
          name: "AI Detection Tools", 
          description: "Developed MediRumor and Rumor AI for misinformation detection across multiple domains"
        },
        {
          name: "Developer Tools",
          description: "Created GitHub Mirror for automated repository management and various utility applications"
        }
      ],
      color: "bg-secondary"
    },
    {
      title: "Early Development & Learning",
      period: "2020 - 2021",
      status: "",
      description: "Started with client projects and utility applications, building foundational skills in web development, data processing, and user experience design.",
      color: "bg-accent"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16" data-testid="text-experience-title">
          Experience & Projects
        </h2>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex items-start" data-testid={`item-experience-${index}`}>
              <div className={`flex-shrink-0 w-4 h-4 ${experience.color} rounded-full mt-6`}></div>
              <div className="ml-8">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold" data-testid={`text-experience-title-${index}`}>
                    {experience.title}
                  </h3>
                  {experience.status && (
                    <Badge variant="secondary" className="bg-green-100 text-green-700" data-testid={`badge-experience-status-${index}`}>
                      {experience.status}
                    </Badge>
                  )}
                </div>
                {experience.period && (
                  <p className="text-muted-foreground mb-4" data-testid={`text-experience-period-${index}`}>
                    {experience.period}
                  </p>
                )}
                
                {experience.description && (
                  <p className="text-foreground mb-4" data-testid={`text-experience-description-${index}`}>
                    {experience.description}
                  </p>
                )}
                
                {experience.projects && (
                  <div className="space-y-4 text-foreground" data-testid={`list-experience-projects-${index}`}>
                    {experience.projects.map((project, projectIndex) => (
                      <div key={projectIndex}>
                        <h4 className="font-semibold" data-testid={`text-project-name-${index}-${projectIndex}`}>
                          {project.name}
                        </h4>
                        <p data-testid={`text-project-description-${index}-${projectIndex}`}>
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                
                {experience.tech && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        data-testid={`badge-experience-tech-${tech.toLowerCase().replace('/', '-')}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
