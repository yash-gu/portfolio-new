import { Award, Code, Cloud, Zap } from 'lucide-react';

const highlights = [
  { icon: Code, label: '200+ DSA', sub: 'problems solved' },
  { icon: Cloud, label: '2x AWS', sub: 'certified' },
  { icon: Award, label: '9.2 CGPA', sub: 'B.Tech CSE' },
  { icon: Zap, label: 'MERN Stack', sub: 'full-stack dev' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.04),transparent_70%)]" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Get To Know Me</p>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a Computer Science undergraduate at Bennett University building like an engineer
              who cares about product reliability, deployment discipline, and clean system design.
              My stack centers on MERN applications, AWS infrastructure, and real-time backends.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I've automated cloud provisioning with Terraform, designed WebSocket flows for
              concurrent workloads, and deployed containerized services with Docker. The throughline:
              ship software that is secure, observable, and easy for the next engineer to extend.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:yash2804gupta@gmail.com"
                className="px-5 py-2.5 rounded-lg bg-teal-300/10 border border-teal-300/30 text-teal-200 text-sm font-medium hover:bg-teal-300/20 transition-all duration-200"
              >
                Email Me
              </a>
              <a
                href="/Yash_Gupta.pdf"
                download="Yash_Gupta.pdf"
                className="px-5 py-2.5 rounded-lg border border-amber-200/30 text-amber-100 text-sm font-medium hover:border-amber-200/60 hover:bg-amber-200/10 transition-all duration-200"
              >
                Resume
              </a>
              <a
                href="https://linkedin.com/in/yash-gu"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg border border-white/10 text-gray-300 text-sm font-medium hover:border-white/20 hover:text-white transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="group p-6 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-teal-300/30 hover:bg-teal-300/[0.04] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-300/10 flex items-center justify-center mb-4 group-hover:bg-teal-300/20 transition-colors duration-300">
                  <Icon size={20} className="text-teal-200" />
                </div>
                <div className="text-xl font-bold text-white mb-1">{label}</div>
                <div className="text-gray-500 text-sm">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
