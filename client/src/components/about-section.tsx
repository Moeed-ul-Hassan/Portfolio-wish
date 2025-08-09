import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-40 bg-muted/40" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-32 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-20"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                className="space-y-6"
                data-testid={`section-about-${index}`}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl lg:text-4xl font-serif font-medium text-shadow" data-testid={`text-about-title-${index}`}>
                  {experience.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-xl" data-testid={`text-about-description-${index}`}>
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-serif font-medium italic text-shadow" data-testid="text-about-main-title">
                Over the years,
              </h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-8 text-lg text-muted-foreground leading-relaxed font-light"
              >
                <p data-testid="text-about-experience">
                  I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.
                </p>
                <p data-testid="text-about-current">
                  Currently, I work as a Full-Stack Developer & Product Builder crafting thoughtful and scalable solutions that adhere to modern standards for clients worldwide.
                </p>
                <p data-testid="text-about-focus">
                  Prior projects include healthcare management systems, AI-powered detection tools, and developer infrastructure solutions. I focus on ownership — from identifying problems to designing, building, and deploying complete solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
