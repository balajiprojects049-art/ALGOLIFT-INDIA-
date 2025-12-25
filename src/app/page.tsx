import Link from 'next/link';
import { ArrowRight, Brain, Code, Cloud, Users, CheckCircle2, Globe, Shield, Star, Zap } from 'lucide-react';
import HeroSlideshow from '@/components/HeroSlideshow';
import ScrollReveal from '@/components/ScrollReveal';
import ServicesSlideshow from '@/components/ServicesSlideshow';
import CountUp from '@/components/CountUp';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-[#020617] pt-28 pb-40 overflow-hidden">
        {/* Animated Background Slideshow */}
        <HeroSlideshow
          images={[
            '/images/hero-home.png',
            '/images/hero-home-2.png',
            '/images/hero-home-3.png'
          ]}
          interval={6000}
        />

        {/* Gradient Overlay */}
        <div className="hero-overlay"></div>

        {/* Animated Particles */}
        <div className="animated-particles"></div>

        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 z-[3]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none z-[3]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none z-[3]"></div>

        <div className="container mx-auto px-6 relative z-10 text-center hero-content">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8 hover:bg-slate-800 hover:border-emerald-500/60 transition-all cursor-default shadow-lg shadow-emerald-900/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Transforming the Way You Do Business
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-2xl">
            Make a Good Plan & <br />
            <span className="animated-gradient-text drop-shadow-sm">Grow Your Business.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light drop-shadow-lg">
            We go beyond providing services—we build partnerships. Leverage our expertise in
            <span className="text-white font-medium"> AI, Custom Software, and Cloud Solutions</span> to align your technology with your business goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 overflow-hidden btn-glow"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span>Get Free Consultancy</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/programs"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>

          {/* Cards Floating Effect */}
          <div className="mt-20 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-90">
              {[
                { l: 'E-Certified', s: 'Excellence in IT', i: <Shield className="w-6 h-6 text-emerald-400" /> },
                { l: 'Global Delivery', s: 'USA, India, Vietnam', i: <Globe className="w-6 h-6 text-blue-400" /> },
                { l: 'Innovation', s: 'AI & Blockchain', i: <Zap className="w-6 h-6 text-yellow-400" /> },
                { l: 'Reliability', s: 'Client-Centric', i: <Star className="w-6 h-6 text-purple-400" /> },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900/70 backdrop-blur-md border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-slate-800/70 transition-colors hover:scale-105 duration-300">
                  <div className="p-2 bg-slate-800/80 rounded-lg">{item.i}</div>
                  <div className="font-semibold text-white">{item.l}</div>
                  <div className="text-xs text-slate-400">{item.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Slideshow Section */}
      <ServicesSlideshow />

      {/* Services Section with Beautiful Cards */}
      <section className="py-16 bg-[#020617] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm font-medium mb-4 border border-emerald-500/20">
              OUR EXPERTISE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Tailored IT Solutions</h2>
            <p className="text-slate-300 text-base max-w-2xl mx-auto">
              Delivering Next-Gen Experiences Through Custom Tech Innovations
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {[
              {
                title: 'AI Strategy & Consulting',
                desc: 'We help leading banking and financial institutions around the world modernize their tech processes and develop new products. Craft a roadmap to success by analyzing your objectives and identifying AI opportunities to make data-driven predictions that transform your business operations.',
                image: '/images/service-ai-consulting.jpg',
                color: 'emerald'
              },
              {
                title: 'Custom Software Development',
                desc: 'Tailored to meet unique needs, our software services ensure your applications are strategic assets driving success and innovation in your industry. From web applications to mobile solutions, we deliver cutting-edge technology that scales with your business.',
                image: '/images/service-software-dev.jpg',
                color: 'blue'
              },
              {
                title: 'Cloud Infrastructure',
                desc: 'Scalable and secure cloud solutions ensuring your business stays ahead in today\'s dynamic environment. We can be your technology ally to secure and safe operations using latest digital technologies while ensuring affordability and progress for modern enterprises.',
                image: '/images/service-cloud.jpg',
                color: 'purple'
              },
              {
                title: 'Digital Engineering',
                desc: 'Transform your manufacturing operations to revolutionize supply chain, achieve agility, and drive innovation with cutting-edge digital solutions. Reboot your manufacturing operations to transform supply chain, achieve agility, and implement smart factory technologies.',
                image: '/images/service-digital-engineering.jpg',
                color: 'orange'
              },
              {
                title: 'Staff Augmentation',
                desc: 'Full-service staffing for fortune clients. We provide contingent staffing and outsourcing services to help you build world-class teams. Let us digitalize education together with our tech solutions for immersive learning and be a trailblazer of education excellence.',
                image: '/images/service-staff-augmentation.jpg',
                color: 'pink'
              },
              {
                title: 'QA and Testing',
                desc: 'Ensure quality using latest digital technologies with affordability and progress. Rigorous testing processes to ensure the quality and reliability of software solutions, from automated testing to performance optimization and security audits.',
                image: '/images/hero-projects.jpg',
                color: 'teal'
              }
            ].map((service, i) => (
              <ScrollReveal
                key={i}
                direction={i % 2 === 0 ? 'left' : 'right'}
                delay={i * 100}
              >
                <div className={`group grid md:grid-cols-2 gap-0 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] ${i % 2 === 1 ? 'md:grid-flow-dense' : ''
                  }`}>
                  {/* Text Content */}
                  <div className={`p-6 md:p-8 flex flex-col justify-center ${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <h3 className={`text-lg md:text-xl font-bold mb-3 transition-colors ${i % 2 === 0
                      ? 'text-white group-hover:text-emerald-400'
                      : 'text-emerald-400 group-hover:text-white'
                      }`}>
                      {service.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      {service.desc}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={`relative h-48 md:h-56 ${i % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Technology Showcase */}
      <section className="relative h-[700px] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: 'transform' }}
          poster="/images/hero-abstract.png"
        >
          <source src="/7021937_Connection_Cyberspace_3840x2160.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-block px-4 py-2 bg-emerald-900/40 backdrop-blur-md text-emerald-300 rounded-full text-sm font-semibold mb-6 border border-emerald-500/30">
              ⚡ Powering Digital Transformation
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              Building the Future with
              <br />
              <span className="animated-gradient-text">Cutting-Edge Technology</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-10 drop-shadow-lg font-light">
              We harness the power of AI, Cloud Computing, and Modern Software Engineering
              to create solutions that drive innovation and accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/programs"
                className="group px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-500 transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] flex items-center gap-2"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
              >
                Learn More
              </Link>
            </div>
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
                  <ScrollReveal key={i} direction="left" delay={i * 100}>
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                      <div className="mt-1 p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <span className="text-white font-bold block text-lg">{item.t}</span>
                        <span className="text-slate-400 text-sm leading-relaxed">{item.d}</span>
                      </div>
                    </div>
                  </ScrollReveal>
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

      {/* Stats Section */}
      <section className="bg-[#020617] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/50">
            <div className="p-6">
              <CountUp
                end={12}
                suffix="+"
                duration={2500}
                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2"
              />
              <div className="text-slate-400 font-medium">Years of Experience</div>
            </div>
            <div className="p-6">
              <CountUp
                end={50}
                suffix="+"
                duration={2500}
                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2"
              />
              <div className="text-slate-400 font-medium">Enterprise Clients</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">24/7</div>
              <div className="text-slate-400 font-medium">Global Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band with Glow */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-abstract.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay - Mirror Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-emerald-800/50 to-teal-900/65"></div>
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
