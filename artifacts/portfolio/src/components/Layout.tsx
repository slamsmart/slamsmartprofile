import React from 'react';
import { Link, useLocation } from 'wouter';
import { FaXTwitter, FaGithub, FaInstagram, FaDiscord, FaYoutube, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';

const socialLinks = [
  { href: "mailto:slamet.abdullah@gmail.com", icon: FaEnvelope, label: "Email" },
  { href: "https://wa.me/6281234561017", icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://x.com/slamsmart", icon: FaXTwitter, label: "X / Twitter" },
  { href: "https://github.com/slamsmart", icon: FaGithub, label: "GitHub" },
  { href: "https://www.instagram.com/slamsmart/", icon: FaInstagram, label: "Instagram" },
  { href: "https://discord.com/users/1074270846408990760", icon: FaDiscord, label: "Discord" },
  { href: "https://www.youtube.com/@SlamsmartOfficial", icon: FaYoutube, label: "YouTube" },
  { href: "https://www.facebook.com/slamsmart.abdullah", icon: FaFacebook, label: "Facebook" },
];

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
      <footer className="mt-20 pt-8 border-t-2 border-foreground/20 text-center mb-8">
        <div className="flex justify-center gap-5 mb-5">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              data-testid={`social-${label.toLowerCase().replace(/[\s/]/g, '-')}`}
              className="text-foreground/50 hover:text-foreground transition-colors duration-150 hover:-translate-y-1 hover:rotate-6 inline-block transition-transform"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
        <p className="font-handwriting text-lg text-foreground/50">
          Hand-drawn with bits and bytes. © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
