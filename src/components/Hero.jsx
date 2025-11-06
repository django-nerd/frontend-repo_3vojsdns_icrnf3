import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Star className="h-4 w-4 text-yellow-300" />
          <span className="text-sm tracking-wide">Personal Portfolio</span>
        </div>
        <h1 className="font-geist text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Joaquin Ortines
        </h1>
        <p className="mt-6 max-w-3xl text-balance text-base text-white/90 sm:text-lg">
          Hi, I’m a high school writer who loves exploring the contrast between good and evil in my stories. I’m fascinated by how real-world events shape these themes and reveal the complexity of human nature. When I’m not writing, you’ll usually find me at the piano or on the basketball court — both places where I find rhythm, focus, and inspiration for my next story. I also dream of becoming a pilot one day, drawn to the freedom, precision, and perspective that come with flying. Whether I’m crafting a story or studying the skies, I’m always searching for new ways to understand balance, perspective, and the human experience.
        </p>
        <a
          href="#about"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black shadow-lg transition hover:translate-y-0.5 hover:shadow-xl"
        >
          Explore my work
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
