import { useState, useEffect } from 'react';
import { Menu, X, Code2, Download } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0f1e]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <Code2 size={20} className="text-cyan-400" />
          <span className="text-white">Yash<span className="text-cyan-400">.</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/YASH_RESUME(4).pdf"
          download="YASH_RESUME(4).pdf"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-teal-300/40 text-teal-200 text-sm font-medium hover:bg-teal-300/10 transition-all duration-200"
        >
          <Download size={15} /> Resume
        </a>

        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a0f1e]/98 border-t border-white/5 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/YASH_RESUME(4).pdf"
            download="YASH_RESUME(4).pdf"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-teal-300/40 px-4 py-3 text-sm font-semibold text-teal-200 hover:bg-teal-300/10"
            onClick={() => setOpen(false)}
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
