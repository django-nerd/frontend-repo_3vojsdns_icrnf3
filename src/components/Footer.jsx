import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black/60 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/70">© {year} Joaquin Ortines. All rights reserved.</p>
          <div className="text-xs text-white/50">Built with care — writing, music, and flight.</div>
        </div>
      </div>
    </footer>
  );
}
