import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experience = [
  {
    company: 'Probus',
    logo: '/logos/probus_logo.svg', // Add your Probus logo to public/logos/
    role: 'Software Development Engineer Intern',
    period: 'Jun 2026 – Aug 2026',
    location: 'Noida, India',
    points: [
      'Contributed to PROLT, an energy trading platform used to manage bilateral bids and contracts.',
      'Built modular backend REST APIs in Java and Spring Boot to process high-volume bids reliably.',
      'Optimized database queries in MySQL using composite indexing to speed up transaction lookups.',
      'Wrote automated unit and integration tests with JUnit and Mockito to validate core business logic.'
    ],
    current: true,
  },
  {
    company: 'Xebia AI',
    logo: '/logos/xebia_logo.png', // Add your Xebia logo to public/logos/
    role: 'Software Engineering Intern',
    period: 'May 2026 – Jun 2026',
    location: 'Remote',
    points: [
      'Explored and utilized various AI tools for software development and automation.',
      'Gained hands-on experience using IDLE and understanding foundational concepts.',
    ],
    current: false,
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-[#0d1428]/20" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Professional Career</p>
          <h2 className="text-4xl font-bold text-white">Experience</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/40 via-teal-400/20 to-transparent" />

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="relative flex gap-6 sm:gap-8 group">
                  <div className={`relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 overflow-hidden ${exp.current ? 'bg-teal-400/20 border-teal-400/60 group-hover:bg-teal-400/30' : 'bg-[#0d1428] border-teal-400/30 group-hover:border-teal-400/50'}`}>
                    {exp.logo ? (
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-[75%] h-[75%] object-contain drop-shadow-md" />
                    ) : (
                      <Briefcase size={20} className={exp.current ? 'text-teal-400' : 'text-teal-300'} />
                    )}
                  </div>

                  <div className={`flex-1 p-5 sm:p-6 rounded-xl transition-all duration-300 border ${exp.current ? 'bg-teal-400/[0.03] border-teal-400/20 hover:border-teal-400/35' : 'bg-white/[0.02] border-white/[0.06] hover:border-white/10'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-bold text-xl text-white mb-1">{exp.role}</h3>
                        <p className="text-teal-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 text-xs text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={13} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 text-sm text-gray-300 list-disc list-outside ml-4">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
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
