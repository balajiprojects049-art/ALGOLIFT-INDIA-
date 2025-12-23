import Link from 'next/link';
import { ArrowRight, Brain, Code, Cloud, Users, Globe, Shield } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | AlgoLift India',
    description: 'AI Strategy, Custom Software Development, and IT Consulting Services.',
};

export default function ServicesPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Dark Hero Section */}
            <section className="relative bg-[#020617] pt-32 pb-40 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Comprehensive IT Solutions
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        We offer a comprehensive portfolio of IT services to help you transform your business and stay ahead of the competition.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-24 relative z-20 pb-20">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* AI Services */}
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

                    {/* Software Development */}
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

                    {/* Cloud Solutions */}
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

                    {/* Staff Augmentation */}
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
                </div>
            </div>
        </div>
    );
}
