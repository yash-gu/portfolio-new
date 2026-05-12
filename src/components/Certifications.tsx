import { ShieldCheck } from 'lucide-react';

const certs = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    code: 'SAA-C03',
    issuer: 'Amazon Web Services',
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/30',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    issuer: 'Amazon Web Services',
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

        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-3xl mx-auto">
          {certs.map((cert) => (
            <div
              key={cert.code}
              className={`flex-1 p-7 rounded-2xl bg-gradient-to-br ${cert.color} border ${cert.border} hover:scale-[1.02] transition-all duration-300`}
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold mb-5 ${cert.badge}`}>
                <ShieldCheck size={13} />
                {cert.code}
              </div>
              <h3 className="text-white font-bold text-lg leading-snug mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
