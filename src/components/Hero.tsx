
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-24 overflow-hidden">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Flutter Developer
            </span>
            <h1 className="text-5xl font-bold mb-6">
              Hi, I'm Mahmoud Younis
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              A passionate Flutter developer with expertise in creating beautiful,
              responsive, and performant mobile applications. I focus on writing
              clean code and creating exceptional user experiences.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="image-3d"
          >
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Mahmoud Younis"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
