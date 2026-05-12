import { Github, ExternalLink, Server, Globe, BookOpen, ShoppingBag } from 'lucide-react';

const projects = [
  {
    title: 'RemoteNest',
    subtitle: 'Property Management Platform',
    year: '2026',
    icon: Globe,
    stack: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Terraform'],
    description:
      'Cloud-ready property management platform with JWT authentication, RBAC, and automated AWS provisioning. Infrastructure covers EC2, S3, IAM, and VPC so the product can move from feature work to deploys without manual setup.',
    highlights: ['JWT auth & RBAC', 'Terraform IaC', 'AWS foundations', 'Modular REST APIs'],
    featured: true,
  },
  {
    title: 'Campus Desk',
    subtitle: 'Library Seat Booking System',
    year: '2026',
    icon: BookOpen,
    stack: ['React.js', 'Node.js', 'MongoDB', 'WebSockets'],
    description:
      'Real-time library seat reservation system with interactive floor mapping. WebSocket synchronization keeps seat state consistent during concurrent booking attempts.',
    highlights: ['Real-time sync', 'Digital floor map', 'Concurrent safety', 'Responsive UI'],
    github: 'https://github.com/yash-gu',
    featured: true,
  },
  {
    title: 'CampusX',
    subtitle: 'Real-Time Marketplace',
    year: '2026',
    icon: ShoppingBag,
    stack: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Socket.io'],
    description:
      'Peer-to-peer campus marketplace with live messaging, secure product listings, and AWS-backed media storage. Socket.io keeps buyer-seller conversations responsive.',
    highlights: ['P2P marketplace', 'Real-time chat', 'AWS EC2 + S3', 'Secure auth'],
    demo: '#',
    featured: true,
  },
];

const sideProjects = [
  {
    title: 'Audible Eyes',
    subtitle: 'PDF to Speech',
    year: '2026',
    stack: ['Python', 'PyPDF2', 'Text-to-Speech'],
    description: 'Accessibility-focused app converting multilingual PDF documents into speech output.',
    github: 'https://github.com/yash-gu',
  },
  {
    title: 'Calorie Tracker',
    subtitle: 'Desktop Application',
    year: '2025',
    stack: ['Java', 'Swing', 'Multithreading'],
    description: 'Desktop-based calorie and fitness tracking app with BMI analytics and reminder scheduling.',
    github: 'https://github.com/yash-gu',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(6,182,212,0.04),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
        </div>

        {/* Main projects */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {projects.map(({ title, subtitle, year, icon: Icon, stack, description, highlights, github, demo }) => (
            <div
              key={title}
              className="group relative flex flex-col p-6 rounded-lg bg-white/[0.02] border border-white/[0.07] hover:border-teal-300/30 hover:bg-teal-300/[0.02] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-300/10 flex items-center justify-center group-hover:bg-teal-300/20 transition-colors duration-300">
                  <Icon size={20} className="text-teal-200" />
                </div>
                <span className="text-xs text-amber-100/60 font-medium">{year}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
              <p className="text-teal-200 text-xs font-medium mb-3">{subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>

              <ul className="grid grid-cols-2 gap-1.5 mb-5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-1.5 text-xs text-gray-500">
                    <span className="w-1 h-1 rounded-full bg-amber-200/70 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {stack.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-gray-400 text-xs border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                {github && (
                  <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-400 transition-colors duration-200">
                    <Github size={14} /> GitHub
                  </a>
                )}
                {demo && (
                  <a href={demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-400 transition-colors duration-200">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Side projects */}
        <h3 className="text-lg font-semibold text-gray-300 mb-5 flex items-center gap-2">
          <Server size={18} className="text-teal-200" /> Side Projects
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {sideProjects.map(({ title, subtitle, year, stack, description, github }) => (
            <div
              key={title}
              className="group flex flex-col p-5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-teal-300/25 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white">{title}</h4>
                <span className="text-xs text-gray-600">{year}</span>
              </div>
              <p className="text-teal-200 text-xs font-medium mb-2">{subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-3 flex-1">{description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {stack.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-gray-500 text-xs">
                    {t}
                  </span>
                ))}
              </div>
              {github && (
                <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-400 transition-colors duration-200">
                  <Github size={13} /> GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
