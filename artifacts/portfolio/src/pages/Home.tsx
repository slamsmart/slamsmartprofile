import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const stats = [
  { value: "15+", label: "PROJECTS COMPLETED" },
  { value: "5 yrs", label: "YEARS EXPERIENCE" },
  { value: "Now", label: "AVAILABLE FROM" },
];

const roles = [
  "Mid Software Engineer",
  "Mid Fullstack Engineer",
  "Frontend Engineer",
  "Backend Engineer",
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col w-full"
    >
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 py-10 min-h-[70vh]">
        <div className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
          {/* Star doodles */}
          <svg className="absolute -top-8 -left-8 w-12 h-12 text-foreground/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 10 L50 90 M10 50 L90 50 M25 25 L75 75 M25 75 L75 25" />
          </svg>
          <svg className="absolute top-12 -right-12 w-8 h-8 text-foreground/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 20 L50 80 M20 50 L80 50 M30 30 L70 70 M30 70 L70 30" />
          </svg>
          <svg className="absolute -bottom-4 right-10 w-10 h-10 text-foreground/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 15 L50 85 M15 50 L85 50 M28 28 L72 72 M28 72 L72 28" />
          </svg>

          {/* Stick figure */}
          <div className="relative">
            <div className="absolute -top-16 -right-16 bg-background border-2 border-foreground rounded-2xl p-3 shadow-[2px_2px_0_0_#1a1a1a] z-10 font-handwriting text-2xl transform rotate-3" style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
              Hello! 👋
              <div className="absolute -bottom-2 left-4 w-4 h-4 bg-background border-b-2 border-r-2 border-foreground transform rotate-45" />
            </div>
            <svg viewBox="0 0 200 300" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M100 60 C120 60, 130 80, 130 100 C130 120, 120 140, 100 140 C80 140, 70 120, 70 100 C70 80, 80 60, 100 60 Z" />
              <circle cx="90" cy="95" r="3" fill="currentColor" />
              <circle cx="110" cy="95" r="3" fill="currentColor" />
              <path d="M90 115 Q100 125 110 115" />
              <path d="M100 140 Q105 180 100 220" />
              <path d="M100 150 Q70 140 50 110" />
              <path d="M100 150 Q130 160 140 190" />
              <path d="M100 220 Q80 260 70 290" />
              <path d="M100 220 Q120 260 130 290" />
            </svg>
          </div>
        </div>

        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-bold font-handwriting mb-4 tracking-tight">Your Name</h1>
          <h2 className="text-3xl md:text-4xl font-handwriting text-foreground/80 mb-6">Full Stack Developer (Mobile, Web)</h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-10 text-foreground/90 max-w-lg mx-auto md:mx-0" style={{ letterSpacing: '0.01em' }}>
            Building products that help people and make their lives easier. Passionate about clean code, creative solutions, and turning ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/projects" data-testid="link-view-projects" className="sketchy-button-primary text-center">
              View Projects
            </Link>
            <Link href="/experiences" data-testid="link-my-experience" className="sketchy-button text-center">
              My Experience
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border-t border-b border-foreground/15 py-10 mb-16"
      >
        <div className="grid grid-cols-3 divide-x divide-foreground/15 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 px-6">
              <span className="text-5xl md:text-6xl font-bold font-handwriting leading-none">{s.value}</span>
              <span className="text-xs tracking-widest text-foreground/50 uppercase font-sans text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Looking for hire */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-20 max-w-5xl mx-auto w-full"
      >
        <div className="flex flex-col gap-5 max-w-lg">
          {/* Open to work badge */}
          <div className="inline-flex items-center gap-2 bg-green-500 text-white text-base font-handwriting px-4 py-1.5 rounded-full w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-white inline-block animate-pulse" />
            Open to work
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-handwriting leading-snug">
            Looking for hire?
          </h2>

          <p className="text-lg text-foreground/75 leading-relaxed max-w-md">
            I'm always open to new opportunities. If you're looking for a passionate and skilled software engineer, I'd love to hear from you. Currently available for full-time, part-time, or freelance positions. Let's build something amazing together!
          </p>

          {/* Role tags */}
          <div className="flex flex-wrap gap-3 mt-1">
            {roles.map((role) => (
              <span
                key={role}
                className="text-base font-handwriting border border-foreground/30 px-3 py-1 bg-white/60"
                style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0">
          <Link
            href="/experiences"
            data-testid="link-view-experience"
            className="sketchy-button-primary text-center whitespace-nowrap"
          >
            View My Experience
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
