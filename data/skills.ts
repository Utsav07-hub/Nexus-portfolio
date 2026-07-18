export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: "Languages", skills: ["C++", "Python", "JavaScript", "TypeScript", "SQL"] },
  { category: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { category: "Backend", skills: ["Node.js", "Express.js"] },
  { category: "Machine Learning", skills: ["Scikit-learn", "Pandas", "NumPy", "TensorFlow"] },
  { category: "Database", skills: ["MySQL", "MongoDB"] },
  { category: "Tools", skills: ["Git", "Docker", "MLflow", "VS Code"] },
];
