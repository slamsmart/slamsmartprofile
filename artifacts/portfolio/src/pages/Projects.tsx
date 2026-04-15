import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Handwritten UI",
    type: "PUBLIC",
    status: "In Progress",
    tech: ["React.js", "Rough.js", "Tailwind CSS"],
    description: "UI component library with handwritten style",
    url: null
  },
  {
    title: "E-Commerce Platform",
    type: "PUBLIC",
    status: "Live",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    description: "Full-featured e-commerce with admin dashboard, 50K+ users",
    url: "https://example.com"
  },
  {
    title: "Task Management App",
    type: "INTERNAL",
    status: "Live",
    tech: ["React", "Node.js", "MongoDB"],
    description: "Real-time collaborative task manager with AI suggestions",
    url: "https://example.com"
  },
  {
    title: "Mobile Fitness Tracker",
    type: "PUBLIC",
    status: "In Progress",
    tech: ["React Native", "Expo", "Firebase"],
    description: "Cross-platform fitness tracking with workout plans",
    url: null
  },
  {
    title: "Open Source CLI Tool",
    type: "PUBLIC",
    status: "Archived",
    tech: ["Golang", "Docker"],
    description: "Developer productivity CLI with 2K+ GitHub stars",
    url: "https://github.com"
  },
  {
    title: "Blog Platform",
    type: "INTERNAL",
    status: "Archived",
    tech: ["Gatsby", "GraphQL", "Contentful"],
    description: "Headless CMS blog with MDX support",
    url: null
  }
];

const categories = ["All", "Live", "In Progress", "Archived"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-800 border-green-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800 border-yellow-800";
      case "Archived": return "bg-gray-200 text-gray-800 border-gray-800";
      default: return "bg-foreground/5 text-foreground border-foreground/20";
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <h1 className="text-5xl font-bold font-handwriting mb-8 text-center md:text-left">Projects</h1>
      
      <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
        {categories.map(cat => (
          <button
            key={cat}
            data-testid={`filter-${cat.toLowerCase().replace(' ', '-')}`}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, i) => {
          const CardWrapper = project.url
            ? motion.a
            : motion.div;

          const linkProps = project.url
            ? {
                href: project.url,
                target: "_blank",
                rel: "noopener noreferrer",
                'data-testid': `project-card-${project.title.toLowerCase().replace(/\s+/g, '-')}`,
              }
            : {
                'data-testid': `project-card-${project.title.toLowerCase().replace(/\s+/g, '-')}`,
              };

          return (
            <CardWrapper
              key={project.title}
              {...(linkProps as any)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={project.url ? { rotate: [-0.5, 0.5], transition: { duration: 0.2 } } : undefined}
              className={`sketchy-border p-6 flex flex-col h-full bg-white/50 relative overflow-hidden group ${project.url ? 'cursor-pointer hover:shadow-[5px_5px_0_0_#1a1a1a] transition-shadow duration-150' : ''}`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-handwriting text-lg px-2 py-0.5 border-2 border-foreground/20 text-foreground/60 rounded" style={{ borderRadius: '2px 4px 2px 4px' }}>
                  {project.type}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`font-handwriting text-lg px-2 py-0.5 border-2 rounded ${getStatusColor(project.status)}`} style={{ borderRadius: '4px 2px 4px 2px' }}>
                    {project.status}
                  </span>
                  {project.url && (
                    <ExternalLink
                      size={16}
                      className="text-foreground/40 group-hover:text-foreground transition-colors duration-150"
                      aria-label="Open project"
                    />
                  )}
                </div>
              </div>
              
              <h3 className="text-3xl font-handwriting font-bold mb-3">{project.title}</h3>
              <p className="text-xl mb-6 flex-1 text-foreground/80">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-lg font-handwriting border-b-2 border-foreground/30">
                    #{t}
                  </span>
                ))}
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </motion.div>
  );
}
