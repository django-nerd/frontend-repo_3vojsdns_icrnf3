import React from 'react';
import { Target, PenTool, Plane, Piano, BookOpen, GraduationCap, Sparkles, Mail } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">About me</h2>
        <p className="mt-2 text-white/70">What drives my craft and where I'm headed.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="inline-flex items-center gap-2 text-xl font-medium"><Sparkles className="h-5 w-5 text-yellow-300"/>Strengths</h3>
          <ul className="mt-4 space-y-2 text-white/90">
            <li>• Deep thinker</li>
            <li>• Expressive</li>
            <li>• Balanced</li>
            <li>• Disciplined</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="inline-flex items-center gap-2 text-xl font-medium"><Target className="h-5 w-5 text-emerald-300"/>Goals</h3>
          <ul className="mt-4 space-y-2 text-white/90">
            <li>• Inspire people with my works</li>
            <li>• Experiment with genres like poetry and short stories</li>
            <li>• Study aviation and earn my pilot's license</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function AcademicsSection() {
  return (
    <section id="academics" className="relative mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">Academics</h2>
        <p className="mt-2 text-white/70">Where learning meets passion.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="inline-flex items-center gap-2 text-xl font-medium"><GraduationCap className="h-5 w-5 text-sky-300"/>Current Focus</h3>
          <p className="mt-3 text-white/90">I'm a STEM student who is also taking up IB English Literature as a certificate course.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="inline-flex items-center gap-2 text-xl font-medium"><Piano className="h-5 w-5 text-pink-300"/>Performance</h3>
          <p className="mt-3 text-white/90">I have performed piano multiple times in the University of the Philippines.</p>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">Projects & Works</h2>
        <p className="mt-2 text-white/70">Stories that explore contrast, rhythm, and resolve.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[{
          title: 'This is Your Captain, Saying Goodbye',
          desc: 'A reflective journey that navigates loss, perspective, and the weight of farewell.'
        }, {
          title: 'Hollow Coral',
          desc: 'A meditation on fragility and form—where beauty shelters emptiness and echoes endure.'
        }].map((b) => (
          <article key={b.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none"/>
            <h3 className="text-xl font-medium">{b.title}</h3>
            <p className="mt-3 text-white/90">{b.desc}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
              <PenTool className="h-4 w-4"/>
              Creative writing
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-2 text-white/70">Let’s build something meaningful.</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex items-center gap-3">
            <Mail className="h-5 w-5 text-emerald-300"/>
            <div>
              <p className="text-sm text-white/70">Email</p>
              <a href="mailto:bentoworqs@gmail.com" className="text-lg font-medium hover:underline">bentoworqs@gmail.com</a>
            </div>
          </div>
          <a
            href="mailto:bentoworqs@gmail.com"
            className="mt-4 inline-flex rounded-full bg-white px-5 py-2 font-medium text-black shadow hover:translate-y-0.5 hover:shadow-md sm:mt-0"
          >
            Reach out
          </a>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-400/10 via-sky-400/10 to-purple-400/10 p-6">
        <div className="flex flex-wrap items-center gap-4 text-white/80">
          <Plane className="h-5 w-5"/>
          <p className="text-sm">Dreaming in flight paths, composing at the keys, writing between light and shadow.</p>
        </div>
      </div>
    </section>
  );
}
