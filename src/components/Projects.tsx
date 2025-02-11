
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Flutter Finance Manager",
    description: "A comprehensive Flutter mobile app for personal finance management with real-time tracking and beautiful visualizations.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce mobile application built with Flutter and Firebase, featuring real-time inventory management.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Social Media App",
    description: "A modern social networking app developed in Flutter with features like real-time messaging and media sharing.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    demoLink: "#",
    githubLink: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="bg-muted">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
            >
              <div className="image-3d p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    className="flex items-center text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center text-primary hover:text-primary/80"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
