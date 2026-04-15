import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "TypeScript", level: "Expert", percent: 90 },
      { name: "React.js", level: "Expert", percent: 90 },
      { name: "Vue.js", level: "Advanced", percent: 80 },
      { name: "Tailwind CSS", level: "Expert", percent: 90 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Expert", percent: 85 },
      { name: "NestJS", level: "Expert", percent: 90 },
      { name: "Golang", level: "Intermediate", percent: 70 },
      { name: "Python", level: "Advanced", percent: 80 }
    ]
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", level: "Advanced", percent: 80 },
      { name: "Expo", level: "Advanced", percent: 80 }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", level: "Advanced", percent: 80 },
      { name: "MongoDB", level: "Advanced", percent: 80 },
      { name: "MySQL", level: "Advanced", percent: 80 },
      { name: "Redis", level: "Intermediate", percent: 70 }
    ]
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", level: "Advanced", percent: 75 },
      { name: "GitHub Actions", level: "Advanced", percent: 75 },
      { name: "AWS", level: "Intermediate", percent: 65 }
    ]
  }
];

const categories = ["All", ...skillsData.map(s => s.category)];

export default function Skills() {
  const [filter, setFilter] = useState("All");

  const filteredSkills = filter === "All" 
    ? skillsData 
    : skillsData.filter(s => s.category === filter);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-4xl mx-auto"
    >
      <h1 className="text-5xl font-bold font-handwriting mb-8 text-center md:text-left">Skills & Toolkit</h1>
      
      <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1 text-xl font-handwriting transition-colors duration-200 rounded-sm border-2 ${
              filter === cat 
                ? 'bg-foreground text-background border-foreground' 
                : 'bg-background text-foreground border-foreground/30 hover:border-foreground'
            }`}
            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        {filteredSkills.map((section) => (
          <div key={section.category} className="sketchy-border p-6 md:p-8 bg-white/50">
            <h2 className="text-4xl font-handwriting font-bold mb-8 inline-block border-b-4 border-foreground/20 pb-1" style={{ borderStyle: 'double' }}>
              {section.category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {section.items.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-2xl font-bold font-handwriting">{skill.name}</span>
                    <span className="text-lg font-handwriting text-foreground/60">{skill.level}</span>
                  </div>
                  <div className="h-6 w-full border-2 border-foreground rounded relative overflow-hidden" style={{ borderRadius: '2px 4px 2px 4px' }}>
                    <div 
                      className="absolute top-0 left-0 h-full pattern-diagonal border-r-2 border-foreground transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.percent}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
