export default function AboutSection() {
  const experiences = [
    {
      title: "Design",
      description: "I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me. I'm committed to creating fluent user experiences while staying fashionable."
    },
    {
      title: "Engineering", 
      description: "In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalability are priorities on my radar."
    }
  ];

  return (
    <section id="about" className="py-40 bg-muted/40">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-32 items-start">
          <div className="space-y-20">
            {experiences.map((experience, index) => (
              <div key={experience.title} className="space-y-6 animate-stagger opacity-0" style={{ animationFillMode: 'forwards' }} data-testid={`section-about-${index}`}>
                <h3 className="text-3xl lg:text-4xl font-serif font-medium text-shadow" data-testid={`text-about-title-${index}`}>
                  {experience.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-xl" data-testid={`text-about-description-${index}`}>
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="space-y-12 animate-slide-up">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-serif font-medium italic text-shadow" data-testid="text-about-main-title">
                Over the years,
              </h2>
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-light">
                <p data-testid="text-about-experience">
                  I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.
                </p>
                <p data-testid="text-about-current">
                  Currently, I work as a Full-Stack Developer & Product Builder crafting thoughtful and scalable solutions that adhere to modern standards for clients worldwide.
                </p>
                <p data-testid="text-about-focus">
                  Prior projects include healthcare management systems, AI-powered detection tools, and developer infrastructure solutions. I focus on ownership — from identifying problems to designing, building, and deploying complete solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
