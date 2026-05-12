import { Trophy, Users, Bot } from 'lucide-react';

export default function Hackathons() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Beyond the Code</p>
          <h2 className="text-4xl font-bold text-white">Hackathons & Competitive Programming</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Hackathon card */}
          <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-cyan-400/25 transition-all duration-300">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
                <Trophy size={22} className="text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-white text-lg">Smart Bennett Hackathon</h3>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-400/10 text-emerald-400 text-xs font-medium border border-emerald-400/20">2026</span>
                </div>
                <p className="text-emerald-400 text-sm font-medium">Participant</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-300 font-semibold mb-1">Beej Setu — Agriculture Technology Solution</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Collaborated in a 6-member team to build a gamified platform simplifying access to government agricultural
                schemes. Integrated an AI chatbot to help farmers understand policy eligibility and documentation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Users size={13} className="text-gray-600" />
                6-member team
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Bot size={13} className="text-gray-600" />
                AI chatbot integrated
              </div>
            </div>
          </div>

          {/* Competitive programming card */}
          <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-cyan-400/25 transition-all duration-300">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-cyan-400">
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Competitive Programming</h3>
                <p className="text-cyan-400 text-sm font-medium">LeetCode & CodeChef</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="p-4 rounded-xl bg-cyan-400/5 border border-cyan-400/10 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">200+</div>
                <div className="text-xs text-gray-500">DSA Problems Solved</div>
              </div>
              <div className="p-4 rounded-xl bg-amber-400/5 border border-amber-400/10 text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">1★</div>
                <div className="text-xs text-gray-500">CodeChef Rating</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Solved 200+ DSA problems across LeetCode and CodeChef. Earned 1-star rating through consistent
              participation in competitive programming contests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
