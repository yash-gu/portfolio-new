import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yash2804gupta@gmail.com',
    href: 'mailto:yash2804gupta@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7014864776',
    href: 'tel:+917014864776',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yash-gu',
    href: 'https://linkedin.com/in/yash-gu',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/yash-gu',
    href: 'https://github.com/yash-gu',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(6,182,212,0.06),transparent_70%)]" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Let's Connect</p>
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            I'm open to full-time opportunities, internships, and interesting collaborations.
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-cyan-400/30 hover:bg-cyan-400/[0.03] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-3 group-hover:bg-cyan-400/20 transition-colors duration-300">
                <Icon size={20} className="text-cyan-400" />
              </div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">{label}</span>
              <span className="text-gray-300 text-sm group-hover:text-cyan-400 transition-colors duration-200 break-all">{value}</span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:yash2804gupta@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-cyan-400 text-[#0a0f1e] font-bold text-sm hover:bg-cyan-300 transition-all duration-200 shadow-xl shadow-cyan-400/20 hover:shadow-cyan-300/25 hover:scale-[1.02]"
          >
            <Send size={16} />
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
