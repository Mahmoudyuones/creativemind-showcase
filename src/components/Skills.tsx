
import { motion } from "framer-motion";

const skills = [
  { name: "Flutter", level: 90 },
  { name: "Dart", level: 85 },
  { name: "Firebase", level: 80 },
  { name: "REST APIs", level: 85 },
  { name: "UI/UX Design", level: 75 },
  { name: "Git", level: 80 },
];

export const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
