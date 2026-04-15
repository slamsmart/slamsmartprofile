import React, { useCallback } from 'react';
import { motion } from 'framer-motion';

function downloadResume() {
  const resumeHTML = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Slamet Abdullah - Resume</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; max-width: 800px; margin: 0 auto; padding: 40px; font-size: 14px; line-height: 1.5; }
  h1 { font-size: 28px; margin-bottom: 4px; }
  h2 { font-size: 18px; border-bottom: 2px solid #1a1a1a; padding-bottom: 4px; margin: 20px 0 12px; }
  h3 { font-size: 15px; margin-bottom: 2px; }
  .subtitle { font-size: 16px; color: #444; margin-bottom: 6px; }
  .contact { font-size: 13px; color: #555; margin-bottom: 4px; }
  .period { font-size: 13px; color: #666; margin-bottom: 6px; }
  .entry { margin-bottom: 16px; }
  ul { margin-left: 20px; margin-top: 4px; }
  li { margin-bottom: 3px; }
  .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; }
  .skill-cat { font-weight: 600; }
  @media print { body { padding: 20px; } }
</style></head><body>
<h1>Slamet Abdullah</h1>
<p class="subtitle">Software Engineer (Web App & Public Sector Innovation)</p>
<p class="contact">slamet.abdullah@gmail.com | +62 812-3456-1017 | github.com/slamsmart</p>
<p class="contact">Building products that help people and make their lives easier.</p>

<h2>Experience</h2>
<div class="entry">
  <h3>Senior Full Stack Developer — Tech Company</h3>
  <p class="period">July 2023 – Present | Remote</p>
  <ul>
    <li>Developed and maintained 5+ main products (100K+ users)</li>
    <li>Improved performance by 60% through optimization</li>
    <li>Architected scalable microservices</li>
    <li>Led frontend migration to React</li>
  </ul>
</div>
<div class="entry">
  <h3>Full Stack Developer — Startup Inc.</h3>
  <p class="period">Jan 2021 – June 2023 | Remote</p>
  <ul>
    <li>Built 10+ web and mobile apps for clients</li>
    <li>Delivered projects on time and within budget</li>
  </ul>
</div>

<h2>Skills</h2>
<div class="skills-grid">
  <div><span class="skill-cat">Frontend:</span> TypeScript, React.js, Vue.js, Tailwind CSS</div>
  <div><span class="skill-cat">Backend:</span> Node.js, NestJS, Golang, Python</div>
  <div><span class="skill-cat">Mobile:</span> React Native, Expo</div>
  <div><span class="skill-cat">Database:</span> PostgreSQL, MongoDB, MySQL, Redis</div>
  <div><span class="skill-cat">DevOps:</span> Docker, GitHub Actions, AWS</div>
</div>

<h2>Availability</h2>
<p>Open to full-time, part-time, or freelance positions. 10+ projects completed, 2+ years experience.</p>
</body></html>`;

  const blob = new Blob([resumeHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, '_blank');
  if (win) {
    win.onload = () => {
      setTimeout(() => { win.print(); URL.revokeObjectURL(url); }, 300);
    };
  } else {
    // Fallback: direct download as HTML
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Slamet_Abdullah_Resume.html';
    a.click();
    URL.revokeObjectURL(url);
  }
}

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
        <button onClick={downloadResume} className="sketchy-button text-base hidden sm:block">
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
        <button onClick={downloadResume} className="sketchy-button w-full">
          Download Resume
        </button>
      </div>
    </motion.div>
  );
}
