import { Github, Linkedin, Mail, Phone, ArrowDown, ChevronRight, Download, Terminal, ShieldCheck, Sparkles } from 'lucide-react';

const metrics = [
  { label: 'Problems', value: '200+' },
  { label: 'AWS certs', value: '2x' },
  { label: 'CGPA', value: '9.2' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050914] via-[#0b1325] to-[#06131a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_45%,rgba(20,184,166,0.12),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_20%,rgba(250,204,21,0.08),transparent_48%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050914] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-300/15 border border-teal-200/30 text-teal-100 text-xs font-semibold mb-5 animate-fade-in shadow-sm shadow-teal-300/10">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse" />
            Full-stack developer • AWS certified • MERN + Terraform
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
            Yash Gupta
          </h1>

          <div className="text-2xl sm:text-3xl font-semibold text-slate-100 mb-5 max-w-2xl">
            I build production-grade web apps, cloud infrastructure, and real-time backend systems.
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-7">
            CS undergraduate at Bennett University with hands-on work across React, Node.js,
            MongoDB, AWS, Docker, Terraform, WebSockets, and secure API design.
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {['RemoteNest: AWS + Terraform', 'Campus Desk: WebSocket concurrency', 'CampusX: real-time marketplace'].map((item) => (
              <span key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="/YASH_RESUME(4).pdf"
              download="YASH_RESUME(4).pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-200 text-[#06131a] font-semibold text-sm hover:bg-amber-100 transition-all duration-200 shadow-lg shadow-amber-200/20"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-300/10 border border-teal-300/30 text-teal-100 font-semibold text-sm hover:bg-teal-300/20 transition-all duration-200"
            >
              View Projects <ChevronRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white font-semibold text-sm hover:border-teal-300/40 hover:text-teal-200 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-lg mb-10">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a href="mailto:yash2804gupta@gmail.com" className="text-slate-500 hover:text-teal-300 transition-colors duration-200" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://github.com/yash-gu" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-teal-300 transition-colors duration-200" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/yash-gu" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-teal-300 transition-colors duration-200" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="tel:+917014864776" className="text-slate-500 hover:text-teal-300 transition-colors duration-200" aria-label="Phone">
              <Phone size={20} />
            </a>
          </div>
        </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-[2rem] bg-teal-300/10 blur-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-[#07111f]/85 p-5 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-teal-300" />
                </div>
                <span className="text-xs text-slate-500">~/yash/portfolio</span>
              </div>
              <div className="space-y-5 pt-5 font-mono text-sm">
                <div>
                  <p className="text-slate-500">$ npm run ship</p>
                  <p className="mt-2 text-teal-200">deploying reliable user experiences...</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <Terminal size={18} className="mb-3 text-teal-300" />
                    <p className="text-white">APIs, auth, sockets</p>
                    <p className="mt-1 text-xs text-slate-500">Node, Express, MongoDB</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <ShieldCheck size={18} className="mb-3 text-amber-200" />
                    <p className="text-white">Cloud foundations</p>
                    <p className="mt-1 text-xs text-slate-500">AWS, Docker, Terraform</p>
                  </div>
                </div>
                <div className="rounded-lg border border-teal-300/20 bg-teal-300/10 p-4">
                  <div className="flex items-center gap-2 text-teal-100">
                    <Sparkles size={16} />
                    <span>Portfolio signal: builder who can own frontend, backend, and deploys.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden flex-col items-center gap-1 text-slate-600 animate-bounce sm:flex">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </div>
      </div>
    </section>
  );
}
