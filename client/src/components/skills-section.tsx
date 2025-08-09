import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      icon: "⚛️",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      skills: ["React", "TypeScript"],
      badgeColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "Backend",
      description: "Python, FastAPI, Flask, Node.js",
      icon: "🐍",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      skills: ["Python", "FastAPI"],
      badgeColor: "bg-green-100 text-green-700"
    },
    {
      title: "Database",
      description: "PostgreSQL, SQLite, Database Design",
      icon: "🗄️",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      skills: ["PostgreSQL", "SQLite"],
      badgeColor: "bg-purple-100 text-purple-700"
    },
    {
      title: "AI & Tools",
      description: "AI Integration, DevOps, Modern APIs",
      icon: "🤖",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      skills: ["AI/ML", "APIs"],
      badgeColor: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-skills-title">
            Tech Stack & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-skills-subtitle">
            Fluent in modern technologies with a focus on scalable solutions and exceptional user experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-skill-${category.title.toLowerCase()}`}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2" data-testid={`text-skill-title-${category.title.toLowerCase()}`}>
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-skill-description-${category.title.toLowerCase()}`}>
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`${category.badgeColor} hover:scale-105 transition-transform cursor-default`}
                      data-testid={`badge-skill-${skill.toLowerCase().replace('/', '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
