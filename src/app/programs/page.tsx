import Link from 'next/link';
import { ArrowRight, Brain, Code, Cloud, Users, Globe, Shield } from 'lucide-react';
import { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
    title: 'Services | AlgoLift India',
    description: 'AI Strategy, Custom Software Development, and IT Consulting Services.',
};

export default function ServicesPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Dark Hero Section */}
            <section className="relative bg-[#020617] pt-32 pb-40 overflow-hidden">
                {/* Animated Background Image */}
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(/images/hero-cloud.png)' }}
                />

                {/* Gradient Overlay */}
                <div className="hero-overlay"></div>

                {/* Animated Particles */}
                <div className="animated-particles"></div>

                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 z-[3]"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none z-[3]"></div>

                <div className="container mx-auto px-6 relative z-10 text-center hero-content">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/70 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Welcome To Our Company
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                        Elevate Your Business with<br />Our Comprehensive IT Services
                    </h1>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                        Ready to transform your small business? Explore each service in detail and discover how <strong>3Amigoarc</strong> can be your partner in IT excellence. Whether you're seeking to streamline operations, enhance security, or embrace the future with cutting-edge technologies, we've got you covered. Let's embark on a journey of innovation and success together!
                    </p>
                </div>
            </section>

            {/* Our Services Grid Section */}
            <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
                        <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            We help you elevate and advance with unparalleled custom IT services designed to empower organizations through efficiency, continuity, and innovative technology solutions tailored to meet the unique needs of your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <ScrollReveal delay={0}>
                            <Link href="/contact" className="group block bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 h-full">
                                <div className="flex flex-col items-center text-center h-full">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Brain className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                        AI Services
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                                        Harness the transformative power of artificial intelligence to enhance operational efficiency and unlock new insights for your business.
                                    </p>
                                    <span className="inline-flex items-center text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all">
                                        View More <ArrowRight size={16} className="ml-2" />
                                    </span>
                                </div>
                            </Link>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <Link href="/contact" className="group block bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 h-full">
                                <div className="flex flex-col items-center text-center h-full">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Code className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        Software Development
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                                        Trusted partner for innovative, scalable software solutions. From concept to deployment, we deliver results that drive your business forward.
                                    </p>
                                    <span className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                                        View More <ArrowRight size={16} className="ml-2" />
                                    </span>
                                </div>
                            </Link>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <Link href="/contact" className="group block bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-purple-500 hover:shadow-2xl transition-all duration-300 h-full">
                                <div className="flex flex-col items-center text-center h-full">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Globe className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                                        IT Consulting Services
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                                        Strategic guidance through the complex IT landscape with technical expertise to help you make informed decisions that drive success.
                                    </p>
                                    <span className="inline-flex items-center text-purple-600 font-semibold text-sm group-hover:gap-2 transition-all">
                                        View More <ArrowRight size={16} className="ml-2" />
                                    </span>
                                </div>
                            </Link>
                        </ScrollReveal>

                        <ScrollReveal delay={300}>
                            <Link href="/contact" className="group block bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 h-full">
                                <div className="flex flex-col items-center text-center h-full">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Cloud className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                                        Cloud Solutions
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                                        Unlock the full potential of the cloud with scalable, secure infrastructure that enables your team to work from anywhere with flexibility.
                                    </p>
                                    <span className="inline-flex items-center text-orange-600 font-semibold text-sm group-hover:gap-2 transition-all">
                                        View More <ArrowRight size={16} className="ml-2" />
                                    </span>
                                </div>
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Detailed Service Cards Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Services in Detail</h2>
                    <p className="text-slate-600 max-w-3xl mx-auto text-lg">
                        Explore our comprehensive range of technology services designed to transform your business and drive innovation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* AI Services */}
                    <ScrollReveal direction="left">
                        <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                            <div className="p-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Brain className="text-white" size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">AI Strategy & Consulting</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Craft a roadmap to success. We analyze your business objectives, identify AI opportunities, and guide you in developing a strategic approach.
                                </p>
                                <ul className="space-y-4 mb-8 text-slate-700">
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                        Data-driven predictions
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                        Machine Learning Models
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                        AI Opportunity Analysis
                                    </li>
                                </ul>
                                <Link href="/contact" className="inline-flex items-center text-emerald-600 font-semibold hover:gap-2 transition-all">
                                    Consult Now <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Software Development */}
                    <ScrollReveal direction="right" delay={100}>
                        <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                            <div className="p-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Code className="text-white" size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-700 transition-colors">Custom Software Development</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Tailored to meet your unique business needs. Our custom software ensures your applications are strategic assets.
                                </p>
                                <ul className="space-y-4 mb-8 text-slate-700">
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Web-based Solutions
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        E-Commerce Platforms
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Enterprise App Integration
                                    </li>
                                </ul>
                                <Link href="/contact" className="inline-flex items-center text-green-600 font-semibold hover:gap-2 transition-all">
                                    Start Building <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Cloud Solutions */}
                    <ScrollReveal direction="left" delay={200}>
                        <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                            <div className="p-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Cloud className="text-white" size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">Cloud Solutions</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Scalable and secure cloud infrastructure. Enable your team to work from any location with flexibility.
                                </p>
                                <ul className="space-y-4 mb-8 text-slate-700">
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        SaaS Application Dev
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        Cloud Migration
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        Infrastructure Optimization
                                    </li>
                                </ul>
                                <Link href="/contact" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
                                    Migrate to Cloud <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Staff Augmentation */}
                    <ScrollReveal direction="right" delay={300}>
                        <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                            <div className="p-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Users className="text-white" size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-700 transition-colors">Staff Augmentation</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Full-service staffing for fortune clients. We provide contingent staffing and outsourcing services.
                                </p>
                                <ul className="space-y-4 mb-8 text-slate-700">
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                        IT Staffing
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                        Offshore Delivery Centers
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                        Contract Hiring
                                    </li>
                                </ul>
                                <Link href="/contact" className="inline-flex items-center text-orange-600 font-semibold hover:gap-2 transition-all">
                                    Hire Talent <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* IT Consulting Services */}
                    <ScrollReveal direction="left" delay={100}>
                        <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                            <div className="p-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Globe className="text-white" size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors">IT Consulting Services</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Navigating the complex landscape of IT technology requires strategic guidance. Technical expertise, streamline operations, enhance efficiency, and help you make informed decisions.
                                </p>
                                <ul className="space-y-4 mb-8 text-slate-700">
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                        Technology Roadmap Planning
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                        Digital Transformation
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                        IT Strategy & Architecture
                                    </li>
                                </ul>
                                <Link href="/contact" className="inline-flex items-center text-purple-600 font-semibold hover:gap-2 transition-all">
                                    Get Consultation <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Java Training Programs */}
                    <ScrollReveal direction="right" delay={200}>
                        <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                            <div className="p-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Code className="text-white" size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-red-700 transition-colors">Java Training Programs</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Comprehensive Java training programs for aspiring developers. Master full-stack development, Spring Boot, microservices, and land your dream job.
                                </p>
                                <ul className="space-y-4 mb-8 text-slate-700">
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                        Full-Stack Java Development
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                        Spring Boot & Microservices
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                        Job Placement Assistance
                                    </li>
                                </ul>
                                <Link href="/programs/java" className="inline-flex items-center text-red-600 font-semibold hover:gap-2 transition-all">
                                    Explore Programs <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* MBA Job Opportunities */}
                    <ScrollReveal direction="left" delay={300}>
                        <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
                            <div className="p-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Users className="text-white" size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors">MBA Job Opportunities</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Exclusive MBA job opportunities and career guidance. Connect with top companies and accelerate your management career with our placement support.
                                </p>
                                <ul className="space-y-4 mb-8 text-slate-700">
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                        MBA Job Placements
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                        Career Counseling
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                        Resume & Interview Prep
                                    </li>
                                </ul>
                                <Link href="/programs/mba" className="inline-flex items-center text-indigo-600 font-semibold hover:gap-2 transition-all">
                                    View Opportunities <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
