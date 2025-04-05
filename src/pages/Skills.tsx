import React from 'react';
import { Code2, Terminal, Globe, Database, Cloud, Lock, Cpu, LineChart } from 'lucide-react';

function Skills() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-red-600">Skills & Expertise</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold">{category.name}</h2>
              </div>
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-red-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const skills = [
  {
    name: "Frontend",
    icon: <Globe className="text-red-600" size={24} />,
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "CSS/Tailwind", level: 95 }
    ]
  },
  {
    name: "Backend",
    icon: <Terminal className="text-red-600" size={24} />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 }
    ]
  },
  {
    name: "Database",
    icon: <Database className="text-red-600" size={24} />,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 70 }
    ]
  },
  {
    name: "DevOps",
    icon: <Cloud className="text-red-600" size={24} />,
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 85 }
    ]
  },
  {
    name: "Security",
    icon: <Lock className="text-red-600" size={24} />,
    skills: [
      { name: "OAuth", level: 85 },
      { name: "JWT", level: 90 },
      { name: "HTTPS", level: 95 }
    ]
  },
  {
    name: "Other",
    icon: <Cpu className="text-red-600" size={24} />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Testing", level: 85 },
      { name: "Agile", level: 90 }
    ]
  }
];

export default Skills;