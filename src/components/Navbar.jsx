import React from 'react';
import { Home, User, BookOpen, FolderOpen, Mail } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#academics', label: 'Academics', icon: BookOpen },
  { href: '#projects', label: 'Projects', icon: FolderOpen },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/40 backdrop-blur border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
        <a href="#home" className="font-geist text-lg font-semibold tracking-wide">J. Ortines</a>
        <ul className="hidden gap-6 md:flex">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex rounded-full bg-white px-4 py-2 text-xs font-medium text-black shadow">Get in touch</a>
      </nav>
    </header>
  );
}
