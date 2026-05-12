import { ShieldCheck } from 'lucide-react';

const certs = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    code: 'SAA-C03',
    level: 'Associate',
    issuer: 'Amazon Web Services',
    image: '/certifications/aws-solutions-architect-associate.png',
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/30',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    level: 'Foundational',
    issuer: 'Amazon Web Services',
    image: '/certifications/aws-cloud-practitioner.png',
    color: 'from-sky-500/20 to-blue-500/10',
    border: 'border-sky-500/30',
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-[#0d1428]/50" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Verified Credentials</p>
          <h2 className="text-4xl font-bold text-white">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certs.map((cert) => (
            <div
              key={cert.code}
              className={`flex items-center gap-5 p-6 rounded-lg bg-gradient-to-br ${cert.color} border ${cert.border} hover:scale-[1.015] hover:bg-white/[0.04] transition-all duration-300`}
            >
              <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.04] p-3 ring-1 ring-white/10">
                <img
                  src={cert.image}
                  alt={`${cert.title} badge`}
                  className="h-full w-full object-contain drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <div className={`mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold ${cert.badge}`}>
                  <ShieldCheck size={13} />
                  {cert.code}
                </div>
                <h3 className="text-white font-bold text-lg leading-snug mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer} • {cert.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
