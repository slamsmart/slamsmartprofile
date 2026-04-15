import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { FaXTwitter, FaGithub, FaInstagram, FaDiscord, FaYoutube, FaFacebook, FaWhatsapp, FaEnvelope, FaThreads } from 'react-icons/fa6';

const socialLinks = [
  { href: "mailto:slamet.abdullah@gmail.com", icon: FaEnvelope, label: "Email" },
  { href: "https://wa.me/6281234561017", icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://x.com/slamsmart", icon: FaXTwitter, label: "X" },
  { href: "https://github.com/slamsmart", icon: FaGithub, label: "GitHub" },
  { href: "https://www.instagram.com/slamsmart/", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.threads.com/@slamsmart", icon: FaThreads, label: "Threads" },
  { href: "https://discord.com/users/1074270846408990760", icon: FaDiscord, label: "Discord" },
  { href: "https://www.youtube.com/@SlamsmartOfficial", icon: FaYoutube, label: "YouTube" },
  { href: "https://www.facebook.com/slamsmart.abdullah", icon: FaFacebook, label: "Facebook" },
];

const stats = [
  { value: "10+", label: "PROJECTS COMPLETED" },
  { value: "2 yrs", label: "YEARS EXPERIENCE" },
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
        <div className="relative flex-shrink-0 flex items-center justify-center">
          {/* Star doodles */}
          <svg className="absolute -top-8 -left-8 w-12 h-12 text-foreground/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 10 L50 90 M10 50 L90 50 M25 25 L75 75 M25 75 L75 25" />
          </svg>
          <svg className="absolute top-12 -right-6 w-8 h-8 text-foreground/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 20 L50 80 M20 50 L80 50 M30 30 L70 70 M30 70 L70 30" />
          </svg>
          <svg className="absolute -bottom-4 left-10 w-10 h-10 text-foreground/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 15 L50 85 M15 50 L85 50 M28 28 L72 72 M28 72 L72 28" />
          </svg>

          {/* Floating hero figure */}
          <motion.img
            src="/hero-figure.png"
            alt="Slamet Abdullah illustration"
            className="w-72 md:w-96 select-none"
            style={{ filter: 'none', boxShadow: 'none', WebkitFilter: 'none' }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            draggable={false}
          />
        </div>

        <div className="max-w-xl text-center md:text-left">
          <p className="text-2xl md:text-3xl font-handwriting text-foreground/60 mb-1">Hi, I'm</p>
          <h1 className="text-6xl md:text-8xl font-bold font-handwriting mb-4 tracking-tight">Slamet Abdullah</h1>
          <h2 className="text-3xl md:text-4xl font-handwriting text-foreground/80 mb-6">Software Engineer (Web App & Public Sector Innovation)</h2>
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

          <div className="flex gap-5 mt-6 justify-center md:justify-start">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-testid={`hero-social-${label.toLowerCase()}`}
                className="text-foreground/40 hover:text-foreground hover:-translate-y-1 hover:rotate-6 transition-all duration-150 inline-block"
              >
                <Icon size={20} />
              </a>
            ))}
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
