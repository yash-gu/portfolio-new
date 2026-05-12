import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Code2 size={18} className="text-cyan-400" />
          <span className="text-white">Yash<span className="text-cyan-400">.</span></span>
        </div>

        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Yash Gupta. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="mailto:yash2804gupta@gmail.com" className="text-gray-600 hover:text-cyan-400 transition-colors duration-200" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://github.com/yash-gu" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-cyan-400 transition-colors duration-200" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/yash-gu" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-cyan-400 transition-colors duration-200" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
