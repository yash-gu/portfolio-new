import React from 'react';

// Upgraded schema with dynamic Devicon icon classes
const categories = [
  {
    label: 'Languages',
    color: 'cyan',
    skills: [
      { name: 'C++', icon: 'devicon-cplusplus-plain' },
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'SQL', icon: 'devicon-mysql-plain' }, // Fallback icon or plain database representation
      { name: 'Bash', icon: 'devicon-bash-plain' },
    ],
  },
  {
    label: 'Frontend',
    color: 'amber',
    skills: [
      { name: 'React.js', icon: 'devicon-react-original' },
      { name: 'Next.js', icon: 'devicon-nextjs-plain' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original' },
      { name: 'HTML5', icon: 'devicon-html5-plain' },
      { name: 'CSS3', icon: 'devicon-css3-plain' },
    ],
  },
  {
    label: 'Backend',
    color: 'teal',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Express.js', icon: 'devicon-express-original' },
      { name: 'REST APIs', icon: 'devicon-fastapi-plain' }, // Using a structured API symbol variant
      { name: 'Socket.io', icon: 'devicon-socketio-original' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    color: 'emerald',
    skills: [
      { name: 'AWS EC2', icon: 'devicon-amazonwebservices-wordmark' },
      { name: 'AWS S3', icon: 'devicon-amazonwebservices-plain' },
      { name: 'AWS IAM', icon: 'devicon-amazonwebservices-plain' },
      { name: 'VPC', icon: 'devicon-matchbox-plain' }, 
      { name: 'Terraform', icon: 'devicon-terraform-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'Jenkins', icon: 'devicon-jenkins-line' },
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'Linux', icon: 'devicon-linux-plain' },
    ],
  },
  {
    label: 'Databases',
    color: 'cyan',
    skills: [
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
    ],
  },
  {
    label: 'Core CS',
    color: 'amber',
    skills: [
      { name: 'Data Structures & Algorithms', icon: 'devicon-thealgorithms-plain' },
      { name: 'OOP', icon: 'devicon-java-plain' },
      { name: 'DBMS', icon: 'devicon-postgresql-plain' },
      { name: 'Operating Systems', icon: 'devicon-apple-original' },
    ],
  },
];

const colorMap: Record<string, string> = {
  cyan: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20 hover:bg-cyan-400/20',
  amber: 'bg-amber-300/10 text-amber-100 border-amber-200/20 hover:bg-amber-200/20',
  teal: 'bg-teal-400/10 text-teal-300 border-teal-400/20 hover:bg-teal-400/20',
  emerald: 'bg-emerald-400/10 text-emerald-200 border-emerald-300/20 hover:bg-emerald-300/20',
};

export default function Skills() {
  return (
    <>
      {/* 1. REQUIRED: Add the Devicon stylesheet to your project. 
            Alternatively, drop this `<link>` tag inside your HTML/Next.js layout file */}
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" 
      />

      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 bg-[#0d1428]/60" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">What I Work With</p>
            <h2 className="text-4xl font-bold text-white">Technical Skills</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-all duration-300"
              >
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">{cat.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-200 cursor-default ${colorMap[cat.color]}`}
                    >
                      {/* Integrated Font Icon Hook */}
                      <i className={`${s.icon} text-sm`} aria-hidden="true" />
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}