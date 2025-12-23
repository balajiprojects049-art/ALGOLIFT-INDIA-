import Link from 'next/link';
import { Check, Calendar, Users, Trophy, Briefcase } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MBA & Operations Program | AlgoLift India',
    description: 'Practical training for MBA graduates in HR, Marketing, and Business Analysis.',
};

export default function MBAProgramPage() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Dark Hero Section */}
            <section className="relative bg-[#020617] pt-32 pb-40 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-teal-500/30 text-teal-400 text-sm font-medium mb-6">
                        <Briefcase size={14} /> Management Track
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">MBA Operations & Tech Management</h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-8">
                        Bridge the gap between your MBA degree and the IT industry. Specialized training in Tech Recruitment, Digital Marketing, and Business Analysis.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-300">
                        <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50">
                            <Calendar className="text-teal-500" size={18} />
                            <span>Duration: 4 Months</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50">
                            <Users className="text-teal-500" size={18} />
                            <span>Format: Offline (Hyderabad)</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50">
                            <Trophy className="text-teal-500" size={18} />
                            <span>Job Assistance</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-20 relative z-20 grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Program Overview</h2>
                        <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                            The IT industry needs non-technical managers just as much as developers.
                            This program focuses on the operational side of software companies.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            You will work with our HR and Sales teams to understand the end-to-end lifecycle
                            of talent acquisition and client acquisition.
                        </p>
                    </section>

                    <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Specializations</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                'IT Recruitment Lifecycle',
                                'Technical Screening Basics',
                                'HR Operations & Compliance',
                                'B2B Sales & Lead Generation',
                                'Digital Marketing (SEO/SEM)',
                                'Social Media Branding',
                                'Client Relationship Management',
                                'Business Requirement Analysis',
                                'Agile & Scrum Methodologies',
                                'Corporate Communication',
                                'Interview Facilitation',
                                'Salary Negotiation'
                            ].map((skill, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-teal-50 border border-teal-100 hover:border-teal-300 transition-colors">
                                    <Check size={18} className="text-teal-600" />
                                    <span className="text-slate-700 font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Target Audience</h2>
                        <ul className="space-y-4">
                            {[
                                "MBA Freshers (HR, Marketing, Systems)", "BBA Graduates", "Non-IT professionals looking to switch to IT Admin roles"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 text-lg">
                                    <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="block lg:sticky lg:top-24 h-fit">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Upcoming Batches</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-teal-200 transition-colors">
                                <div>
                                    <div className="font-bold text-slate-900">July 20, 2025</div>
                                    <div className="text-xs text-slate-500 font-medium uppercase mt-1">Morning Session</div>
                                </div>
                                <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1.5 rounded-full">Open</span>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="block w-full text-center py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 hover:-translate-y-1 mb-4"
                        >
                            Apply Now
                        </Link>
                        <p className="text-center text-xs text-slate-500">
                            Limited seats available.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
