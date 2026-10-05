import { ShieldCheck, ExternalLink } from 'lucide-react';

const certs = [
  // --- AWS FOUNDATIONAL ---
  {
    title: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    level: 'Foundational',
    issuer: 'Amazon Web Services',
    image: '/certifications/aws-cloud-practitioner.png',
    color: 'from-sky-500/20 to-blue-500/10',
    border: 'border-sky-500/30',
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/YOUR_ID_HERE', // Replace with your link
  },
  {
    title: 'AWS Certified AI Practitioner',
    code: 'AIF-C01',
    level: 'Foundational',
    issuer: 'Amazon Web Services',
    image: '/certifications/aws-ai-practitioner.png',
    color: 'from-purple-500/20 to-pink-500/10',
    border: 'border-purple-500/30',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/YOUR_ID_HERE', // Replace with your link
  },
  // --- AWS ASSOCIATE ---
  {
    title: 'AWS Certified Solutions Architect – Associate',
    code: 'SAA-C03',
    level: 'Associate',
    issuer: 'Amazon Web Services',
    image: '/certifications/aws-solutions-architect-associate.png',
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/30',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/YOUR_ID_HERE', // Replace with your link
  },
  {
    title: 'AWS Certified Developer – Associate',
    code: 'DVA-C02',
    level: 'Associate',
    issuer: 'Amazon Web Services',
    image: '/certifications/aws-developer-associate.png',
    color: 'from-blue-500/20 to-indigo-500/10',
    border: 'border-blue-500/30',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/YOUR_ID_HERE', // Replace with your link
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
            <a
              key={cert.code}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-5 p-6 rounded-lg bg-gradient-to-br ${cert.color} border ${cert.border} hover:scale-[1.015] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer block`}
            >
              {/* Badge Container */}
              <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.04] p-3 ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                <img
                  src={cert.image}
                  alt={`${cert.title} badge`}
                  className="h-full w-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Text Content */}
              <div className="min-w-0 flex-1">
                <div className={`mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold ${cert.badge}`}>
                  <ShieldCheck size={13} />
                  {cert.code}
                </div>
                
                <h3 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                  {cert.title}
                </h3>
                
                <div className="flex items-center justify-between gap-2 mt-1">
                  <p className="text-gray-400 text-sm truncate">{cert.issuer} • {cert.level}</p>
                  
                  {/* Visual hint that the card is a link */}
                  <span className="text-gray-500 group-hover:text-cyan-400 transition-colors flex-shrink-0">
                    <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}