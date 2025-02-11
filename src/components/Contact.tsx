
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="bg-muted">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="mailto:your.email@example.com"
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>Email</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Github className="w-5 h-5 text-primary" />
              <span>GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Twitter className="w-5 h-5 text-primary" />
              <span>Twitter</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
