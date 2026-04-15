import React from 'react';
import { Link, useLocation } from 'wouter';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-12">
      <header className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 md:mb-20">
        <Link href="/" className="text-4xl font-bold font-handwriting hover:rotate-2 transition-transform">
          dev.
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xl font-handwriting">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`hover:-translate-y-0.5 transition-transform ${
                location === link.href 
                  ? 'border-b-2 border-foreground underline underline-offset-4 decoration-2 decoration-foreground' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <footer className="mt-20 pt-8 border-t-2 border-foreground/20 text-center font-handwriting text-lg text-foreground/60 mb-8" style={{ borderRadius: '50% 50% 0 0 / 5px 5px 0 0' }}>
        <p>Hand-drawn with bits and bytes. © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
