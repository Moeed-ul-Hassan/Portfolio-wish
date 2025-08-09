import { motion } from "framer-motion";

export default function HeroSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const statusVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="max-w-6xl mx-auto px-8 py-32">
        <div className="max-w-5xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-7xl lg:text-9xl font-serif font-medium leading-[0.85] tracking-tight text-balance text-shadow" data-testid="text-hero-title">
                  <motion.span
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="block"
                  >
                    Full-Stack
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    className="block italic"
                  >
                    Developer.
                  </motion.span>
                </h1>
              </motion.div>
              
              <motion.p
                variants={itemVariants}
                className="text-2xl lg:text-3xl text-muted-foreground max-w-3xl leading-relaxed font-light"
                data-testid="text-hero-subtitle"
              >
                I like to craft solid and scalable products with great user experiences.
              </motion.p>
            </div>
            
            <motion.div
              variants={statusVariants}
              className="flex items-center space-x-12 text-sm text-muted-foreground pt-8"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-2.5 h-2.5 bg-emerald-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="font-medium" data-testid="text-availability">Available for work</span>
              </div>
              <span className="font-medium" data-testid="text-location">Based in Gujrat, Pakistan</span>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="pt-12"
            >
              <motion.a
                href="#work"
                className="inline-flex items-center text-base font-medium text-foreground group border-b border-foreground/20 pb-1"
                data-testid="button-view-work"
                whileHover={{
                  opacity: 0.6,
                  transition: { duration: 0.3 }
                }}
              >
                View my work
                <motion.svg
                  className="w-5 h-5 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
