import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
    title: 'About Us | AlgoLift India',
    description: 'We are a leading global services firm providing IT consulting, software development, and AI strategy.',
};

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header with Dark Hero - Video Background */}
            <section className="relative bg-[#020617] min-h-[600px] pt-32 pb-24 overflow-hidden border-b border-slate-800">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover z-[1]"
                    style={{ willChange: 'transform' }}
                >
                    <source src="/images/6036449_Team_Business_3840x2160 (1).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Gradient Overlay - Lighter to show more video */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/60 z-[2]"></div>

                {/* Animated Particles */}
                <div className="animated-particles"></div>

                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none z-[3]"></div>

                <div className="container mx-auto px-6 text-center relative z-10 hero-content">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/70 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
                        Global Delivery Model
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">Who We Are</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto drop-shadow-lg">
                        A leading global services firm headquartered in the USA with offshore delivery centers in India.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    {/* Company Overview */}
                    <div className="max-w-6xl mx-auto mb-20">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium mb-4">
                                    About Our Company
                                </div>
                                <h2 className="text-4xl font-bold text-slate-900 mb-2">Company Overview</h2>
                                <div className="h-1 w-20 bg-emerald-500 rounded-full mx-auto"></div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-lg">
                                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                                    <strong className="text-emerald-600">AlgoLift India</strong>, founded in 2014, an E-certified company is a leading global services firm that provides a portfolio of contingent staffing and outsourcing services and IT enabled services (ITES) to a broad range of global clients and industries worldwide.
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                                    We are headquartered in <strong>Worthington, OH, USA</strong> with operations in United States and Canada and have offshore global delivery centers in <strong>India and Vietnam</strong>. Our services operate round-the-clock to ensure seamless support for our global clientele.
                                </p>

                                {/* Service Categories */}
                                <div className="mt-10 space-y-8">
                                    {/* Staff Augmentation */}
                                    <div className="border-l-4 border-emerald-500 pl-6">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                            <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">i</span>
                                            Staff Augmentation
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            AlgoLift provides full-service staffing solutions for large Fortune clients in <strong>Scientific, Clinical Research, Engineering and Financial Services to Information Technology</strong>, which includes legacy, current and emerging technologies, data warehousing, ERP, CRM, e-Commerce, enterprise application integration, conversions and interfaces and n-tiered web-enabled applications.
                                        </p>
                                    </div>

                                    {/* Projects Outsourcing */}
                                    <div className="border-l-4 border-blue-500 pl-6">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                            <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">ii</span>
                                            Projects Outsourcing
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            AlgoLift provides application management services, specialized IT services, such as outsourced <strong>Program Management Office (PMO) services</strong>, technology standardization services and <strong>Offshore Development Center (ODC) services</strong> in India and Vietnam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                        <ScrollReveal direction="left">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Transforming the Way You Do Business</h2>
                                    <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
                                </div>

                                <h3 className="text-xl text-emerald-600 font-medium italic">"We build partnerships, not just software."</h3>

                                <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                                    <p>
                                        Our commitment to excellence has made us a trusted partner for organizations seeking to leverage technology for competitive advantage. We combine deep industry knowledge with cutting-edge technical expertise.
                                    </p>
                                    <p>
                                        From AI/ML solutions to cloud infrastructure, legacy system modernization to mobile app development, we deliver end-to-end technology services that drive measurable business outcomes.
                                    </p>
                                    <p>
                                        Whether you are a startup needing a cloud strategy or a Fortune 500 company requiring contingent staffing, we have the expertise, resources, and global reach to drive your success.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={100}>
                            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
                                <h4 className="text-lg font-bold text-slate-900 mb-8 uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                                    Our Core Pillars
                                </h4>
                                <ul className="space-y-6">
                                    {[
                                        { title: 'Innovation', text: 'Embracing AI, Blockchain, and emerging technologies to stay ahead.' },
                                        { title: 'Client-Centricity', text: 'Tailored solutions for unique business challenges and goals.' },
                                        { title: 'Reliability', text: 'High-quality services that consistently exceed expectations.' },
                                        { title: 'Global Reach', text: 'Operations in USA, Canada, India, and Vietnam with 24/7 support.' },
                                        { title: 'Expertise', text: 'Deep domain knowledge across multiple industries and technologies.' },
                                        { title: 'Partnership', text: 'Building long-term relationships, not just completing projects.' },
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                                            <div>
                                                <h5 className="font-bold text-slate-900 text-lg">{item.title}</h5>
                                                <p className="text-slate-500 leading-relaxed text-sm">{item.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
