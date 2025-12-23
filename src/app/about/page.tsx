import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us | AlgoLift India',
    description: 'We are a leading global services firm providing IT consulting, software development, and AI strategy.',
};

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header with Dark Hero */}
            <section className="relative bg-[#020617] pt-32 pb-20 overflow-hidden border-b border-slate-800">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
                        Global Delivery Model
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Who We Are</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        A leading global services firm headquartered in the USA with offshore delivery centers in India.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Transforming the Way You Do Business</h2>
                            <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
                        </div>

                        <h3 className="text-xl text-emerald-600 font-medium italic">"We build partnerships, not just software."</h3>

                        <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                            <p>
                                Founded with a vision to empower businesses through technology, <strong>AlgoLift India</strong> provides a portfolio of custom software development, IT consulting, and staff augmentation services.
                            </p>
                            <p>
                                We operate global delivery centers in Hyderabad, India, ensuring round-the-clock support. Our services cover legacy systems, emerging technologies like AI/ML, and cloud infrastructure.
                            </p>
                            <p>
                                Whether you are a startup needing a cloud strategy or a fortune client requiring contingent staffing, we have the expertise to drive your success.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
                        <h4 className="text-lg font-bold text-slate-900 mb-8 uppercase tracking-wider flex items-center gap-2">
                            <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                            Our Core Pillars
                        </h4>
                        <ul className="space-y-6">
                            {[
                                { title: 'Innovation', text: 'Embracing the latest technologies and industry trends.' },
                                { title: 'Client-Centricity', text: 'Tailored solutions for unique challenges.' },
                                { title: 'Reliability', text: 'High-quality services that exceed expectations.' },
                                { title: 'Global Reach', text: 'Operations in USA, India, and Vietnam.' },
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
                </div>
            </section>

            {/* Stats/Office Info */}
            <section className="bg-[#020617] text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/50">
                        <div className="p-6">
                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">12+</div>
                            <div className="text-slate-400 font-medium">Years of Experience</div>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">50+</div>
                            <div className="text-slate-400 font-medium">Enterprise Clients</div>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">24/7</div>
                            <div className="text-slate-400 font-medium">Global Support</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
