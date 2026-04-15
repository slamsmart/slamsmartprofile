import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    period: "July 2023 – Present",
    location: "Remote",
    role: "Senior Full Stack Developer",
    company: "Tech Company",
    points: [
      "Developed and maintained 5+ main products (100K+ users)",
      "Improved performance by 60% through optimization",
      "Architected scalable microservices",
      "Led frontend migration to React"
    ]
  },
  {
    period: "Jan 2021 – June 2023",
    location: "Remote",
    role: "Full Stack Developer",
    company: "Startup Inc.",
    points: [
      "Built 10+ web and mobile apps for clients",
      "Delivered projects on time and within budget"
    ]
  }
];

export default function Experiences() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto w-full"
    >
      <div className="flex justify-between items-end mb-12">
        <h1 className="text-5xl font-bold font-handwriting">My Experience</h1>
        <button className="sketchy-button text-base hidden sm:block">
          Download Resume
        </button>
      </div>

      <div className="relative border-l-4 border-foreground/30 pl-8 md:pl-12 ml-4 md:ml-8 space-y-16" style={{ borderStyle: 'dashed' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Diamond bullet */}
            <div className="absolute -left-[42px] md:-left-[58px] top-1 w-6 h-6 bg-background border-4 border-foreground transform rotate-45" style={{ borderRadius: '2px' }}></div>
            
            <div className="mb-2 font-handwriting text-xl text-foreground/60">
              {exp.period} | {exp.location}
            </div>
            
            <div className="sketchy-border p-6 md:p-8 bg-white/50">
              <h3 className="text-3xl font-handwriting font-bold mb-1">{exp.role}</h3>
              <h4 className="text-2xl font-handwriting text-foreground/80 mb-6">@ {exp.company}</h4>
              
              <ul className="space-y-3 text-xl">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-handwriting text-foreground/50 text-xl mt-1">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center sm:hidden">
        <button className="sketchy-button w-full">
          Download Resume
        </button>
      </div>
    </motion.div>
  );
}
