import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="work" className="py-40" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-32"
        >
          <h2 className="text-5xl lg:text-7xl font-serif font-medium mb-8 text-shadow" data-testid="text-projects-title">
            Selected Work
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light" data-testid="text-projects-subtitle">
            A collection of projects that showcase my approach to building complete products from concept to deployment.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-24 lg:gap-32"
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              className="group block"
              data-testid={`link-project-${index}`}
              variants={projectVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <motion.div
                  className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="aspect-[5/4] bg-muted rounded-xl overflow-hidden shadow-lg">
                    <motion.img
                      src={project.image}
                      alt={`${project.title} project interface`}
                      className="w-full h-full object-cover"
                      data-testid={`img-project-${index}`}
                      whileHover={{
                        scale: 1.1,
                        filter: "brightness(1.1)"
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
                <div className={`lg:col-span-4 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    <motion.h3
                      className="text-3xl lg:text-4xl font-serif font-medium text-shadow"
                      data-testid={`text-project-title-${index}`}
                      whileHover={{ opacity: 0.6 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-project-description-${index}`}>
                      {project.description}
                    </p>
                  </div>
                  <motion.div
                    className="flex items-center text-sm font-medium text-foreground border-b border-foreground/20 pb-1 w-fit"
                    whileHover={{ opacity: 0.6, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="mr-3">View project</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
