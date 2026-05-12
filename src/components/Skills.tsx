const categories = [
  {
    label: 'Languages',
    color: 'cyan',
    skills: ['C++', 'Java', 'JavaScript', 'Python', 'SQL', 'Bash'],
  },
  {
    label: 'Frontend',
    color: 'amber',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend',
    color: 'teal',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io'],
  },
  {
    label: 'Cloud & DevOps',
    color: 'emerald',
    skills: ['AWS EC2', 'AWS S3', 'AWS IAM', 'VPC', 'Terraform', 'Docker', 'Jenkins', 'Git', 'Linux'],
  },
  {
    label: 'Databases',
    color: 'cyan',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    label: 'Core CS',
    color: 'amber',
    skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
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
                    key={s}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-200 cursor-default ${colorMap[cat.color]}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
