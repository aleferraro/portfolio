"use client";

import { motion } from "framer-motion";
import Section from "./section";

const skillGroups = [
  {
    category: "Back-end & Database",
    skills: ["PHP", "Laravel", "Filament", "Livewire", "Node.js", "Python", "GraphQL", "REST API", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    category: "Front-end",
    skills: ["Vue.js", "React", "Next.js", "Nuxt", "TypeScript", "JavaScript", "Tailwind CSS", "SASS/SCSS", "HTML5", "CSS3"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub Actions", "Nginx", "Bun", "Vite", "Composer", "Postman"],
  },
  {
    category: "Metodologie",
    skills: ["Agile / Scrum", "Code review", "SOLID", "Design pattern", "Problem Solving"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" title="Competenze">
      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-card-border"
          >
            <h3 className="text-lg font-semibold mb-4 text-accent">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="text-sm px-4 py-2 rounded-lg bg-background border border-card-border hover:border-accent/30 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
