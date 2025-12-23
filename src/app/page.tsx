import Link from 'next/link';
import { ArrowRight, Brain, Code, Cloud, Users, CheckCircle2, Globe, Shield, Star, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-[#020617] pt-28 pb-40 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8 hover:bg-slate-800 hover:border-emerald-500/60 transition-all cursor-default shadow-lg shadow-emerald-900/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Transforming the Way You Do Business
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
            Make a Good Plan & <br />
            <span className="animated-gradient-text drop-shadow-sm">Grow Your Business.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            We go beyond providing services—we build partnerships. Leverage our expertise in
            <span className="text-slate-200 font-medium"> AI, Custom Software, and Cloud Solutions</span> to align your technology with your business goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span>Get Free Consultancy</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/programs"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>

          {/* Cards Floating Effect */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-20 h-20 -bottom-1"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-80">
              {[
                { l: 'E-Certified', s: 'Excellence in IT', i: <Shield className="w-6 h-6 text-emerald-400" /> },
                { l: 'Global Delivery', s: 'USA, India, Vietnam', i: <Globe className="w-6 h-6 text-blue-400" /> },
                { l: 'Innovation', s: 'AI & Blockchain', i: <Zap className="w-6 h-6 text-yellow-400" /> },
                { l: 'Reliability', s: 'Client-Centric', i: <Star className="w-6 h-6 text-purple-400" /> },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-white/5 p-4 rounded-xl backdrop-blur-md flex flex-col items-center justify-center gap-2 hover:bg-slate-800/50 transition-colors">
                  <div className="p-2 bg-slate-800 rounded-lg">{item.i}</div>
                  <div className="font-semibold text-white">{item.l}</div>
                  <div className="text-xs text-slate-500">{item.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Beautiful Cards */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Our Expertise</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Explore Tailored IT Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our mission is to be the catalyst for your transformation by providing unparalleled solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Strategy & Consulting',
                desc: 'Craft a roadmap to success. We analyze your objectives and identify AI opportunities to make data-driven predictions.',
                icon: <Brain size={28} className="text-white" />,
                bg: 'bg-gradient-to-br from-purple-500 to-indigo-600',
                link: '/programs'
              },
              {
                title: 'Custom Software',
                desc: 'Tailored to meet unique needs. Our software services ensure your applications are strategic assets driving success.',
                icon: <Code size={28} className="text-white" />,
                bg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
                link: '/programs'
              },
              {
                title: 'Cloud Solutions',
                desc: 'Scalable and secure cloud infrastructure to foster collaboration and flexibility in today’s dynamic environment.',
                icon: <Cloud size={28} className="text-white" />,
                bg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
                link: '/programs'
              },
              {
                title: 'Staff Augmentation',
                desc: 'Full-service staffing for fortune clients. We provide contingent staffing and outsourcing services.',
                icon: <Users size={28} className="text-white" />,
                bg: 'bg-gradient-to-br from-orange-500 to-red-600',
                link: '/jobs'
              },
              {
                title: 'Global IT Services',
                desc: 'Web-based solutions, application development, and establishing dedicated offshore software centers.',
                icon: <Globe size={28} className="text-white" />,
                bg: 'bg-gradient-to-br from-pink-500 to-rose-600',
                link: '/about'
              },
              {
                title: 'QA and Testing',
                desc: 'Rigorous testing processes to ensure the quality and reliability of software solutions.',
                icon: <Shield size={28} className="text-white" />,
                bg: 'bg-gradient-to-br from-slate-600 to-slate-800',
                link: '/projects'
              }
            ].map((card, i) => (
              <div key={i} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden">
                {/* Gradient Border Effect on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/20 rounded-2xl transition-all pointer-events-none"></div>

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${card.bg} group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">{card.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">{card.desc}</p>

                <Link href={card.link} className="inline-flex items-center text-slate-900 font-semibold text-sm group-hover:text-emerald-600 transition-colors">
                  Read more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props with Glassmorphism */}
      <section className="py-24 bg-[#020617] relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm font-medium mb-6 border border-emerald-500/20">
                Why Choose Us?
              </div>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                We go beyond providing services.<br />
                <span className="text-emerald-400">We build partnerships.</span>
              </h2>
              <p className="text-slate-400 mb-8 text-lg font-light">
                Choosing the right IT partner is a strategic decision. Here’s why we stand out in a crowded landscape.
              </p>

              <div className="space-y-6">
                {[
                  { t: 'Innovation', d: 'Embracing the latest technologies like AI and Blockchain.' },
                  { t: 'Client-Centric', d: 'Your success is our priority. We work closely to understand unique challenges.' },
                  { t: 'Reliability', d: 'Count on us for reliable, scalable, and secure IT solutions.' },
                  { t: 'Strategic Partnerships', d: 'Long-term collaboration for sustained growth.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="mt-1 p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <span className="text-white font-bold block text-lg">{item.t}</span>
                      <span className="text-slate-400 text-sm leading-relaxed">{item.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Glass Card Testimonial */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-30"></div>
              <div className="relative h-auto bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-4xl text-emerald-900 font-serif font-black shadow-lg">"</div>

                <h3 className="text-sm font-bold text-emerald-400 tracking-widest uppercase mb-6">Testimonial</h3>
                <p className="text-slate-200 text-xl leading-relaxed mb-8 italic font-light">
                  "Working with AlgoLift India has been a game-changer. Their team's expertise in software development turned our vision into reality."
                </p>

                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    HM
                  </div>
                  <div>
                    <div className="text-white font-semibold">HR Manager</div>
                    <div className="text-slate-400 text-sm">Strategic Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band with Glow */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Empower your business with AI</h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto font-light">
            Experience the difference of working with a team that combines expertise, innovation, and a genuine commitment to your objectives.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-white text-emerald-900 font-bold rounded-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
