import { Calendar } from 'lucide-react';

const education = [
  {
    school: 'Bennett University',
    degree: 'B.Tech in Computer Science Engineering',
    period: '2024 – Present',
    detail: 'CGPA: 9.2 / 10',
    logo: '/logos/bennett-university.png', 
    current: true,
  },
  {
    school: 'Evolution International School',
    degree: 'Class XII',
    period: '2023',
    detail: '',
    logo: '/logos/evolution-international.png', 
    current: false,
  },
  {
    school: 'Ryan International School',
    degree: 'Class X',
    period: '2021', 
    detail: 'Percentage: 90.2%',
    logo: '/logos/ryan-international.png', 
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-[#0d1428]/40" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Academic Background</p>
          <h2 className="text-4xl font-bold text-white">Education</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent" />

            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.school} className="relative flex gap-6 group">
                  
                  {/* --- FIXED LOGO CONTAINER --- */}
                  <div className={`relative z-60 w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0 p-2 ring-4 ring-[#0d1428] transition-all duration-300 bg-white ${edu.current ? 'border border-cyan-400/60 shadow-[0_0_15px_rgba(34,211,238,0.15)]' : 'border border-white/10 group-hover:border-white/20'}`}>
                    <img 
                      src={edu.logo} 
                      alt={`${edu.school} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className={`flex-1 p-5 rounded-xl transition-all duration-300 border ${edu.current ? 'bg-cyan-400/[0.03] border-cyan-400/20 hover:border-cyan-400/35' : 'bg-white/[0.02] border-white/[0.06] hover:border-white/10'}`}>
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                      <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">{edu.school}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Calendar size={12} />
                        {edu.period}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-2">{edu.degree}</p>
                    
                    <div className="flex items-center flex-wrap gap-2">
                      {edu.detail && (
                        <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold ${edu.current ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20' : 'bg-white/5 text-gray-400 border border-white/5'}`}>
                          {edu.detail}
                        </span>
                      )}
                      
                      {edu.current && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs border border-emerald-400/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}